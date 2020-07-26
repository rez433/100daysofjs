<template>
    <div class="header">
        <div>
            <h1>Quizz</h1>
        </div>
        <div class="counter">
            <h2>{{ numCorrect }} / {{ numTotal }}</h2>
        </div>
        <div class="timer">
            {{ timeLeft }}
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'numTotal',
        'numCorrect',
        'timeLeft'
    ],


}
</script>

<style scoped>
.header {

    display: flex;
    margin: auto;
    flex-direction: row;
    justify-content: space-between;

    border-bottom: 1px solid #ccc;
    margin-bottom: 2rem;
    padding: 1rem 2rem
}
</style>