<template>
    <div >
        <div>
            
        </div>
        <div class="results" v-for="(res, index) in results" :key="index">
            <ul :class="answer(res.s)">
                <li class="t"> <b>Question: {{ index + 1}}</b></li>
                <li class="q">{{ res.q }}</li>
                <li class="u" ><b> You Answered:</b> {{ res.u }}</li>
                <li class="c"><b>Correct Answer:</b> {{ res.c }}</li>
            </ul>
        </div>
    </div>
</template>


<script>
export default {
    props:{
        results: Array,
        timeLeft: Number,
    },
    methods: {
        answer(isCorrect) {
            let className =''
            if(isCorrect){
                className = 'win'
            }else{
                className= 'lost'
            }

            return className;

        }
    }
}
</script>


<style scoped>
    ul{
        margin:.5rem;
        border: 1px solid lightseagreen;
        list-style: none;
        
    }
    li{
        margin: .5rem;
    }
    .results{
        max-width: 450px;
        margin: .5rem auto;
        display:flex;
        flex-direction: column;
        justify-content: center;
    }
    .win{
        border: 1px solid lightgreen;
    }
    .lost{
        border: 1px solid orangered;
    }
    
</style>