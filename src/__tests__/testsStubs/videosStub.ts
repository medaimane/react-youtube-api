import {Video} from "../../services/api/models/Video";

export const videoStub: Video = {
    id: 'sBws8MSXN7A',
    title: 'React JS Crash Course',
    description: 'In this crash course you will learn what React JS is and the fundamentals such as components, state, props, JSX, events, etc. Modern React Front To Back - 13.5 ...',
    channel: {
        name: 'Traversy Media',
    },
};

export const videosStub: Video[] = [
    videoStub,
    {
        ...videoStub,
        id: 'some id',
    },
    {
        ...videoStub,
        id: 'some other id',
    }
]
