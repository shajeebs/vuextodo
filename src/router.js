import Vue from 'vue'
import Router from 'vue-router'
import Todos from '@/views/Todos.vue'
import Cats from '@/views/Cats.vue'
import Dogs from '@/views/Dogs.vue'
import Pets from '@/views/Pets.vue'
import Pet from '@/views/Pet.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'todos', component: Todos },
    { path: '/cats', name: 'cats', component: Cats },
    { path: '/dogs', name: 'dogs', component: Dogs },
    { path: '/pets', name: 'pets', component: Pets },
    { path: '/pet/:species/:id', name: 'pet', component: Pet },
    { path: '/about', name: 'about', component: () => import('@/views/About.vue') },
  ]
})
