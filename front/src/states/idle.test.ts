import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { GameState } from '.';
import { awfdata } from '../proto/messages';
import { MockedGameData } from '../testing';
import { GameStateIdle } from './idle';

const expect = chai.expect;
chai.use(sinonChai);

describe('GameStateIdle', () => {
    let fakeGame: MockedGameData;

    beforeEach(() => {
        fakeGame = new MockedGameData();
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

        state.init(fakeGame.getGameStateData());

        expect(fakeGame.visuals.movementOverlay.clear).to.have.been.called;
    });

    it('shows potential moves on the movement overlay', async () => {
        const state = new GameStateIdle();

        state.init(fakeGame.getGameStateData());

        const getMoves = fakeGame.awfStubs.getStub('GetPotentialMoves');
        const response: awfdata.IGetPotentialMovesResponse = {
            moves: [
                { x: 1, y: 2 },
                { x: 3, y: 2 },
            ],
        };
        const encoded = awfdata.GetPotentialMovesResponse.encode(response).finish();

        getMoves.callsArgWith(1, undefined, encoded);

        const pos: awfdata.IPoint = {
            x: 1,
            y: 1,
        };

        await state.mouseMovedTo(fakeGame.getGameStateData(), pos);

        expect(fakeGame.visuals.movementOverlay.clear).to.have.been.called;
        expect(getMoves).to.have.been.calledOnce;
        expect(response.moves!.length).to.be.greaterThan(0);
        expect(fakeGame.visuals.movementOverlay.enableSquare).to.have.callCount(response.moves!.length);
    });
});
