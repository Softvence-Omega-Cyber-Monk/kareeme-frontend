import { ProfitLossResponse } from './accounting.type';
import { baseApi } from "@/redux/hooks/baseApi";

const accountingApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAccountProfitAndLoss: builder.query<ProfitLossResponse, { year: string }>({
            query: ({ year }) => ({
                url: "/accounting/profit-loss",
                method: "GET",
                params: { year }
            })
        })
    })
})
export const { useGetAccountProfitAndLossQuery } = accountingApi