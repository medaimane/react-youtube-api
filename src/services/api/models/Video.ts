export interface Video {
    id: string;
    title: string;
    description: string;
    channel: {
        name: string;
    };
}

export const NullVideo: Video = {
    id: '',
    title: '',
    description: '',
    channel: {
        name: '',
    },
};
