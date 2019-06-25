import sinon from 'sinon';

export class WasmStub {
    private readonly wasmStubs: { [id: string]: sinon.SinonStub } = {};

    public getStub(methodName: string): sinon.SinonStub {
        let existing = this.wasmStubs[methodName];

        if (!existing) {
            existing = sinon.stub();
            this.wasmStubs[methodName] = existing;
        }

        return existing;
    }

    public getImpl(): (method: any, requestData: any, callback: any) => void {
        return (method: any, requestData: any, callback: any) => {
            const stub = this.getStub(method.name);

            stub(requestData, callback);
        };
    }
}
