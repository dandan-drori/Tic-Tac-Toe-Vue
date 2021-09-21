<template>
	<section class="back">
		<router-link :to="link">
			←
		</router-link>
	</section>
</template>

<script>
export default {
	props: { path: String },
	computed: {
		link() {
			return this.path || '/'
		},
	},
}
</script>
