import Vue from 'vue'
import Vuex from 'vuex'
import { WSAETOOMANYREFS } from 'constants';

Vue.use(Vuex)


export const store = new Vuex.Store({
    state: {
        legends: 0,
        workout: 0,
        campfire: 0,
        electronica: 0,
        acoustic: 0,
        chill: 0
    },
    getters: {
        displayLegends: state => {
            return state.legends
        },
        displayWorkout: state => {
            return state.workout
        },
        displayCampfire: state => {
            return state.campfire
        },
        displayElectronica: state => {
            return state.electronica
        },
        displayAcoustic: state => {
            return state.acoustic
        },
        displayChill: state => {
            return state.chill
        },
        displayResult: state => {
                if(state.legends >= state.workout && state.legends >= state.campfire && state.legends >= state.electronica && state.legends >= state.acoustic && state.legends >= state.chill) {
                    return 'legend'; //legend
                } else if(state.workout >= state.legends && state.workout >= state.campfire && state.workout >= state.electronica && state.workout >= state.acoustic && state.workout >= state.chill) {
                    return 'workout'; // workout
                } else if(state.campfire >= state.legends && state.campfire >= state.workout && state.campfire >= state.electronica && state.campfire >= state.acoustic && state.campfire >= state.chill) {
                    return 'campfire'; // campfire
                } else if(state.electronica >= state.legends && state.electronica >= state.workout && state.electronica >= state.campfire && state.electronica >= state.acoustic && state.electronica >= state.chill) {
                    return 'electronica'; //electronica
                } else if(state.acoustic >= state.legends && state.acoustic >= state.workout && state.acoustic >= state.campfire && state.acoustic >= state.electronica && state.acoustic >= state.chill) {
                    return 'acoustic'; //acoustic
                } else if(state.chill >= state.legends && state.chill >= state.workout && state.chill >= state.campfire && state.chill >= state.electronica && state.chill >= state.acoustic) {
                    return 'chill'; //chill
                }
        }
    },
    mutations: {
        addToLegends: state => {
            state.legends++
        },
        addToWorkout: state => {
            state.workout++
        },
        addToCampfire: state => {
            state.campfire++
        },
        addToElectronica: state => {
            state.electronica++
        },
        addToAcoustic: state => {
            state.acoustic++
        },
        addToChill: state => {
            state.chill++
        }
    }
})