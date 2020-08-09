<template>
  <div>
    <b-jumbotron>
      <template v-if='currQuestion' v-slot:lead>{{
        decode(currQuestion.question)
      }}</template>

      <hr class='my-4' />

      <b-list-group v-if='currQuestion'>
        <b-list-group-item
          @click='selectAnswer(index)'
          v-for='(answer, index) in shuffledAnswers'
          :key='index'
          >{{ answer }}</b-list-group-item
        >
      </b-list-group>

      <b-button type='submit' @click='submitAnswer' variant='primary'
        >Sumbit</b-button
      >
      <b-button @click='next' variant='success'>Next</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
const Entities = require('html-entities').XmlEntities;
const entities = new Entities();

export default {
  name: 'QuizBox',
  data() {
    return {
      selectedIndex: null,
      correctIndex: null,
      answered: false,
      shuffledAnswers: []
    };
  },
  props: {
    currQuestion: Object,
    next: Function,
    increment: Function
  },
  methods: {
    decode(str) {
      return entities.decode(str);
    },
    selectAnswer(index) {
      this.selectedIndex = index;
    },
    submitAnswer() {
      let isCorrect = false;
      if (this.selectedIndex === this.correctIndex) {
        isCorrect = true;
      }
      this.answered = true;
      this.increment(isCorrect);
    },
    shuffle() {
      this.correctIndex = Math.floor(Math.random() * 4);
      this.shuffledAnswers = [...this.currQuestion.incorrect_answers];
      this.shuffledAnswers.splice(
        this.correctIndex,
        0,
        this.currQuestion.correct_answer
      );
    }
  },
  computed: {},
  watch: {
    currQuestion: {
      immediate: true,
      handler() {
        this.selectedIndex = null;
        this.correctIndex = null;
        this.shuffle();
        this.answered = false;
      }
    }
  }
};
</script>
<style scoped>
button {
  margin: 1rem;
  padding: 0.5rem 2rem;
}
.lead {
  height: 7rem;
  align-content: center;
}
.selected {
  background: lightblue;
}
</style>
