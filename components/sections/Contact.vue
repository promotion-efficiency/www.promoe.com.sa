<template>
	<section id="contact">
		<div class="container g-0">
			<div class="row g-0">
				<div class="col">
					<div class="card p-3" style="border-radius: 2rem">
						<div class="card-body">
							<Title :title="title" :subtitle="subtitle" divider="divider-blue"></Title>
							<div class="row row-cols-1 row-cols-md-2">
								<div class="col col-md-6  pt-4" style="background-color:white; border-radius: 10px;">
									<div id="webFormDiv">
										<div
											class="pipedriveWebForms"
											data-pd-webforms="https://webforms.pipedrive.com/f/73NrgnZ3EcEJnitT9nyE3N15V4IZCqPkjHtAq67ULPWsX6sdWWbfgd5x88m6xLoKxJ"
										></div>
									</div>
								</div>

								<div class="col col-md-4 offset-md-1 pt-5">
									<h4 class="fw-bold">{{ $t('orsimplyusethese') }}</h4>
									<div class="contact-info ps-4">
										<h6 class="mt-4"><i class="bi bi-phone"></i> {{ $t('phonenumber') }}:</h6>
										<a dir="ltr" href="tel:+966-566642220">+966 56 664 2220</a>
										<h6 class="mt-4"><i class="bi bi-envelope"></i> {{ $t('emailaddress') }}:</h6>
										<a  dir="ltr" href="mailto:contact@promoe.com.sa">contact@promoe.com.sa</a>
										<h6 class="mt-4"><i class="bi bi-globe"></i> {{ $t('address') }}:</h6>
                                        <p v-html="$t('address_details')"></p>
										<iframe class="w-100" src="https://snazzymaps.com/embed/281438" height="300px" style="border: none"></iframe>
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
				selected: ''
			};
		}
	};
</script>

<style>
</style>


