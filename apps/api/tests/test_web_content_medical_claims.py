import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[3]
WEB_ROOT = ROOT / "apps" / "web"
USER_FACING_EXTENSIONS = {".ts", ".tsx", ".md", ".mdx"}
EXCLUDED_PARTS = {"test", "tests", "__tests__", "stories", "fixtures"}

FORBIDDEN_PATTERNS = [
    re.compile(r"\bлеч(?:им|ит|ите|у|ишь)\b", re.IGNORECASE),
    re.compile(r"\bвылеч(?:им|ит|ите|у|ишь)\b", re.IGNORECASE),
    re.compile(r"\bизлеч(?:им|ит|ите|у|ишь)\b", re.IGNORECASE),
    re.compile(r"\bисцел(?:им|ит|ите|ю|ишь)\b", re.IGNORECASE),
    re.compile(r"гарант\w*\s+выздоров", re.IGNORECASE),
    re.compile(r"гарант\w*\s+(?:устран|избав)", re.IGNORECASE),
]


def _candidate_files() -> list[Path]:
    return [
        path
        for path in WEB_ROOT.rglob("*")
        if path.is_file()
        and path.suffix in USER_FACING_EXTENSIONS
        and not any(part in EXCLUDED_PARTS for part in path.parts)
    ]


def test_web_content_has_no_forbidden_medical_claims() -> None:
    matches: list[str] = []

    for path in _candidate_files():
        content = path.read_text(encoding="utf-8")
        for pattern in FORBIDDEN_PATTERNS:
            if pattern.search(content):
                matches.append(f"{path.relative_to(ROOT)} -> {pattern.pattern}")

    assert not matches, "Forbidden medical claims found:\n" + "\n".join(matches)
