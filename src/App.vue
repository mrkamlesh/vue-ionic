<template>
  <ion-app>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Hello, Ionic!</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card>
        <img src="https://via.placeholder.com/350x150"/>
        <ion-card-header>
          <ion-card-subtitle>Isn't it great?</ion-card-subtitle>
          <ion-card-title>Look at this view!</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          Although, it does look fairly cold.
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-app>
</template>

<script>

export default {
  name: 'app',
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
