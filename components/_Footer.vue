<template>
	<footer class="bg-dark text-light text-start py-1 py-md-5">
		<div class="container py-3 py-md-5">
			<div class="row row-cols-1">
				<div class="col text-center text-md-start mb-5 mb-md-0">
					<img src="~/assets/images/white-logo.png" height="100" />
					<h3 class="fw-light my-4">{{ $t('solgan') }}</h3>
					<ul class="list-inline fw-light fs-4 px-0">
						<li class="list-inline-item mx-0"><a class="text-white" href=""><i class="bi bi-instagram"></i></a></li>
                        <li class="list-inline-item mx-2"><a class="text-white" href=""><i class="bi bi-twitter"></i></a></li>
                        <li class="list-inline-item mx-2"><a class="text-white" href=""><i class="bi bi-linkedin"></i></a></li>
                        <li class="list-inline-item mx-2"><a class="text-white" href=""><i class="bi bi-youtube"></i></a></li>
                        <li class="list-inline-item mx-2"><a class="text-white" href=""><i class="bi bi-behance"></i></a></li>
                        <li class="list-inline-item mx-2"><a class="text-white" href=""><i class="bi bi-envelope"></i></a></li>
                        <li class="list-inline-item mx-0"><a class="text-white" href=""><i class="bi bi-whatsapp"></i></a></li>

					</ul>
					<p class="text-white-50">{{ $t('copyrights') }}</p>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
	export default {};
</script>

<style>
</style>