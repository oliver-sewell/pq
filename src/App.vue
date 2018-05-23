<template>
<div class="app">
  <transition name="fade">
    <router-view></router-view>
  </transition>
  <!--<p> legends: - {{ displayLegends }} </p>
  <p> workout: - {{ displayWorkout }} </p>
  <p> campfire: - {{ displayCampfire }} </p>
  <p> electronica: - {{ displayElectronica }} </p>
  <p> acoustic: - {{ displayAcoustic}} </p>
  <p> chill: - {{ displayChill }} </p>-->
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters([
    'displayLegends','displayWorkout','displayCampfire','displayElectronica','displayAcoustic','displayChill'
  ])
}
</script>

<style lang="scss">
@import 'global.css';
.fade-enter {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
  transition: opacity .5s .5s ease-out;
}

.fade-leave {
  opacity: 1;
}

.fade-leave-to {
  opacity: 0;
  transition: opacity .5s ease-in;
}


</style>
