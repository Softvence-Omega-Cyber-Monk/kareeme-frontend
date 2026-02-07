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
        createArtists: builder.mutation({
            query: (newArtist) => ({
                url: "/artists",
                method: "POST",
                body: newArtist
            })
        })

    })
})
export const { useCreateNewReleaseMutation, useCreateArtistsMutation } = newReleaseApi