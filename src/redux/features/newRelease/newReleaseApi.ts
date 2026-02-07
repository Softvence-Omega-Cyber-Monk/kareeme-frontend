import { baseApi } from "@/redux/hooks/baseApi";

const newReleaseApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createNewRelease: builder.mutation({
            query: (data) => ({
                url: "/releases",
                method: "POST",
                body: data
            })
        }),

    })
})
export const { useCreateNewReleaseMutation } = newReleaseApi