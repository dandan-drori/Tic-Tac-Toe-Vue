import Vue from 'vue'
import Home from '@/views/Home.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/settings',
		component: () => import('@/views/Settings.vue'),
	},
	{
		path: '/game',
		component: () => import('@/views/Game.vue'),
	},
	{
		path: '/about',
		component: () => import('@/views/About.vue'),
	},
	{
		path: '/',
		component: Home,
	},
]

const router = new VueRouter({
	routes,
})

export default router
