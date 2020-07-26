<template>
  <div id="app">
    <Header
      :numCorrect="numCorrect"
      :numTotal="numTotal"
      :timeLeft="timeLeft"
    />
    <Quiz v-show="timeLeft>0" 
      v-if="questions.length"
      :currentQuestion="questions[index]"
      :next="next"
      :increment="increment"
      :quizIndex="numTotal"
      :timeLeft="timeLeft"
      :results="results"
    />

    <Results v-show="timeLeft== 0" 
      :results="results" 
      :timeLeft="timeLeft"
    />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Quiz from "./components/Quiz.vue";
import Results from "./components/Results.vue";

function initState () {
  return {
      index: 0,
      numCorrect: 0,
      numTotal: 0,
      timeLeft: 20,
      results: [],

      // all quizzes (questions with answers)
      questions: [],
    };
}
export default {
  name: "App",
  components: {
    Header,
    Quiz,
    Results
  },

  data() {
    return initState()
  },

  methods: {
    next() {
      if (this.index === 10) {
        this.index = 0;
      }
      this.index++;
      console.log(typeof(this.results))
    },

    increment(isCorrect) {
      if (isCorrect) {
        this.numCorrect++;
      }
      this.numTotal++;
    },
  },

  // when page loaded
  mounted() {
    // fetch quizzes
    fetch(
      "https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple",
      {
        method: "get",
      }
    )
      .then((res) => res.json())
      .then((json) => {
        // save them in questions
        this.questions = json.results;
      });
  },
  watch: {
    timeLeft: {
      immediate: true,
      handler(time) {
        if (time > 0) {
          setTimeout(() => {
            this.timeLeft--;
          }, 1000);
        }
      },
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
