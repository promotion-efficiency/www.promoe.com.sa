<template>

<div class="col service">
    <div class="card h-100 overflow-hidden">
        <div class="card-body p-0" style="height:400px;">
            <img v-if="image" class="contained-image"  :src="require(`~/assets/images/services/${image}`)" :alt="title" />
            <div class="content p-3 d-flex flex-column justify-content-between">
                <!-- <i :class="`bi mo ${ icon } fs-1`"></i> -->
                <h5 class="card-title fw-bolder text-uppercase my-3">{{ title }}</h5>
                <p class="card-text">{{ description }}</p>
                <a :href="link" class="btn btn-sm btn-outline-light ">{{ $t('readmore') }}</a>
            </div>
            
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['icon','title','description','link','image'],
}
</script>

<style>

</style>