import Vue from 'vue';
import Router from 'vue-router';
import App from '../index.vue';
import Apage from '../pages/a.vue'
import Bpage from '../pages/b.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: App,
      children: [
        {
          path: 'a',
          name: 'a',
          component: Apage
        },
        {
          path: 'b',
          name: 'b',
          component: Bpage
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  console.log(from);
  setTimeout(() => {
    if (to.path === '/') {
      next({name: 'b'});
    } else {
      next();
    }
  }, 3000);
  
})

export default router;