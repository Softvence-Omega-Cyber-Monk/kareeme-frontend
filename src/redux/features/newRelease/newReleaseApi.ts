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
    })
})

export const { 
    useCreateNewReleaseMutation, 
    useCreateArtistsMutation,
    useCreateTrackMutation,
    useCreateSplitSheetMutation,
    useUploadTrackAudioMutation
} = newReleaseApi;