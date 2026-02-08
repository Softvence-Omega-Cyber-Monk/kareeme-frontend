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
export interface Statement {
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
export interface StatementDetail {
  statementId: string;
  userId: string;
  statementMonth: number;
  statementYear: number;
  periodStart: string; // ISO date string
  periodEnd: string;   // ISO date string
  issuedOn: string;    // ISO date string
  paidOn: string | null; // can be null if not paid
  openingBalance: string;
  totalEarnings: string;
  totalExpenses: string;
  payment: string;
  closingBalance: string;
  status: string;
  notes: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

export interface StatementDetailResponse {
  success: boolean;
  message: string;
  data: StatementDetail;
}

