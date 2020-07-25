<template>
    <div class="quiz">
        <p>
            {{ decode(currentQuestion.question) }}
        </p>

        <ul>
            <li class="answers" v-for="(answer, index) in shuffledAnswers" :key="index">
                {{ decode(answer) }}
            </li>
        </ul>

        <div class="btns">
            <button class="submit">Submit</button>
            <button class="nxt">Next</button>
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

            
        }
    },

    props: {
        currentQuestion: Object,
    },
    watch: {
        currentQuestion: {
            // Immediately after mount, update currentquestion
            immediate: true,
            handler() {
                this.correctIndex = null,
                this.shuffle()
            }
        }


    },
    methods: {
        decode(str) {
            return entities.decode(str)
        },

        shuffle() {
            let rnd = Math.round(Math.random()*3)
            this.shuffledAnswers = [...this.currentQuestion.incorrect_answers]
            this.shuffledAnswers.splice(rnd, 0, this.currentQuestion.correct_answer)
            this.correctIndex = this.shuffledAnswers.indexOf(this.currentQuestion.correct_answer)
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
        background: #EEE;
        border: 1px solid #ccc;
        padding: 1rem
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
</style>