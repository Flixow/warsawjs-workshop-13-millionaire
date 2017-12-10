import Vue from 'vue'
import Vuex from 'vuex'
import data from '../db.js'

import {STATES} from './common/const'

Vue.use(Vuex)

const INITIAL_STATE = {
  questions: [],
  currentQuestionIndex: 0,
  status: STATES.NOT_PLAYING,
}

const getters = {
  questions: state => state.questions,
  currentQuestion: state => {
    const currentRound = getters.currentRound(state)
    const questions = getters.questions(state)

    return questions[currentRound]
  },
  maxRounds: state => state.questions.length,
  status: state => state.status,
  currentRound: state => state.currentQuestionIndex
}

const actions = {
  // Tu powinno być zapytanie do api dlatego jest to akcją
  initGame: ({commit}) => {
    return commit('resetGame', data.questions)
  }
}

const mutations = {
  resetGame: (state, questions) => {
    state.questions = questions
    state.currentQuestionIndex = 0
    state.status = STATES.NOT_PLAYING
  },
  checkAnswer: (state, answer) => {
    const currentQuestion = getters.currentQuestion(state)
    if (currentQuestion.correct_answer === answer) {
      state.currentQuestionIndex++

      if (getters.currentRound(state) === getters.maxRounds(state)) {
        state.status = STATES.WON
      } else {
        state.status = STATES.PLAYING
      }
    } else {
      state.status = STATES.LOST
    }
  }
}

export default new Vuex.Store({
  actions,
  getters,
  mutations,
  state: INITIAL_STATE
})
