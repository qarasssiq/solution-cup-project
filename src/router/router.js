import * as Vue from 'vue'
import Router from 'vue-router'

import scExpenses from '../components/sc-expenses'

Vue.useAttrs(Router);

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'expenses',
      component: scExpenses
    }
  ]
});

export default router;