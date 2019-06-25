import { awfdata } from '../proto/messages';
import { IGameStateData } from '../states';
import { FakeGameVisuals } from './visuals';
import { WasmStub } from './wasmStub';

export class MockedGameData {
    public awfStubs: WasmStub;
    public awfService: awfdata.WasmService;
    public visuals: FakeGameVisuals;

    constructor() {
        this.awfStubs = new WasmStub();
        this.awfService = awfdata.WasmService.create(this.awfStubs.getImpl(), false, false);
        this.visuals = new FakeGameVisuals();
    }

    public getGameStateData(): IGameStateData {
        return {
            awfService: this.awfService,
            visuals: this.visuals,
        };
    }

    public addUnit(pos: awfdata.IPoint, unit: awfdata.IUnit) {
        this.visuals.map.data.tiles![(pos.y!-1) * this.visuals.map.width + (pos.x!-1)].unit = unit;
    }
}
