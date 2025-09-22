<template>
	<div class="coming-soon-container">
		<video 
			autoplay 
			muted 
			loop 
			playsinline
			webkit-playsinline="true"
			preload="metadata"
			class="coming-soon-video"
		>
			<source src="/soon.webm" type="video/webm">
			<source src="/soon.mp4" type="video/mp4">
			<source src="/videos/soon.mp4" type="video/mp4">
			<source src="/assets/videos/soon.mp4" type="video/mp4">
			Your browser does not support the video tag.
		</video>
	</div>
</template>

<script>
export default {
	layout: 'coming-soon',
	data() {
		return {
			lastScrollY: 0,
			currentScale: 1,
			minScale: 0.9,
			maxScale: 1.04,
			scrollRangePx: 800,
			ticking: false
		}
	},
	mounted() {
		if (process.client) {
			const h = window.innerHeight || 800
			this.scrollRangePx = Math.max(500, Math.min(1000, Math.round(h * 0.9)))
			window.addEventListener('scroll', this.onScroll, { passive: true })
			this.applyScale(1)
		}
	},
	beforeDestroy() {
		if (process.client) {
			window.removeEventListener('scroll', this.onScroll)
		}
	},
	methods: {
		onScroll() {
			if (!this.ticking) {
				this.ticking = true
				requestAnimationFrame(() => {
					const y = window.scrollY || window.pageYOffset || 0
					const downProgress = Math.min(1, Math.max(0, y / this.scrollRangePx))
					let target = 1 - (1 - this.minScale) * downProgress
					if (y < this.lastScrollY) target = Math.min(this.maxScale, this.currentScale + 0.01)
					this.applyScale(target)
					this.lastScrollY = y
					this.ticking = false
				})
			}
		},
		applyScale(val) {
			const clamped = Math.max(this.minScale, Math.min(this.maxScale, val))
			this.currentScale = clamped
			const root = this.$el
			if (root) root.style.setProperty('--heroScale', String(clamped))
		},
	},
	head() {
		return {
			title: 'Coming Soon',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'Website Under Construction'
				}
			]
		}
	}
}
</script>

<style scoped>
.coming-soon-container {
	position: relative;
	width: 100vw;
	/* Fallback then dynamic viewport for mobile browsers */
	height: 100vh;
	height: 100svh;
	height: 100dvh;
	min-height: 360px;
	overflow: hidden;
	background: #000000;
}

.coming-soon-video {
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	transform: scale(var(--heroScale, 1));
	z-index: 1;
	will-change: transform;
	transition: transform 120ms ease-out;
}
</style>
