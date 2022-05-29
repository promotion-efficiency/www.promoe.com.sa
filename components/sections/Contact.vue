<template>
	<section id="contact">
		<div class="container g-0">
			<div class="row g-0">
				<div class="col">
					<div class="card p-3" style="border-radius: 2rem">
						<div class="card-body">
							<Title :title="title" :subtitle="subtitle" divider="divider-blue"></Title>
							<div class="row row-cols-1 row-cols-md-2">
								<div class="col col-md-7">
									<form action="https://formsubmit.co/contact@promoe.com.sa" method="POST" id="contact-form" novalidate="" class="needs-validation">
										<input type="hidden" name="_next" :value="`${publicPath}/thanks`" />
										<input type="hidden" name="_subject" :value="selected" />
										<input type="text" name="_honey" style="display: none" />

										<div class="form-floating mb-3">
											<select v-model="selected" name="subject" class="form-select" id="floatingSelect" aria-label="Floating label select example">
												<option disabled value="">Please select one</option>
                                                <option>General Inquiry</option>
												<option>Request Campaign</option>
												<option>Request Design</option>
												<option>Request Video</option>
											</select>
											<label for="floatingSelect">{{ $t('contactsubject') }}</label>
										</div>
										<div class="form-floating mb-3">
											<input name="email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required />
											<label for="floatingInput">{{ $t('contactemail') }}</label>
										</div>
										<div class="form-floating mb-3">
											<input name="name" type="text" class="form-control" id="floatingName" placeholder="Name" />
											<label for="floatingName">{{ $t('contactname') }}</label>
										</div>

										<div class="form-floating mb-3">
											<input name="mobile" type="text" class="form-control" id="floatingMobile" placeholder="Mobile" required />
											<label for="floatingMobile">{{ $t('contactmobile') }}</label>
										</div>

										<div class="form-floating mb-3">
											<textarea name="message" class="form-control" placeholder="Leave a comment here" style="height: 100px" id="floatingMessage"></textarea>
											<label for="floatingMessage">{{ $t('contactmessage') }}</label>
										</div>

										<div class="form-floating mb-3">
											<div class="d-grid gap-2">
												<button class="btn btn-primary btn-lg" type="submit">{{ $t('submitform') }}</button>
											</div>
										</div>
									</form>
								</div>

								<div class="col col-md-4 offset-md-1 pt-5">
									<h4 class="fw-bold">{{ $t('orsimplyusethese') }}</h4>
									<div class="contact-info ps-4">
										<h6 class="mt-4"><i class="bi bi-phone"></i> {{ $t('phonenumber') }}:</h6>
										<a dir="ltr" href="tel:+966-581115550">+966 58 111 5550</a>
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


