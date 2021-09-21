<template>
	<section class="sub-menu">
		<Back />
		<h2>VS A.I.</h2>
		<section class="menu">
			<router-link to="/game?mode=easy">Easy</router-link>
			<router-link to="/game?mode=medium">Medium</router-link>
			<router-link to="/game?mode=hard">Hard</router-link>
		</section>
	</section>
</template>

<script>
import Back from '@/cmps/Back'
export default {
	components: { Back },
}
</script>
