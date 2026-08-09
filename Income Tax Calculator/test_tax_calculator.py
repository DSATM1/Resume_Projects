import unittest

from tax_calculator import calculate_income_tax


class TaxCalculatorTests(unittest.TestCase):
    def test_zero_income(self):
        result = calculate_income_tax(0)
        self.assertEqual(result["taxable_income"], 0.0)
        self.assertEqual(result["old_regime_tax"], 0.0)
        self.assertEqual(result["new_regime_tax"], 0.0)
        self.assertEqual(result["recommended_regime"], "old")

    def test_deductions_reduce_taxable_income(self):
        result = calculate_income_tax(500000, 100000)
        self.assertEqual(result["taxable_income"], 400000.0)

    def test_recommended_regime_selection(self):
        result = calculate_income_tax(1000000)
        self.assertEqual(result["recommended_regime"], "old")


if __name__ == "__main__":
    unittest.main()
