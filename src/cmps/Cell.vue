<template>
	<li class="cell" @click="onMarkCell">
		<Shape :shape="shape" />
	</li>
</template>

<script>
import Shape from './Shape.vue'
export default {
	components: { Shape },
	props: { idx: Number, shape: String },
	computed: {
		currShape() {
			return this.$store.getters.turn
		},
	},
	methods: {
		onMarkCell() {
			this.$emit('onMarkCell', { idx: this.idx, shape: this.currShape })
		},
	},
}
</script>
