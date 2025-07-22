// Задание 2: Пространства имен для финансовых операций

export namespace Finance {
  /**
   * Калькулятор кредитных платежей
   */
  export class LoanCalculator {
    /**
     * Рассчитывает ежемесячный платеж по аннуитетной схеме
     * @param principal - основная сумма кредита
     * @param annualRate - годовая процентная ставка (в процентах)
     * @param termInMonths - срок кредита в месяцах
     * @returns ежемесячный платеж
     */
    static calculateMonthlyPayment(
      principal: number,
      annualRate: number,
      termInMonths: number
    ): number {
      const monthlyRate = annualRate / 100 / 12;

      if (monthlyRate === 0) {
        return principal / termInMonths;
      }

      const monthlyPayment =
        (principal * (monthlyRate * Math.pow(1 + monthlyRate, termInMonths))) /
        (Math.pow(1 + monthlyRate, termInMonths) - 1);

      return Math.round(monthlyPayment * 100) / 100;
    }

    /**
     * Рассчитывает общую сумму переплаты
     */
    static calculateTotalInterest(
      principal: number,
      annualRate: number,
      termInMonths: number
    ): number {
      const monthlyPayment = this.calculateMonthlyPayment(
        principal,
        annualRate,
        termInMonths
      );
      const totalPaid = monthlyPayment * termInMonths;
      return Math.round((totalPaid - principal) * 100) / 100;
    }
  }

  /**
   * Калькулятор налогов
   */
  export class TaxCalculator {
    private static readonly TAX_RATES = {
      INCOME_TAX: 0.18, // 18% подоходный налог в Украине
      WAR_TAX: 0.05, // 5% военный сбор
    };

    /**
     * Рассчитывает подоходный налог
     * @param income - доход
     * @returns сумма налога
     */
    static calculateIncomeTax(income: number): number {
      return Math.round(income * this.TAX_RATES.INCOME_TAX * 100) / 100;
    }

    /**
     * Рассчитывает военный сбор
     * @param income - доход
     * @returns сумма военный сбор
     */
    static calculatewarTax(income: number): number {
      return Math.round(income * this.TAX_RATES.WAR_TAX * 100) / 100;
    }

    /**
     * Рассчитывает общую налоговую нагрузку
     * @param income - доход
     * @returns объект с разбивкой налогов
     */
    static calculateTotalTax(income: number): {
      incomeTax: number;
      warTax: number;
      total: number;
      netIncome: number;
    } {
      const incomeTax = this.calculateIncomeTax(income);
      const warTax = this.calculatewarTax(income);
      const total = incomeTax + warTax;
      const netIncome = income - total;

      return {
        incomeTax,
        warTax,
        total: Math.round(total * 100) / 100,
        netIncome: Math.round(netIncome * 100) / 100,
      };
    }
  }
}
// Задание 2: Тестирование финансовых операций
console.log("\n2. ТЕСТИРОВАНИЕ ФИНАНСОВЫХ ОПЕРАЦИЙ");
console.log("===================================");

// Тестирование калькулятора кредитов
const loanAmount = 1000000;
const annualRate = 12; // 12% годовых
const termInMonths = 24; // 2 года

const monthlyPayment = Finance.LoanCalculator.calculateMonthlyPayment(
  loanAmount,
  annualRate,
  termInMonths
);
const totalInterest = Finance.LoanCalculator.calculateTotalInterest(
  loanAmount,
  annualRate,
  termInMonths
);

console.log(`Кредит: ${loanAmount.toLocaleString("ua-UA")} грн.`);
console.log(`Ставка: ${annualRate}% годовых`);
console.log(`Срок: ${termInMonths} месяцев`);
console.log(
  `Ежемесячный платеж: ${monthlyPayment.toLocaleString("ua-UA")} грн.`
);
console.log(`Переплата: ${totalInterest.toLocaleString("ua-UA")} грн.`);

// Тестирование налогового калькулятора
const income = 500000; // 500 тыс. грн
const taxInfo = Finance.TaxCalculator.calculateTotalTax(income);

console.log(`\nДоход: ${income.toLocaleString("ua-UA")} грн.`);
console.log(
  `Подоходный налог (18%): ${taxInfo.incomeTax.toLocaleString("ua-UA")} грн.`
);
console.log(
  `Военный сбор (5%): ${taxInfo.warTax.toLocaleString("ua-UA")} грн.`
);
console.log(
  `Общая налоговая нагрузка: ${taxInfo.total.toLocaleString("ua-UA")} грн.`
);
console.log(`Чистый доход: ${taxInfo.netIncome.toLocaleString("ua-UA")} грн.`);
