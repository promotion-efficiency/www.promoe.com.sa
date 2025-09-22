<template>
	<section id="contact">
		<div class="container g-0">
			<div class="row g-0">
				<div class="col">
					<div class="contact-wrap">
						<div class="contact-body">
							<!-- Heading area matching the reference -->
							<!-- removed separate heading row to align with form -->
							<!-- Centered heading -->
							<div class="row">
								<div class="col text-center">
									<p class="overline mb-2"> {{ title }}</p>
									<h1 class="display-4 fw-bold mb-4">GET IN TOUCH.</h1>
								</div>
							</div>

							<!-- Content area: left form, right details -->
							<div class="row row-cols-1 row-cols-md-2 align-items-start">
								<!-- Left: Pipedrive form -->
								<div class="col col-md-7 pt-1 pt-md-2">
									<div id="webFormDiv">
										<div
											class="pipedriveWebForms"
											data-pd-webforms="https://webforms.pipedrive.com/f/73NrgnZ3EcEJnitT9nyE3N15V4IZCqPkjHtAq67ULPWsX6sdWWbfgd5x88m6xLoKxJ"
										></div>
									</div>
								</div>
								<!-- Right: Contact details + divider + map -->
								<div class="col col-md-5 pt-2 pt-md-2 mt-0">
									<h6 class="mb-2 text-uppercase small opacity-75" style="color:#ffffff !important;">{{ $t('orsimplyusethese') }}</h6>
									<hr class="section-sep mb-3"/>
									<div class="contact-info ps-md-2" style="color:#ffffff !important;">
										<h6 class="mt-2" style="color:#ffffff !important;"><i class="bi bi-phone"></i> {{ $t('phonenumber') }}:</h6>
										<a dir="ltr" href="tel:+966566642220" @click="trackPhoneNumberClick" class="text-decoration-none text-white">+966 56 664 2220</a>
										<h6 class="mt-3" style="color:#ffffff !important;"><i class="bi bi-envelope"></i> {{ $t('emailaddress') }}:</h6>
										<a dir="ltr" href="mailto:contact@promoe.com.sa" class="text-decoration-none text-white">contact@promoe.com.sa</a>
										<h6 class="mt-3" style="color:#ffffff !important;"><i class="bi bi-globe"></i> {{ $t('address') }}:</h6>
										<p class="mb-3" style="color:#ffffff !important;" v-html="$t('address_details')"></p>
										<div class="map-frame mt-2">
											<iframe class="w-100" src="https://snazzymaps.com/embed/281438" height="300" style="border: none" title="Location Map"></iframe>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		props: ['title', 'subtitle'],
		data() {
			return {
                publicPath: process.env.baseUrl,
				selected: '',
				observer: null,
				loaderInjected: false
			};
		},
		mounted() {
			this.setupLazyLoader();
		},
		beforeDestroy() {
			if (this.observer) this.observer.disconnect();
		},
		methods: {
			trackPhoneNumberClick() {
				this.$gtag_report_conversion('tel:+966566642220');
			},
			setupLazyLoader() {
				const target = document.getElementById('contact');
				if (!target) return this.ensurePipedriveLoader();
				this.observer = new IntersectionObserver((entries) => {
					entries.forEach(entry => {
						if (entry.isIntersecting) {
							this.ensurePipedriveLoader();
							if (this.observer) this.observer.disconnect();
						}
					});
				}, { root: null, rootMargin: '0px', threshold: 0.1 });
				this.observer.observe(target);
			},
			ensurePipedriveLoader() {
				if (this.loaderInjected) return;
				if (!window.PipedriveWebForms) {
					const script = document.createElement('script');
					script.type = 'text/javascript';
					script.src = 'https://webforms.pipedrive.com/f/loader';
					script.async = true;
					script.defer = true;
					document.head.appendChild(script);
				}
				this.loaderInjected = true;
			}
  		}
	};
</script>

<style>
/* Overline and headline */
.overline { letter-spacing: 0.06em; opacity: 0.85; }
.display-4 { font-size: clamp(2rem, 4vw + 1rem, 3rem); line-height: 1.1; }

/* Form wrapper transparent so only the fields are white */
#webFormDiv { background-color: transparent !important; padding: 0 !important; border-radius: 10px !important; }

/* Ensure embedded Pipedrive iframe shows fully but without excessive space */
.pipedriveWebForms iframe {
  width: 100% !important;
  min-height: 620px !important; /* further reduced */
  height: auto !important;
  display: block !important;
  margin: 0 !important;
}

@media (max-width: 992px) {
  .pipedriveWebForms iframe { min-height: 680px !important; }
}

@media (max-width: 576px) {
  .pipedriveWebForms iframe { min-height: 740px !important; }
}

/* Remove extra bottom space from the embed wrapper */
.pipedriveWebForms { margin-bottom: 0 !important; padding-bottom: 0 !important; }
.pipedriveWebForms > *:last-child { margin-bottom: 0 !important; padding-bottom: 0 !important; }
#webFormDiv { margin-bottom: 0 !important; }

/* Accent link on dark */
.link-accent { color: #ffffff !important; }
.link-accent:hover { color: #dfe9ff !important; }

/* Divider under right heading */
.section-sep { border-color: rgba(255,255,255,0.25) !important; }

/* Map frame */
.map-frame { border-radius: 12px; overflow: hidden; }

/* Alignment cleanup */
.contact-wrap, .contact-body { padding-left: 0 !important; }

/* Nudge the heading to match the form's internal left padding */
.form-align-offset { padding-left: 0; }
@media (max-width: 576px) { .form-align-offset { padding-left: 0; } }

/* Force all text in Contact section to white */
.contact-body,
.contact-body * {
  color: #ffffff !important;
}

/* Right column: force labels, links, and paragraphs to white */
.contact-info h6,
.contact-info a,
.contact-info p {
  color: #ffffff !important;
}

/* Stronger override: make all right-column content white, remove dimming */
.contact-info,
.contact-info *,
.contact-info .bi,
.contact-info .opacity-75 {
  color: #ffffff !important;
  opacity: 1 !important;
}

/* Responsive enhancements */
@media (max-width: 992px) {
  .display-4 { font-size: clamp(1.8rem, 3.5vw + 1rem, 2.5rem); }
}

@media (max-width: 768px) {
  .display-4 { font-size: 2rem; }
  .contact-body { padding-left: 12px !important; padding-right: 12px !important; }
}

@media (max-width: 576px) {
  .overline { font-size: 0.85rem; }
  .display-4 { font-size: 1.75rem; }
  .map-frame iframe { height: 200px !important; }
}

/* Reduce mobile gap between form and right column */
@media (max-width: 768px) {
  .contact-body .col.col-md-5 { padding-top: 8px !important; margin-top: 0 !important; }
  .section-sep { margin-top: 4px !important; margin-bottom: 8px !important; }
}
</style>
