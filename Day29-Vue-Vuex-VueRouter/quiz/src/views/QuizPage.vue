<template>
  <div>
    <Header />
    <b-container>
      <b-row>
        <!--  offset adds 3 columns to left -->
        <b-col sm="6" offset="3">
          <b-nav class="quiz-nav">
            <b-nav-item disabled v-if="questionList.length"
              >Questions: {{ questionList.length > 0 ? questionList.length : '0' }}
            </b-nav-item>
            <b-nav-item disabled>
              <span :class="timeLeft <= 6 ? 'red' : ''">Time: {{ timeLeft }}</span>
            </b-nav-item>
          </b-nav>
          <QuizBox
            v-show="timeLeft > 0"
            v-if="questionList"
            :currQuestion="questionList[index - 1]"
            :next="next"
            :results="results"
            :qIndex="index - 1"
            :delQuiz="delQuiz"
            :saveResults="saveResults"
          />

          <Results
            v-show="timeLeft == 0"
            :results="results"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import QuizBox from '@/components/QuizBox.vue';
import { mapGetters, mapActions } from 'vuex';
import Header from '@/components/Header.vue';

export default {
  name: 'QuizPage',
  components: { QuizBox, Header },
  data() {
    return {
      index: 1,
      results: [],
      questionList: [],
      timeLeft: 0,
    };
  },
  watch: {
    quiztions: {
      immediate: true,
      handler() {
        this.questionList = this.quiztions;
      },
    },
    countDown: {
      immediate: true,
      handler() {
        this.timeLeft = this.countDown;
      },
    },
    timeLeft: {
      immediate: true,
      handler() {
        this.counter();
      },
    },
  },
  computed: {
    ...mapGetters(['quiztions', 'resList', 'countDown']),
  },
  methods: {
    ...mapActions(['saveResults']),
    next() {
      if (this.questionList.length === 0 && this.timeLeft > 0) {
        this.saveResults(this.results, this.timeLeft);
      }
      if (this.index === this.questionList.length) {
        this.index = 0;
      }
      this.index += 1;
      console.log(this.index);
    },
    delQuiz(i) {
      this.questionList = this.questionList.splice(i, 1);
    },
    counter() {
      if (this.timeLeft > 0 && this.questionList.length > 0) {
        setTimeout(() => {
          this.timeLeft -= 1;
        }, 1000);
      }
    },
  },
};
</script>

<style scoped>
.quiz-nav {
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
}
.red {
  color: red;
}
</style>
