import sinon from 'sinon';

export class WasmStub {
    private readonly wasmStubs: { [id: string]: sinon.SinonStub } = {};

    public getStub(methodName: string): sinon.SinonStub {
        const existing = this.wasmStubs[methodName];

        if (!existing) {
            this.wasmStubs[methodName] = sinon.stub();
        }

        return existing;
    }

    public getImpl(): (method: any, requestData: any, callback: any) => void {
        return (method: any, requestData: any, callback: any) => {
            const stub = this.getStub(method.Name);

            stub(requestData, callback);
        };
    }
}
