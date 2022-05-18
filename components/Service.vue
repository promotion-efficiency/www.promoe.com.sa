<template>

<div class="col service">
    <div class="card h-100">
        <div class="card-body">
            <i :class="`bi ${ icon } fs-1`"></i>
            <h5 class="card-title fw-bolder text-uppercase my-3">{{ title }}</h5>
            <p class="card-text">{{ description }}</p>
            <a :href="link" class="btn btn-sm btn-outline-light">Details</a>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['icon','title','description','link'],
}
</script>

<style>

</style>