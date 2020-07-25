<template>
  <div id="app">
    <Header />
    <Quiz
    v-if="questions.length"
      :currentQuestion="questions[index]"
    />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Quiz from './components/Quiz.vue'

export default {
  name: 'App',
  components: {
    Header,
    Quiz
  },

  data() {
    return {
      index: 0,

      // all quizzes (questions with answers)
      questions: [],
    }
  },

  methods: {

  },

  // when page loaded 
  mounted(){

    // fetch quizzes
    fetch('https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple', {
      method: 'get'
    })
      .then(res => res.json())
      .then(json => {

        // save them in questions
        this.questions = json.results
      })
  }

}
</script>

<style>
*{
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
