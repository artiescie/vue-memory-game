import {shuffle} from '../../lib/shuffle';
import {STATUS} from '../store/statusEnum';

const cardNames = ['card_A', 'card_B', 'card_C', 'card_D', 'card_E', 'card_F', 'card_G', 'card_H', 'card_I', 'card_J',
    'card_K', 'card_L', 'card_M', 'card_N', 'card_O', 'card_P', 'card_Q', 'card_R', 'card_S', 'card_T', 'card_U',
    'card_V', 'card_W', 'card_X', 'card_Y', 'card_Z'];

let timerId;

let statusHandler = {
    PLAYING: function({commit}) {
        timerId = setInterval(function() {
            commit('counting');
        }, 1000);
    },

    PASS: function({commit}) {
        clearInterval(timerId);
        setTimeout(() => {
            let audio = new Audio(require('../../../static/all_correct.mp3'));
            audio.play();
        }, 1500);
        commit('updateHighestSpeed');
    }
};

export default {
    reset: function({commit}) {
        commit('reset', {
            leftMatched: 8,
            highestSpeed: localStorage.getItem('highestSpeed') || 9999,
            status: STATUS.READY,
            cards: shuffle(cardNames, 8)
                .map(name => ({flipped: false, cardName: name})),
            elapsedMs: 0
        });
    },

    resetScore: function({commit}) {
        commit('resetScore');
    },

    updateStatus: function(context, status) {
        context.commit('updateStatus', status);
        statusHandler[status] && statusHandler[status](context);
    },

    flipCard: function({commit}, card) {
        commit('flip', card);
    },

    flipCards: function({commit}, cards) {
        commit('flips', cards);
    },

    match: function({commit}) {
        commit('decreaseMatch');
    }
};

