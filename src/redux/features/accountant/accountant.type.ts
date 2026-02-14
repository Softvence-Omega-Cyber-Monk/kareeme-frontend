/* eslint-disable @typescript-eslint/no-explicit-any */
// Accountant Dashboard types
export interface EarningsBreakdownItem {
  platform: string;
  grossEarnings: string;
  commission: string;
  netEarnings: string;
}

export interface AccountantDashboardData {
  totalEarnings: string;
  platformCommission: string;
  netEarnings: string;
  earningsBreakdown: EarningsBreakdownItem[];
  pendingPaymentAmount: string;
}

export interface AccountantDashboardResponse {
  success: boolean;
  message: string;
  data: AccountantDashboardData;
}
