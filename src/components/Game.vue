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
        :currentIndex='currentRound'
      />
    </div>
  </div>
</template>

<script>
import data from '../../db.js'
import {mapGetters, mapMutations} from 'vuex'
import QuestionCard from './QuestionCard'
import QuestionsList from './QuestionsList'
import {STATES} from '../common/const'

export default {
  name: 'Game',
  created () {
    this.$store.dispatch('initGame')
  },
  components: {
    QuestionCard,
    QuestionsList,
  },
  methods: {
    ...mapMutations([
      'checkAnswer'
    ]),
  },
  computed: mapGetters({
    questions: 'questions',
    currentQuestion: 'currentQuestion',
    currentRound: 'currentRound',
    status: 'status',
  }),
  watch: {
    status (value, oldValue) {
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
