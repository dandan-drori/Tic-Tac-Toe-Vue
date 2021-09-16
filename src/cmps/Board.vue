<template>
	<ul class="board">
		<Cell
			v-for="(shape, idx) in board"
			:key="idx"
			:idx="idx"
			:shape="shape"
			@onMarkCell="markCell"
		/>
	</ul>
</template>

<script>
import Cell from '@/cmps/Cell'
export default {
	components: { Cell },
	computed: {
		board() {
			return this.$store.getters.board
		},
		winner() {
			return this.$store.getters.winner
		},
	},
	methods: {
		markCell({ idx, shape }) {
			if (this.board[idx] || this.winner) return
			this.$store.commit('markCell', { idx, shape })
			this.$store.commit('checkGameOver')
			this.$store.commit('switchTurn')
		},
	},
}
</script>
