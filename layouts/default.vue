<template>
	<main class="main">
		<div class="page-loader">
			<div class="page-loader__spinner">
				<svg viewBox="25 25 50 50">
					<circle cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" />
				</svg>
			</div>
		</div>

		<Navbar />

		<Sidebar />

		<section class="content">
			<nuxt />

			<Footer />
		</section>
	</main>
</template>

<style>

</style>

<script>
	import Navbar from '~/components/Navbar.vue'
	import Sidebar from '~/components/Sidebar.vue'
	import Footer from '~/components/Footer.vue'

	export default {
		components: {
			Navbar,
			Sidebar,
			Footer,
		},
		head() {
			return {
				bodyAttrs: {
					'data-ma-theme': 'purple'
				}
			}
		}
	}
</script>