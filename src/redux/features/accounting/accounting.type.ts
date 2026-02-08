/* eslint-disable @typescript-eslint/no-explicit-any */

export interface MonthlyData {
    date: string;
    income: number;
    expenses: number;
}

// Main data type
export interface ProfitLossData {
    year: number;
    totalIncome: string;
    totalExpenses: string;
    netProfitLoss: string;
    monthlyData: MonthlyData[];
    incomeTransactions: any[];
    expenseTransactions: any[];
}

// Full API response type
export interface ProfitLossResponse {
    success: boolean;
    message: string;
    data: ProfitLossData;
}
