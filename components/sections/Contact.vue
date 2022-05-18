<template>
	<section id="contact">
		<div class="container">
            <div class="row">
                <div class="col">
                    <div class="card p-3" style="border-radius: 2rem;">
                        <div class="card-body">
                            <Title :title="title" :subtitle="subtitle" divider="divider-blue" ></Title>
                            <div class="row">
				<div class="col">
					<form>
						<div class="form-floating mb-3">
							<select
								class="form-select"
								id="floatingSelect"
								aria-label="Floating label select example"
							>
								<option selected>General Inquiry</option>
								<option value="1">Request Campaign</option>
								<option value="2">Request Design</option>
								<option value="3">Request Video</option>
							</select>
							<label for="floatingSelect">Subject</label>
						</div>
						<div class="form-floating mb-3">
							<input
								type="email"
								class="form-control"
								id="floatingInput"
								placeholder="name@example.com"
							/>
							<label for="floatingInput">Email address</label>
						</div>
						<div class="form-floating mb-3">
							<input
								type="text"
								class="form-control"
								id="floatingName"
								placeholder="Password"
							/>
							<label for="floatingName">Name</label>
						</div>

						<div class="form-floating mb-3">
							<input
								type="text"
								class="form-control"
								id="floatingMobile"
								placeholder="Mobile"
							/>
							<label for="floatingMobile">Mobile</label>
						</div>

						<div class="form-floating mb-3">
							<textarea
								class="form-control"
								placeholder="Leave a comment here"
								style="height: 100px"
								id="floatingMessage"
							></textarea>
							<label for="floatingMessage">Your Message</label>
						</div>

						<div class="form-floating mb-3">
							<div class="d-grid gap-2">
								<button
									class="btn btn-primary btn-lg"
									type="button"
								>
									Submit
								</button>
							</div>
						</div>
					</form>
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
    props: ['title','subtitle'],

};
    
</script>

<style>
</style>


