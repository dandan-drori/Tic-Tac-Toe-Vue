<template>
	<section class="game">
		<h2 class="mode">Mode: {{ mode }}</h2>
		<Score />
		<Board />
		<Modal v-if="winner" />
		<Back :path="backPath" />
	</section>
</template>

<script>
import Board from '@/cmps/Board'
import Score from '@/cmps/Score'
import Modal from '@/cmps/Modal'
import Back from '@/cmps/Back'
import { capitalize } from '@/services/util-service.js'
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
		backPath() {
			return this.$store.getters.mode === 'pvp' ? '' : '/sub-menu'
		},
		mode() {
			const { mode: currMode } = this.$store.getters
			if (currMode === 'pvp') return 'PvP'
			return capitalize(currMode)
		},
	},
	methods: {
		setMode(mode) {
			this.$store.commit('setMode', mode)
		},
	},
	created() {
		const mode = this.$route.query?.mode || 'pvp'
		this.setMode(mode)
	},
}
</script>
