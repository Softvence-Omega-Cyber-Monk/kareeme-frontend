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
interface Statement {
  statementId: string;
  title: string;
  subtitle: string;
  status: string;
  paymentAmount: string;
  month: number;
  year: number;
  createdAt: string; // ISO date string
}

interface Metadata {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
}

export interface StatementsResponse {
  success: boolean;
  message: string;
  data: Statement[];
  metadata: Metadata;
}

