import {Presenter} from "../../presenter/Presenter";
import {AlertState} from "../../components/AppSnackBar/AppSnackBar";

export interface SnackBarOutput {
    isOpen: boolean;
    alertState: AlertState;
    message: string;
}

export const SnackBarInitialOutput: SnackBarOutput = {
    isOpen: false,
    alertState: AlertState.Info,
    message: '',
}

// TODO: Unit test.
export class SnackBarPresenter extends Presenter<SnackBarOutput> {
    private isOpen: boolean = false;
    private message: string = '';
    private alertState: AlertState = AlertState.Info;

    getInitialOutput(): SnackBarOutput {
        return SnackBarInitialOutput;
    }

    show = (message: string, state: AlertState) => {
        this.alertState = state;
        this.message = message;

        this.isOpen = true;

        this.updateOutput();
    }

    hide = () => {
        this.isOpen = false;
        this.message = '';
        this.alertState = AlertState.Info;

        this.updateOutput();
    }

    private updateOutput = () => {
        this.update({
            message: this.message,
            isOpen: this.isOpen,
            alertState: this.alertState,
        })
    }
}
