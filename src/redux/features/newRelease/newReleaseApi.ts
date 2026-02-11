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
        }),
        createTrack: builder.mutation({
            query: (trackData) => ({
                url: "/tracks",
                method: "POST",
                body: trackData
            })
        }),
        createSplitSheet: builder.mutation({
            query: (splitData) => ({
                url: "/split-sheets",
                method: "POST",
                body: splitData
            })
        }),
        uploadTrackAudio: builder.mutation({
            query: ({ trackId, audioFile }: { trackId: string; audioFile: File }) => {
                console.log("Mutation: uploadTrackAudio initializing FormData for file:", audioFile.name);
                const formData = new FormData();
                formData.append("audioFile", audioFile);
                return {
                    url: `/tracks/${trackId}/upload-audio`,
                    method: "POST",
                    body: formData,
                };
            },
        }),
        getAllReleases: builder.query({
            query: ({ limit, page }) => ({
                url: "/releases",
                method: "GET",
                params: { limit, page }
            })
        }),
        getSingleRelease: builder.query({
            query: (releaseId) => ({
                url: `/releases/${releaseId}`,
                method: "GET"
            })
        }),
        createBackCatalogue: builder.mutation({
            query: (data) => ({
                url: "/back-catalogue",
                method: "POST",
                body: data
            })
        }),
        getAllBackCatalogue: builder.query({
            query: ({ limit, page }) => ({
                url: "/back-catalogue",
                method: "GET",
                params: { limit, page }
            })
        }),
        getSingleBackCatalogue: builder.query({
            query: (id) => ({
                url: `/back-catalogue/${id}`,
                method: "GET"
            })
        }),
        updateRelease: builder.mutation({
            query: ({ id, data }) => ({
                url: `/releases/${id}`,
                method: "PATCH",
                body: data
            })
        }),
        updateTrack: builder.mutation({
            query: ({ id, data }) => ({
                url: `/tracks/${id}`,
                method: "PATCH",
                body: data
            })
        }),
        updateSplitSheet: builder.mutation({
            query: ({ id, data }) => ({
                url: `/split-sheets/${id}`,
                method: "PATCH",
                body: data
            })
        }),
        updateBackCatalogue: builder.mutation({
            query: ({ id, data }) => ({
                url: `/back-catalogue/${id}`,
                method: "PATCH",
                body: data
            })
        })
    })
})

export const {
    useCreateNewReleaseMutation,
    useCreateArtistsMutation,
    useCreateTrackMutation,
    useCreateSplitSheetMutation,
    useUploadTrackAudioMutation,
    useGetAllReleasesQuery,
    useGetSingleReleaseQuery,
    useCreateBackCatalogueMutation,
    useUpdateBackCatalogueMutation,
    useUpdateReleaseMutation,
    useUpdateTrackMutation,
    useUpdateSplitSheetMutation,
    useGetAllBackCatalogueQuery,
    useGetSingleBackCatalogueQuery
} = newReleaseApi;