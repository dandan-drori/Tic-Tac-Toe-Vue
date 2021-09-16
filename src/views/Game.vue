<template>
	<section class="game">
		<Score />
		<Board />
		<Modal v-if="winner" />
		<Back />
	</section>
</template>

<script>
import Board from '@/cmps/Board'
import Score from '@/cmps/Score'
import Modal from '@/cmps/Modal'
import Back from '@/cmps/Back'
export default {
	components: {
		Board,
		Score,
		Modal,
		Back,
	},
	computed: {
		winner() {
			return this.$store.getters.winner
		},
	},
}
</script>
