<template>
	<header class="">
		<nav class="navbar navbar-expand-md mb-2">
			<div class="container">
				<a class="navbar-brand d-md-none order-md-2 text-md-center" href="/">
					<img v-if="this.$colorMode['value'] == 'dark'" alt="Promotion Efficiency Logo" src="~/assets/images/white-logo.png" height="50" />
					<img v-else alt="Promotion Efficiency Logo" src="~/assets/images/pe_logo_primary.svg" height="50" />
				</a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
					<i class="bi bi-three-dots"></i>
				</button>
				<div class="collapse navbar-collapse justify-content-between align-items-center" id="navbarTogglerDemo01">
					<a class="navbar-brand order-md-2 text-md-center d-none d-md-block" href="/">
						<img v-if="this.$colorMode['value']  == 'dark'" alt="Promotion Efficiency Logo" src="~/assets/images/white-logo.png" height="50" />
						<img v-else alt="Promotion Efficiency Logo" src="~/assets/images/pe_logo_primary.svg" height="50" />
					</a>

					<ul class="navbar-nav nav nav-pills fw-bold order-md-1 text-center">
						<li class="nav-item">
							<a href="/#about" class="nav-link">{{ $t('About') }}</a>
						</li>
						<li class="nav-item">
							<a href="/#services" class="nav-link">{{ $t('Services') }}</a>
						</li>
						<li class="nav-item">
							<a href="/#works" class="nav-link">{{ $t('Works') }}</a>
						</li>
					</ul>

					<ul class="navbar-nav nav nav-pills justify-content-end order-md-3 text-center">
						<li class="nav-item mb-3 mb-md-0 me-md-3">
							<a href="#contact" class="btn btn-sm btn-primary px-4">{{ $t('ContactUs') }}</a>
						</li>
						<li class="nav-item mb-3 mb-md-0 me-md-3">
                            <nuxt-link class="btn btn-sm btn-light px-2" v-if="$i18n.locale !== 'en'" :to="switchLocalePath('en')">English</nuxt-link>
                            <nuxt-link class="btn btn-sm btn-light px-2" v-if="$i18n.locale !== 'ar'" :to="switchLocalePath('ar')">عربي</nuxt-link>
						</li>
						<li class="nav-item" @click="toggleDarkMode()">
							<a v-if="(this.$colorMode['value'] == 'dark')" class="btn btn-sm btn-light px-2"><i class="bi bi-brightness-high-fill"></i></a>
							<a v-else class="btn btn-sm btn-light px-2"><i class="bi bi-moon-fill"></i></a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
</template>

<script>
	export default {
		mounted() {
			console.log('haha', this.$colorMode['value']);
		},
		methods: {
			toggleDarkMode() {
                console.log('toggle clicked')
                console.log(this.$colorMode.preference, this.$colorMode.preference)
                
				if (this.$colorMode.preference !== 'dark') {
					this.$colorMode.preference = 'dark';
                    console.log('going dark')
                    
				} else {
					this.$colorMode.preference = 'light';
                    console.log('going light')
				}
                
			}
		}
	};
</script>

<style>
</style>