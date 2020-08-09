import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    quiz: [],
    correctAnswers: 0,
    results: [],
    categories: [
      'Any Category',
      'General Knowledge',
      'Entertainment: Books',
      'Entertainment: Film',
      'Entertainment: Music',
      'Entertainment: Musical & Theatres',
      'Entertainment: Television',
      'Entertainment: Video Games',
      'Entertainment: Board Games',
      'Science & Nature',
      'Science: Computers',
      'Science: Mthematics',
      'Mythology',
      'Sports',
      'Geography',
      'History',
      'Politics',
      'Art',
      'Celebrities',
      'Animals',
      'Vehicles',
      'Entertainment: Comics',
      'Entertainment: Gadgets',
      'Entertainment: Japanese Anime & Manga',
      'Entertainment: Cartoon & Animations'
    ],
    difficulties: ['Any Difficulty', 'Easy', 'Medium', 'Hard']
    // types: ['Any Type', 'Multi Choice', 'True / False']
  },
  getters: {
    quiztions: state => {
      //console.log(state.quiz);
      return state.quiz;
    }
  },
  actions: {
    async fetchQuiz({ commit }, { cat, numberOfQuestions, level}) {
      const link = `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${cat}&difficulty=${level}&type=multiple`;
      console.log(link);
      const res = await axios.get(link);
      commit('setQuiz', res.data.results);
    }
  },
  mutations: {
    setQuiz: (state, quiz) => {
      state.quiz = quiz;
    }
  },
  modules: {}
});
