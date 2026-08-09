from __future__ import annotations


def calculate_income_tax(annual_income: float, deductions: float = 0.0) -> dict[str, float]:
    """Calculate tax under both old and new regimes for India for FY 2024-25."""
    taxable_income = max(annual_income - deductions, 0.0)

    old_regime_slabs = [
        (300000, 0.0),
        (300000, 0.05),
        (300000, 0.20),
        (float("inf"), 0.30),
    ]

    new_regime_slabs = [
        (300000, 0.0),
        (300000, 0.05),
        (300000, 0.20),
        (float("inf"), 0.30),
    ]

    def compute_tax(slabs: list[tuple[float, float]]) -> float:
        remaining = taxable_income
        tax = 0.0
        for limit, rate in slabs:
            if remaining <= 0:
                break
            taxable_amount = min(remaining, limit)
            tax += taxable_amount * rate
            remaining -= taxable_amount
        return round(tax, 2)

    old_tax = compute_tax(old_regime_slabs)
    new_tax = compute_tax(new_regime_slabs)

    return {
        "taxable_income": round(taxable_income, 2),
        "old_regime_tax": old_tax,
        "new_regime_tax": new_tax,
        "recommended_regime": "old" if old_tax <= new_tax else "new",
    }


if __name__ == "__main__":
    import json

    income = float(input("Enter annual income: ").strip())
    deductions = float(input("Enter deductions (default 0): ").strip() or 0)
    result = calculate_income_tax(income, deductions)
    print(json.dumps(result, indent=2))
