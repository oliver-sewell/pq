<template>
    <div class="container">
        <img class="guitar-logo" src="../assets/page-logo.svg"/>
        <div class="result">
        <div v-if="displayResult === 'legend'"><img class="result-image" src="../assets/legends_result.png"/></div>
        <div v-if="displayResult === 'workout'"><img class="result-image" src="../assets/workout_result.png"/></div>
        <div v-if="displayResult === 'campfire'"><img class="result-image" src="../assets/campfire-singsong_result.png"/></div>
        <div v-if="displayResult === 'electronica'"><img class="result-image" src="../assets/electronica_result.png"/></div>
        <div v-if="displayResult === 'acoustic'"><img class="result-image" src="../assets/acoustic_result.png"/></div>
        <div v-if="displayResult === 'chill'"><img class="result-image" src="../assets/chill_result.png"/></div>
        <svg class="star star1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 3"><defs></defs><title>STAR</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="star1" d="M2.7,1.2H.3a.3.3,0,1,0,0,.6H2.7a.3.3,0,0,0,0-.6Z"/><path class="star1" d="M1.5,0a.3.3,0,0,0-.3.3V2.7a.3.3,0,1,0,.6,0V.3A.3.3,0,0,0,1.5,0Z"/></g></g></svg>
        <svg class="star star2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 3"><defs></defs><title>STAR</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="star2" d="M2.7,1.2H.3a.3.3,0,1,0,0,.6H2.7a.3.3,0,0,0,0-.6Z"/><path class="star2" d="M1.5,0a.3.3,0,0,0-.3.3V2.7a.3.3,0,1,0,.6,0V.3A.3.3,0,0,0,1.5,0Z"/></g></g></svg>
        <svg class="star star3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 3"><defs></defs><title>STAR</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="star3" d="M2.7,1.2H.3a.3.3,0,1,0,0,.6H2.7a.3.3,0,0,0,0-.6Z"/><path class="star3" d="M1.5,0a.3.3,0,0,0-.3.3V2.7a.3.3,0,1,0,.6,0V.3A.3.3,0,0,0,1.5,0Z"/></g></g></svg>
        <svg class="star star4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 3"><defs></defs><title>STAR</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="star4" d="M2.7,1.2H.3a.3.3,0,1,0,0,.6H2.7a.3.3,0,0,0,0-.6Z"/><path class="star4" d="M1.5,0a.3.3,0,0,0-.3.3V2.7a.3.3,0,1,0,.6,0V.3A.3.3,0,0,0,1.5,0Z"/></g></g></svg>


        </div>
        <div class="listen">
            <a href="#"><img src="../assets/apple-music.png"/></a>
            <a href="#"><img src="../assets/deezer.png"/></a>
            <a href="#"><img src="../assets/spotify.png"/></a>
        </div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: mapGetters([
        'displayResult'
    ])
}
</script>

<style scoped>
.result {
    color: #fff;
    font-size: 3em;
    font-family: 'cymraegregular',sans-serif;
}


.listen a {
    display: block;
}

.result {
    position: relative;
}

.star {
    position: absolute;
}

.star1 {
    width: 20px;
    height: auto;
    top: 0;
    left: 7%;
    opacity: 1;
    fill: white;
    transform-orgin: center;
}
.star2 {
    width: 10px;
    height: auto;
    top: 5%;
    left: 5%;
    opacity: .7;
    fill: pink;
}

.star3 {
    width: 20px;
    height: auto;
    bottom: 1%;
    right: 0;
    opacity: 1;
    fill: white;

}

.star4 {
    width: 10px;
    height: auto;
    bottom: 0%;
    right: 5%;
    opacity: .7;
    fill: pink;
}

img {
    display: block;
}


@media(min-width: 769px) {
    .listen {
        display: flex;
        margin-top: 1em;
    }

    .result {
        margin-top: 1em;
    }
}
</style>