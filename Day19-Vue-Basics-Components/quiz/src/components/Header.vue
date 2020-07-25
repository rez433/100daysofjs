<template>
    <div class="header">
        <div>
            <h1>Quizz</h1>
        </div>
        <div class="counter">
            <h2>0/10</h2>
        </div>
        <div class="timer">
            60sec
        </div>
    </div>
</template>

<script>
export default {
    
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