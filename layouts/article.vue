<template>
<default-layout>
	<div :class="{ 'privacy-policy-page': isPrivacyPolicy }">
		<!-- Logo only - same placement as home page -->
		<header class="article-logo-header">
			<nav class="navbar">
				<div class="container">
					<a class="navbar-brand d-md-none" href="/">
						<img alt="Promotion Efficiency Logo" src="/assets/images/PE-White.png" width="140" class="img-fluid" />
					</a>
					<div class="collapse navbar-collapse">
						<a class="navbar-brand d-none d-md-block" href="/">
							<img alt="Promotion Efficiency Logo" src="/assets/images/PE-White.png" width="160" class="img-fluid" />
						</a>
					</div>
				</div>
			</nav>
		</header>

		<div class="container py-1 py-md-5" style="background-color: #000000; min-height: 100vh; padding-top: 80px !important;">
			<div class="row">
				<div class="col">
					<nuxt />
				</div>
			</div>
		</div>

		<!-- contact section -->

		<!-- footer section -->
		<Footer />
	</div>
</default-layout>
	
</template>

<script>
	import DefaultLayout from '~/layouts/main_layout.vue';

	export default {
		head() {
			return {
				htmlAttrs: {
					lang: this.$i18n.locale
				},
				script: [
					{type: 'text/javascript', src: 'https://webforms.pipedrive.com/f/loader', async: true, defer: true}
				]
			};
		},
		components: {
			DefaultLayout,
		},
		computed: {
			isPrivacyPolicy() {
				return this.$route && this.$route.name && this.$route.name.includes('pages-slug') && this.$route.params && this.$route.params.slug === 'privacy-policy';
			},
			isJobsPage() {
				return this.$route && this.$route.name && this.$route.name.includes('pages-slug') && this.$route.params && this.$route.params.slug === 'jobs';
			}
		},
		mounted() {
			if (this.isJobsPage && process.client) {
				this.ensurePipedriveLoader();
			}
		},
		methods: {
			ensurePipedriveLoader() {
				if (!process.client) return;
				
				// Check if script is already loaded
				if (window.PipedriveWebForms) {
					return;
				}

				// Check if script tag already exists
				const existingScript = document.querySelector('script[src="https://webforms.pipedrive.com/f/loader"]');
				if (existingScript) {
					// Wait for script to load
					existingScript.addEventListener('load', () => {
						this.initializeForm();
					});
					return;
				}

				// Load the script
				const script = document.createElement('script');
				script.type = 'text/javascript';
				script.src = 'https://webforms.pipedrive.com/f/loader';
				script.async = true;
				script.defer = true;
				script.onload = () => {
					this.initializeForm();
				};
				document.head.appendChild(script);
			},
			initializeForm() {
				// Wait a bit for Pipedrive to initialize
				setTimeout(() => {
					const formDiv = document.getElementById('jobsFormDiv');
					if (formDiv) {
						const formElement = formDiv.querySelector('.pipedriveWebForms');
						if (formElement && window.PipedriveWebForms) {
							// Force re-initialization if needed
							formElement.style.display = 'block';
							formElement.style.visibility = 'visible';
							
							// Hide "Fill Your Information" heading
							this.hideFormTitle(formElement);
						}
					}
				}, 500);
			},
			hideFormTitle(formElement) {
				// Try to hide title elements outside iframe
				const titles = formElement.querySelectorAll('h2, h3, .pd-form-title, [class*="title"], [class*="heading"]');
				titles.forEach(el => {
					if (el.textContent && (el.textContent.includes('Fill Your Information') || el.textContent.includes('Fill') || el.textContent.includes('Information'))) {
						el.style.display = 'none';
					}
				});
				
				// Try to hide title inside iframe (may not work due to CORS)
				try {
					const iframe = formElement.querySelector('iframe');
					if (iframe && iframe.contentDocument) {
						const iframeDoc = iframe.contentDocument;
						const iframeTitles = iframeDoc.querySelectorAll('h2, h3, .pd-form-title, [class*="title"], [class*="heading"]');
						iframeTitles.forEach(el => {
							if (el.textContent && (el.textContent.includes('Fill Your Information') || el.textContent.includes('Fill') || el.textContent.includes('Information'))) {
								el.style.display = 'none';
							}
						});
					}
				} catch (e) {
					// CORS restriction - cannot access iframe content
					console.log('Cannot access iframe content due to CORS');
				}
			}
		}
	};
</script>

<style>
/* Logo header - same placement as home page */
.article-logo-header {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 10;
	background: transparent !important;
}

.article-logo-header .navbar {
	background: transparent !important;
}

.article-logo-header .navbar .container {
	padding-top: 8px;
	padding-bottom: 8px;
}

.article-logo-header .navbar-collapse {
	display: block !important;
}

.article-logo-header .navbar-brand {
	text-align: left !important;
}

/* Dark footer for all article pages - matching home page - force black */
.default-layout footer,
.default-layout footer.bg-dark,
.default-layout footer.text-light,
.default-layout .bg-dark {
	background-color: #000000 !important;
	background: #000000 !important;
	--bs-dark-rgb: 0, 0, 0 !important;
	color: #ffffff !important;
}

.default-layout footer .text-white-50 {
	color: rgba(255, 255, 255, 0.5) !important;
}

.default-layout footer a {
	color: rgba(255, 255, 255, 0.5) !important;
}

.default-layout footer a:hover {
	color: #ffffff !important;
}

/* Dark theme for article pages */
.default-layout {
	background-color: #000000 !important;
	color: #ffffff !important;
}

article {
	background-color: transparent !important;
	color: #ffffff !important;
}

article h1,
article h2,
article h3,
article h4,
article h5,
article h6,
article p,
article .breadcrumb,
article .breadcrumb a {
	color: #ffffff !important;
}

/* Jobs form styling - dark theme */
#jobsFormDiv {
	background-color: transparent !important;
	padding: 0 !important;
	border-radius: 10px !important;
	max-width: 800px !important;
	margin: 0 auto !important;
	overflow: visible !important;
	text-align: center !important;
}

/* Ensure Pipedrive form container is visible */
.pipedriveWebForms {
	display: block !important;
	visibility: visible !important;
	opacity: 1 !important;
	min-height: 1100px !important;
	margin-bottom: 0 !important;
	padding-bottom: 0 !important;
	overflow: visible !important;
}

/* Hide "Fill Your Information" heading in Pipedrive form */
.pipedriveWebForms h2,
.pipedriveWebForms h3,
.pipedriveWebForms .pd-form-title,
.pipedriveWebForms [class*="title"],
.pipedriveWebForms [class*="heading"] {
	display: none !important;
}

/* Ensure Pipedrive form iframe is visible on dark background */
.pipedriveWebForms iframe {
	width: 100% !important;
	min-height: 1100px !important;
	height: auto !important;
	display: block !important;
	border: none !important;
	margin: 0 !important;
	padding: 0 !important;
	overflow: visible !important;
}

/* Remove extra bottom space from the embed wrapper */
.pipedriveWebForms > *:last-child {
	margin-bottom: 0 !important;
	padding-bottom: 0 !important;
}

/* Responsive adjustments */
@media (max-width: 992px) {
	.pipedriveWebForms iframe {
		min-height: 1200px !important;
	}
}

@media (max-width: 576px) {
	.pipedriveWebForms iframe {
		min-height: 1300px !important;
	}
}
</style>