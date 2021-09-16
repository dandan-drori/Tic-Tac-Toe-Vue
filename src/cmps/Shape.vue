<template>
	<section class="shape">
		<section class="X" v-if="shape === 'X'">
			<div></div>
			<div></div>
		</section>
		<section class="O" v-if="shape === 'O'"></section>
	</section>
</template>

<script>
export default {
	props: { shape: String },
}
</script>
