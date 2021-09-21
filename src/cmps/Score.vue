<template>
	<section class="score">
		<section class="X">
			<Shape shape="X" />
			<span>:</span>
			<span>{{ scores[0] }}</span>
		</section>
		<section class="O">
			<Shape shape="O" />
			<span>:</span>
			<span>{{ scores[1] }}</span>
		</section>
	</section>
</template>

<script>
import Shape from '@/cmps/Shape'
export default {
	components: { Shape },
	computed: {
		scores() {
			const { X, O } = this.$store.getters.score[this.$store.getters.mode]
			return [X, O]
		},
	},
}
</script>
