<template>
	<section class="settings">
		<Back />
		<h2>Settings</h2>
		<section class="menu">
			<button @click="resetScore">Reset Score</button>
		</section>
	</section>
</template>

<script>
import Back from '@/cmps/Back'
export default {
	components: { Back },
	methods: {
		resetScore() {
			this.$store.commit('resetScore')
		},
	},
}
</script>
