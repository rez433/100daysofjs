<template>
    <div class="quiz">
        <p class="qstn">
            {{ decode(currentQuestion.question) }}
        </p>

        <ul>
            <li class="answers" 
                v-for="(answer, index) in shuffledAnswers" 
                :key="index"
                @click="selectAnswer(index)"
                :class="answerClass(index)"
            >
                {{ decode(answer) }}
            </li>
        </ul>

        <div class="btns">
            <button 
                @click="submitAnswer"
                class="submit"
                :disabled="selectedIndex === null || answered || timeLeft == 0"
            >
                Submit
            </button>
            <button class="nxt" 
                @click="next"
                :disabled="quizIndex == 10 || timeLeft == 0"
            >Next</button>
        </div>
        
    </div>
</template>

<script>
const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();

export default {
    data(){
        return{
            shuffledAnswers: [],
            correctIndex: null,
            selectedIndex: null,
            answered: false,
        }
    },

    props: {
        currentQuestion: Object,
        next: Function,
        increment: Function,
        quizIndex: Number,
        timeLeft: Number,
    },
    watch: {
        currentQuestion: {
            // Immediately after mount, update currentquestion
            immediate: true,
            handler() {
                this.selectedIndex = null,
                this.correctIndex = null,
                this.shuffle(),
                this.answered= false
            }
        }


    },
    methods: {
        decode(str) {
            return entities.decode(str)
        },

        shuffle() {

            let rnd = Math.floor(Math.random()*4)
            this.shuffledAnswers = [...this.currentQuestion.incorrect_answers]
            this.shuffledAnswers.splice(rnd, 0, this.currentQuestion.correct_answer)
            this.correctIndex = this.shuffledAnswers.indexOf(this.currentQuestion.correct_answer)
        }, 

        selectAnswer(index) {
            this.selectedIndex = index;
            console.log(this.selectedIndex)
            if(this.selectedIndex === this.correctIndex){
                console.log('Correct!!!')

            }
        },

        submitAnswer() {
            let isCorrect = false
            if(this.selectedIndex === this.correctIndex){
                isCorrect = true
            }
            this.answered = true
            this.increment(isCorrect)
        },

        answerClass(index) {
            let answerClass= ''
            if(!this.answered && this.selectedIndex === index) {
                answerClass= 'selected'
            }
            else if(this.answered && this.correctIndex !== index && this.selectedIndex === index) {
                answerClass= 'wrong'
            }
            else if(this.answered && this.correctIndex === index) {
                answerClass= 'correct'
            }

            return answerClass
            
        }
    }, 
    

}
</script>

<style scoped>

    .quiz{
        margin:auto;
        display: flex;
        flex-direction: column;
        max-width: 400px;
        justify-content: start;

    }
    .answers {
        border: 1px solid #ccc;
        padding: 1rem
    }
    .answers:hover {
        background: #DDD;
        cursor: pointer;
        border: 1px solid rgb(155, 149, 149);
    }
    ul{
        margin: 1rem;
        list-style: none;
        display: flex;
        flex-direction: column;
    }

    button{
        width: 120px;
        padding: 1rem;
    }

    .btns{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
    .qstn {
        height: 3rem;
    }

    .correct {
        background: lightgreen;
    }

    .selected {
        background: lightblue;
    }

    .wrong {
        background: red
    }
</style>