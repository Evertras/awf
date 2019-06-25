import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { GameState } from '.';
import { MockedGameData } from '../testing';
import { GameStateIdle } from './idle';

const expect = chai.expect;
chai.use(sinonChai);

describe('GameStateIdle', () => {
    afterEach(() => {
        sinon.restore();
    });

    it('returns the correct state enum value', () => {
        const state = new GameStateIdle();

        expect(state.state()).to.be.equal(GameState.Idle);
    });

    it('clears any existing overlays on init', () => {
        const fakeGame = new MockedGameData();
        const state = new GameStateIdle();

        state.init(fakeGame.getGameStateData());

        expect(fakeGame.visuals.movementOverlay.clear).to.have.been.called;
    });
});
