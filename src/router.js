import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import LocalState from './components/LocalState';
import SharedState from './components/SharedState/SharedState';
import VuexExample from './components/Vuex/Vuex';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/local-state',
      name: 'local state',
      component: LocalState,
    },
    {
      path: '/shared-state',
      name: 'shared state',
      component: SharedState,
    },
    {
      path: '/vuex',
      name: 'vuex flux pattern',
      component: VuexExample,
    },
  ]
})
