<template>
  <ol class='Questions'>
    <li
      :class='[{ "Questions__Question--won": index < currentIndex }, "Questions__Question"]'
      v-for='(question, index) in questions'
    >
      <div>
        Question {{index + 1}}
      </div>
      <div>
        Question worth {{prizes[index] | currency}}
      </div>
    </li>
  </ol>
</template>

<script>
export default {
  name: 'QuestionsList',
  props: {
    questions: {
      default: () => ([])
    },
    currentIndex: {
      default: 0
    }
  },
  computed: {
    prizes: function () {
      return this.questions.map((question, index) => (index + 1) * 100)
    }
  }
}
</script>

<style lang="css">
.Questions {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: inline-flex;
  flex-direction: column;
  background-color: #d0d0d0;
}

.Questions__Question {
  display: inline-block;
  padding: 5px 10px;
  cursor: pointer;
}

.Questions__Question--won {
  background-color: #90ff9e;
}
</style>
