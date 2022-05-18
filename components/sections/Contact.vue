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
									<form>
										<div class="form-floating mb-3">
											<select class="form-select" id="floatingSelect" aria-label="Floating label select example">
												<option selected>General Inquiry</option>
												<option value="1">Request Campaign</option>
												<option value="2">Request Design</option>
												<option value="3">Request Video</option>
											</select>
											<label for="floatingSelect">Subject</label>
										</div>
										<div class="form-floating mb-3">
											<input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
											<label for="floatingInput">Email address</label>
										</div>
										<div class="form-floating mb-3">
											<input type="text" class="form-control" id="floatingName" placeholder="Password" />
											<label for="floatingName">Name</label>
										</div>

										<div class="form-floating mb-3">
											<input type="text" class="form-control" id="floatingMobile" placeholder="Mobile" />
											<label for="floatingMobile">Mobile</label>
										</div>

										<div class="form-floating mb-3">
											<textarea class="form-control" placeholder="Leave a comment here" style="height: 100px" id="floatingMessage"></textarea>
											<label for="floatingMessage">Your Message</label>
										</div>

										<div class="form-floating mb-3">
											<div class="d-grid gap-2">
												<button class="btn btn-primary btn-lg" type="button">Submit</button>
											</div>
										</div>
									</form>
								</div>

								<div class="col col-md-4 offset-md-1 pt-5">
									<h4 class="fw-bold">Or simply use these</h4>
                                    <div class="contact-info ps-4">
                                        <h6 class="mt-4"><i class="bi bi-phone"></i> Phone Number:</h6>
                                        <a href="tel:+966-55555555">+966-55555555</a>
                                        <h6 class="mt-4"><i class="bi bi-envelope"></i> Email Address:</h6>
                                        <a href="mailto:contact@promoe.com.sa">contact@promoe.com.sa</a>
                                        <h6 class="mt-4"><i class="bi bi-globe"></i> Address:</h6>
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
		props: ['title', 'subtitle']
	};
</script>

<style>
</style>


