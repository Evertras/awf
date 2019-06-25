import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { GameState } from '.';
import { awfdata } from '../proto/messages';
import { MockedGameData } from '../testing';
import { GameStateIdle } from './idle';

const expect = chai.expect;
chai.use(sinonChai);

const FuncGetPotentialMoves = 'GetPotentialMoves';

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

    it('shows potential moves on the movement overlay when any potential moves are found', async () => {
        const state = new GameStateIdle();

        state.init(fakeGame.getGameStateData());

        const getMoves = fakeGame.awfStubs.getStub(FuncGetPotentialMoves);
        const response: awfdata.IGetPotentialMovesResponse = {
            moves: [
                { x: 1, y: 2 },
                { x: 2, y: 2 },
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

    it('changes to the unit selected state when a square with potential moves is clicked on', async () => {
        const state = new GameStateIdle();

        state.init(fakeGame.getGameStateData());

        const getMoves = fakeGame.awfStubs.getStub(FuncGetPotentialMoves);
        const response: awfdata.IGetPotentialMovesResponse = {
            moves: [
                { x: 1, y: 2 },
                { x: 2, y: 2 },
            ],
        };
        const encoded = awfdata.GetPotentialMovesResponse.encode(response).finish();

        getMoves.callsArgWith(1, undefined, encoded);

        const pos: awfdata.IPoint = {
            x: 1,
            y: 1,
        };

        const unit: awfdata.IUnit = {};

        fakeGame.addUnit(pos, unit);

        const nextState = await state.clicked(fakeGame.getGameStateData(), pos);

        expect(nextState).to.exist;
        expect(nextState!.state()).to.equal(GameState.UnitSelected);
    });
});
