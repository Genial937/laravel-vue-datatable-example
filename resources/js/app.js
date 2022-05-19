import Vue from 'vue'

Vue.component('home-component', require('./HomeComponent.vue').default);
const app = new Vue({
    el: "#vue-app"
});
