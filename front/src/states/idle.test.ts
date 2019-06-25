import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { GameState, IGameStateData } from '.';
import { awfdata } from '../proto/messages';
import { FakeGameVisuals } from '../testing/visuals';
import { WasmStub } from '../testing/wasmStub';
import { GameStateIdle } from './idle';

const expect = chai.expect;
chai.use(sinonChai);

let awfStubs: WasmStub;
let awfService: awfdata.WasmService;
let visuals: FakeGameVisuals;

describe('GameStateIdle', () => {
    beforeEach(() => {
        awfStubs = new WasmStub();
        awfService = awfdata.WasmService.create(awfStubs.getImpl(), false, false);
        visuals = new FakeGameVisuals();
    });

    afterEach(() => {
        sinon.restore();
    });

    it('returns the correct state enum value', () => {
        const state = new GameStateIdle();

        expect(state.state()).to.be.equal(GameState.Idle);
    });

    it('clears any existing overlays on init', () => {
        const state = new GameStateIdle();

        const data: IGameStateData = {
            awfService,
            visuals,
        };

        state.init(data);

        expect(visuals.movementOverlay.clear).to.have.been.called;
    });
});
