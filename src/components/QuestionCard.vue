<template>
  <div class='Question-card'>
    <h3 v-html='question.question' />

    <ol class='Answers'>
      <li
        class='Answers__Answer'
        v-for='answer in answers'
        @click='onAnswer(answer)'
        v-html='answer'
      />
    </ol>
  </div>
</template>

<script>
export default {
  name: 'QuestionCard',
  props: {
    question: {
      default: () => ({})
    },
    onAnswer: {
      default: () => {}
    }
  },
  computed: {
    answers: function () {
      return [
        ...this.question.incorrect_answers,
        this.question.correct_answer
      ] // Corect answer is always last
    },
  },
}
</script>

<style>
.Question-card {
  display: inline-block;
  border-radius: 8px;
  background-color: #f3f3f3;
  padding: 10px 15px;
}

.Answers {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.Answers__Answer {
  margin: 0 10px;
  display: inline-block;
  padding: 5px 10px;
  border: 1px solid #666;
  cursor: pointer;
}
</style>
