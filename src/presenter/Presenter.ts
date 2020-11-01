type UpdateHandler<Output> = (output: Output) => void;

export abstract class Presenter<Output> {
    private updateHandler?: UpdateHandler<Output>;

    abstract getInitialOutput(): Output;

    setUpdateHandler(updateHandler: UpdateHandler<Output>): void {
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
