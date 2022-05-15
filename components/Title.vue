<template>
    <div class="heading py-4 text-center mb-5 w-75 mx-auto">
        <img v-if="divider" :src="require(`~/assets/images/${divider}.png`)" height="100" alt="heading decorator" />
        <h2 class="display-4 fw-bold mt-3">{{ title }}</h2>
        <p v-if="subtitle" class="lead mb-4">{{ subtitle }}</p>
    </div>
</template>

<script>
export default {
    props: ['title','subtitle','divider'],
    data() {
        return {
            
        }
    }
}
</script>

<style>

</style>