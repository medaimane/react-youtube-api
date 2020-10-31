export abstract class Presenter<Output> {
    private updateHandler?: (output: Output) => void;

    abstract getInitialOutput(): Output;

    setUpdateHandler(updateHandler: (output: Output) => void): void {
        this.updateHandler = updateHandler;
    }

    protected update(output: Output): void {
        if (this.updateHandler) {
            this.updateHandler(output);
        } else {
            throw new Error('Presenter: you must set updateHandler before calling update: ' + this);
        }
    }
}
