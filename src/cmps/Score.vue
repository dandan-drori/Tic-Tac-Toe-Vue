<template>
	<section class="score">
		<section class="X">
			<Shape shape="X" />
			<span>:</span>
			<span>{{ score[mode].X }}</span>
		</section>
		<section class="O">
			<Shape shape="O" />
			<span>:</span>
			<span>{{ score[mode].O }}</span>
		</section>
	</section>
</template>

<script>
import Shape from '@/cmps/Shape'
export default {
	components: { Shape },
	computed: {
		score() {
			return this.$store.getters.score
		},
		mode() {
			return this.$store.getters.mode
		},
	},
}
</script>
