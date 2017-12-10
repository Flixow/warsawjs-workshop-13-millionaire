<template>
  <div class="Game">
    <div class="Question-card">
      <question-card
        :question='currentQuestion'
        :onAnswer='checkAnswer'
      />
    </div>
    <div class="Sidebar">
      <questions-list
        :questions='questions'
        :currentIndex='currentQuestionIndex'
      />
    </div>
  </div>
</template>

<script>
import data from '../../db.js'
import QuestionCard from './QuestionCard'
import QuestionsList from './QuestionsList'

const STATES = {
  NOT_PLAYING: 'NOT_PLAYING',
  PLAYING: 'PLAYING',
  WON: 'WON',
  LOST: 'LOST',
}

export default {
  name: 'Game',
  components: {
    QuestionCard,
    QuestionsList,
  },
  data: () => ({
    state: STATES.NOT_PLAYING,
    currentQuestionIndex: 0,
    questions: data.questions,
  }),
  methods: {
    checkAnswer: function (answer) {
      const isCorrectAnswer = this.currentQuestion.correct_answer === answer
      if (isCorrectAnswer) {
        this.currentQuestionIndex++

        if (this.currentQuestionIndex > this.questions.length - 1) {
          this.state = STATES.WON
        } else {
          this.state = STATES.PLAYING
        }
      } else {
        this.state = STATES.LOST
      }
    }
  },
  computed: {
    currentQuestion: function (index) {
      return this.questions[this.currentQuestionIndex] || {}
    },
  },
  watch: {
    state (value, oldValue) {
      if (value === STATES.LOST) {
        this.$router.push({name: 'lost'})
      } else if (value === STATES.WON) {
        this.$router.push({name: 'won'})
      }
    }
  },
}
</script>

<style>
  .Game {
    display: flex;
  }

  .Question-card {
    flex: 1;
  }
</style>
