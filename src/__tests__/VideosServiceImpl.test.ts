import {VideosServiceImpl} from "../services/api/VideoPlayerService/VideosServiceImpl";
import {NetworkingServiceStub} from "./testsStubs/NetworkingServiceStub";
import {YOUTUBE_KEY} from "../services/networking/NetworkingServiceConfiguration";
import {VideosGateway} from "../services/api/VideoPlayerService/VideosGateway";
import {of, throwError} from "rxjs";
import {videoStub} from "./testsStubs/videosStub";
import {Video} from "../services/api/models/Video";
import {videosDataStub} from "./testsStubs/videosJSONStub";
import {APIError} from "../services/api/APIError";

describe('VideosServiceImpl', () => {
    let networkingService: NetworkingServiceStub;

    let sut: VideosGateway;

    beforeEach(() => {
        networkingService = new NetworkingServiceStub();

        sut = new VideosServiceImpl(networkingService);

        networkingService.getJSON.mockReturnValue(of(void 0));
    })

    describe('getVideos', () => {
        const searchString = 'any search';

        it('sends request to correct url', () => {
            sut.searchVideos(searchString);

            expect(networkingService.getJSON).toBeCalledWith(
                `v3/search?key=${YOUTUBE_KEY}&type=video&part=snippet&maxResults=1&q=${searchString}`,
            );
        })

        it('returns videos list', () => {
            const expectedVideos: Video[] = [videoStub];

            networkingService.getJSON.mockReturnValue(of(videosDataStub));

            const next = jest.fn();
            const error = jest.fn();

            sut.searchVideos(searchString).subscribe(next, error);

            expect(next).toBeCalledWith(expectedVideos);
            expect(error).not.toBeCalled();
        });

        describe('when call failed', () => {
            it('throws exception in case of error', () => {
                const apiError: APIError = {
                    status: 404,
                    errorMessages: [],
                };
                networkingService.getJSON.mockReturnValue(throwError(apiError));
                const next = jest.fn();
                const error = jest.fn();

                sut.searchVideos(searchString).subscribe(next, error);

                expect(next).not.toBeCalled();
                expect(error).toBeCalledWith(apiError);
            });
        });
    });
});
