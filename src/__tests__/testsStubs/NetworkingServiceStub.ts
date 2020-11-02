import {NetworkingService} from "../../services/networking/NetworkingService";

export class NetworkingServiceStub implements NetworkingService {
    get = jest.fn();
    getJSON = jest.fn();
}
