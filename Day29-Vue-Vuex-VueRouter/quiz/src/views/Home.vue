<template>
  <div class="home">
    <Header />
    <h3>Customize your quiz</h3>
    <div class="quiz-form">
      <b-form>
        <b-form-group label="Number of Questions:">
          <b-form-input
            id="numberOfQuestions"
            type="number"
            v-model="formData.numberOfQuestions"
            required
            placeholder="10"
            min="3"
            max="10"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Select Category:">
          <b-form-select :options="categories" v-model="formData.selectedCategory" required>
          </b-form-select>
        </b-form-group>
        <b-form-group label="Select Difficulty:">
          <b-form-select :options="difficulties" v-model="formData.difficulty" required>
          </b-form-select>
        </b-form-group>
        <b-form-group label="Select Time:">
          <b-form-input
            id="timer"
            type="number"
            v-model="formData.timer"
            required
            :min="minMax(7)"
            :max="minMax(18)"
          >
          </b-form-input>
        </b-form-group>
        <button type="submit" @click.stop.prevent="handleSubmit" class="btn btn-primary">
          Generate My Quiz
        </button>
      </b-form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions } from 'vuex';
import Header from '@/components/Header.vue';

export default {
  name: 'Home',
  data() {
    return {
      formData: {
        selectedCategory: 'Any Category',
        numberOfQuestions: 10,
        difficulty: 'Any Difficulty',
        timer: 80,
      },
    };
  },
  computed: {
    ...mapState(['categories', 'difficulties']),
  },
  methods: {
    ...mapActions(['fetchQuiz', 'setTimer']),
    handleSubmit() {
      const {
        selectedCategory, numberOfQuestions, difficulty, timer,
      } = this.formData;
      const cat = this.catToId(selectedCategory);
      const level = difficulty.toLowerCase();
      const payload = {
        cat,
        numberOfQuestions,
        level,
        timer,
      };
      this.fetchQuiz(payload);
      this.setTimer(payload);
      setTimeout(() => {
        this.$router.push('/quiz');
      }, 1000);
    },
    minMax(t) {
      return this.formData.numberOfQuestions * t;
    },
    decode(type) {
      if (type === 'Multi Choice') {
        return 'multiple';
      }
      if (type === 'True / False') {
        return 'boolean';
      }
      return '';
    },
    catToId(cat) {
      if (cat !== 'Any Category') {
        return this.categories.indexOf(cat) + 8;
      }
      return '';
    },
  },
  components: {
    Header,
  },
};
</script>

<style scoped>
.quiz-form {
  max-width: 80%;
  margin: auto;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
}
</style>
