<template>
	<section class="modal-container">
		<section class="modal">
			<h2 v-if="winner === 'tie'">It's a tie!</h2>
			<h2 v-else>{{ winner }} Wins!</h2>
			<button @click="restart">Restart</button>
		</section>
	</section>
</template>

<script>
export default {
	computed: {
		winner() {
			return this.$store.getters.winner
		},
	},
	methods: {
		restart() {
			this.$store.commit('clearBoard')
		},
	},
}
</script>
