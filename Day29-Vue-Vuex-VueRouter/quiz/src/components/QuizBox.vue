<template>
  <div>
    <b-jumbotron>
      <template v-if="currQuestion" v-slot:lead>{{ decode(currQuestion.question) }}</template>

      <hr class="my-4" />

      <b-list-group v-if="currQuestion">
        <b-list-group-item
          v-for="(answer, index) in shuffledAnswers"
          :key="index"
          @click="!answered ? selectAnswer(index) : ''"
          :class="answerClass(index)"
        >
          {{ decode(answer) }}
        </b-list-group-item>
      </b-list-group>

      <b-button
        type="submit"
        @click="submitAnswer"
        :disabled="selectedIndex === null || answered"
        variant="primary"
        >Sumbit</b-button
      >
      <b-button
        @click="next()" variant="success"
      >Skip</b-button>
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
      shuffledAnswers: [],
    };
  },
  props: {
    currQuestion: Object,
    next: Function,
    increment: Function,
    results: Array,
    qIndex: Number,
    delQuiz: Function,
    saveResults: Function,
    timeLeft: Number,
  },
  watch: {
    currQuestion: {
      immediate: true,
      handler() {
        this.selectedIndex = null;
        this.correctIndex = null;
        this.shuffle();
        this.answered = false;
      },
    },
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
      console.log(isCorrect);
      this.results.push({
        q: this.decode(this.currQuestion.question),
        c: this.decode(this.shuffledAnswers[this.correctIndex]),
        u: this.decode(this.shuffledAnswers[this.selectedIndex]),
        s: isCorrect,
      });
      this.delQuiz(this.qIndex);
      console.log(this.qIndex);
    },
    shuffle() {
      this.correctIndex = Math.floor(Math.random() * 4);
      this.shuffledAnswers = [...this.currQuestion.incorrect_answers];
      this.shuffledAnswers.splice(this.correctIndex, 0, this.currQuestion.correct_answer);
    },
    answerClass(i) {
      let answerClass = '';
      if (!this.answered && i === this.selectedIndex) {
        answerClass = 'selected';
      } else if (this.answered && this.correctIndex !== i && i === this.selectedIndex) {
        answerClass = 'wrong';
      } else if (this.answered && i === this.correctIndex) {
        answerClass = 'correct';
      }
      return answerClass;
    },
  },
  computed: {},
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
.correct {
  background: lightgreen;
}
.wrong {
  background: lightcoral;
}
</style>
