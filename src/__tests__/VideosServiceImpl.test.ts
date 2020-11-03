import {VideosServiceImpl} from "../services/api/VideoPlayerService/VideosServiceImpl";
import {NetworkingServiceStub} from "./testsStubs/NetworkingServiceStub";
import {VideosGateway} from "../services/api/VideoPlayerService/VideosGateway";
import {of, throwError} from "rxjs";
import {videoStub} from "./testsStubs/videosStub";
import {Video} from "../services/api/models/Video";
import {videosDataStub} from "./testsStubs/videosJSONStub";
import {APIError} from "../services/api/APIError";

const mockYoutubeDataAPIKey = () => {
    process.env.REACT_APP_YOUTUBE_DATA_API_KEY = 'SOME_YOUTUBE_API_KEY';
}

describe('VideosServiceImpl', () => {
    let sut: VideosGateway;
    let networkingService: NetworkingServiceStub;

    const next = jest.fn();
    const error = jest.fn();

    beforeEach(() => {
        networkingService = new NetworkingServiceStub();

        sut = new VideosServiceImpl(networkingService);

        networkingService.getJSON.mockReturnValue(of(void 0));
    })

    describe('getVideos', () => {
        const searchString = 'any search';

        beforeEach(() => {
            mockYoutubeDataAPIKey();
        })

        it('sends request to correct url', () => {
            sut.searchVideos(searchString);

            expect(networkingService.getJSON).toBeCalledWith(
                `v3/search?key=SOME_YOUTUBE_API_KEY&type=video&part=snippet&maxResults=1&q=${searchString}`,
            );
        })

        it('returns videos list', () => {
            const expectedVideos: Video[] = [videoStub];
            networkingService.getJSON.mockReturnValue(of(videosDataStub));

            sut.searchVideos(searchString).subscribe(next, error);

            expect(next).toBeCalledWith(expectedVideos);
            expect(error).not.toBeCalled();
        });

        describe('when call failed', () => {
            it('throws exception in case of error', () => {
                const apiError: APIError = { status: 404, errorMessages: [] };
                networkingService.getJSON.mockReturnValue(throwError(apiError));

                sut.searchVideos(searchString).subscribe(next, error);

                expect(next).not.toBeCalled();
                expect(error).toBeCalledWith(apiError);
            });
        });
    });
});
