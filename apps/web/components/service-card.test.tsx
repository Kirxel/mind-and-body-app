import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import type { Service } from "@/lib/site-content";
import { ServiceCard } from "./service-card";

const service: Service = {
  slug: "massage",
  title: "Массаж",
  short: "Короткое описание",
  summary: "Подробное описание",
  details: ["Деталь"],
  supportAreas: ["напряжение"],
  priceFrom: "от 2 000 ₽",
  pricingGroup: "body"
};

describe("ServiceCard", () => {
  it("renders service title and link", () => {
    render(<ServiceCard service={service} />);

    expect(screen.getByRole("heading", { name: "Массаж" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Подробнее" })).toHaveAttribute("href", "/services/massage");
  });
});
