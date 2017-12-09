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

export default {
  name: 'Game',
  components: {
    QuestionCard,
    QuestionsList,
  },
  data: () => ({
    currentQuestionIndex: 0,
    questions: data.questions,
  }),
  methods: {
    checkAnswer: function (answer) {
      const isCorrectAnswer = this.currentQuestion.correct_answer === answer
      if (isCorrectAnswer) {
        this.currentQuestionIndex++
      }
    }
  },
  computed: {
    currentQuestion: function (index) {
      return this.questions[this.currentQuestionIndex] || {}
    },
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
