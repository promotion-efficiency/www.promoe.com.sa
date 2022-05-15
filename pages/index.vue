<template>
	<div class="">
        <!-- header section -->
		<header class="">
            <div class="container g-0  py-3 mb-4">
                <div class="row flex-nowrap justify-content-between align-items-center">
                    <div class="col-4">
                        <ul class="nav nav-pills fw-bold">
                            <li class="nav-item"><a href="#" class="nav-link">Services</a></li>
                            <li class="nav-item"><a href="#" class="nav-link">Works</a></li>
                            <li class="nav-item"><a href="#" class="nav-link">About Us</a></li>
                        </ul>
                    </div>
                    <div class="col-4 text-center">
                        <a href="/" class="text-dark text-decoration-none text-center">
                            <img alt="Promotion Efficiency Logo" src="~/assets/images/pe_logo_primary.svg" height="80">
                        </a>
                    </div>
                    <div class="col-4 justify-content-end">
                        <ul class="nav nav-pills justify-content-end">
                            <li class="nav-item me-3"><a href="#" class="btn btn-sm btn-primary px-3">Contact Us</a></li>
                            <li class="nav-item"><a href="#" class="btn btn-sm btn-primary px-3">عربي</a></li>
                        </ul>
                    </div>
                </div>                
            </div>
            
        </header>

        <!-- hero section -->
		<SectionsHero />

        <!-- services section -->
		<section id="services" class="p-3 container bg-info">
            <Title title="Services" subtitle="THAT YOU'LL DEFINETLY ENJOY" divider="divider-black"></Title>
            
            <div class="row row-cols-1 row-cols-md-4 g-4 text-center">
                <div class="col">
                    <div class="card h-100">
                        <div class="card-body">
                            <i class="bi bi-rulers fs-1"></i>
                            <h5 class="card-title fw-bolder text-uppercase my-3">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- counters section -->
		<section id="counters" class="container">
			<div class="row text-center">
				<div class="col bg-white">1</div>
				<div class="col">1</div>
				<div class="col bg-white">1</div>
				<div class="col">1</div>
				<div class="col bg-white">1</div>
			</div>
		</section>

        <!-- work section -->
		<section id="work" class="p-3 container bg-info">
            <Title title="Our Works" subtitle="WHAT OUR CLIENTS HAVE ENJOYED" divider="divider-black"></Title>
            <div class="row row-cols-1 row-cols-4">
                <div class="col justify-content-center align-content-center">Test</div>
                <div class="col justify-content-center align-content-center">Test</div>
                <div class="col justify-content-center align-content-center">Test</div>
                <div class="col justify-content-center align-content-center">Test</div>
                <div class="col justify-content-center align-content-center">Test</div>
                <div class="col justify-content-center align-content-center">Test</div>
                <div class="col justify-content-center align-content-center">Test</div>
                <div class="col justify-content-center align-content-center">Test</div>
                <div class="col justify-content-center align-content-center">Test</div>
            </div>
        </section>

        <!-- contact section -->
		<section id="contact" class="p-3 container bg-info">work</section>

        <!-- map section -->
		<section id="map" class="py-3 g-0 container bg-info text-center">
            <iframe class="w-100" src="https://snazzymaps.com/embed/281438" height="600px" style="border:none;"></iframe>
        </section>

        <!-- footer section -->
		<footer class="bg-dark text-light text-center py-5">
			<div class="container py-5">
				<img src="~/assets/images/white-logo.png" height="100" />
				<h3 class="fw-light my-4">
					Your Hike to <strong>PEAK!</strong>
				</h3>
				<ul class="list-inline fw-light fs-4">
					<li class="list-inline-item me-3"><i class="bi bi-instagram"></i></li>
					<li class="list-inline-item me-3"><i class="bi bi-twitter"></i></li>
					<li class="list-inline-item me-3"><i class="bi bi-linkedin"></i></li>
                    <li class="list-inline-item me-3"><i class="bi bi-youtube"></i></li>
                    <li class="list-inline-item me-3"><i class="bi bi-behance"></i></li>
					<li class="list-inline-item me-3"><i class="bi bi-envelope"></i></li>
					<li class="list-inline-item"><i class="bi bi-whatsapp"></i></li>
				</ul>
                <p class="text-white-50">Promotion Efficiency Est. All right reserved. copyright 2021</p>
			</div>
		</footer>
	</div>
</template>

<script>
	export default {
        data() {
            return {
                publicPath: process.env.baseUrl,
            }
        },
	};
</script>
