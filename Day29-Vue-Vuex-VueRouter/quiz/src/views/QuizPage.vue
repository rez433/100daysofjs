<template>
  <div>
    <b-container>
      <b-row>
        <!--  offset adds 3 columns to left -->
        <b-col sm='6' offset='3'>
          <b-nav class='quiz-nav'>
            <b-nav-item disabled v-if='quiztions.length'
              >Question {{ index }} / {{ quiztions.length }}
            </b-nav-item>
            <b-nav-item disabled>Timer</b-nav-item>
          </b-nav>
          <QuizBox :currQuestion='quiztions[index - 1]' :next='next' />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import QuizBox from '@/components/QuizBox.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'QuizPage',
  components: { QuizBox },
  data() {
    return {
      index: 1
    };
  },
  computed: mapGetters(['quiztions']),
  methods: {
    next() {
      if (this.index === 10) {
        this.index = 0;
      }
      this.index++;
    }
  }
};
</script>

<style scoped>
.quiz-nav {
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
}
</style>
