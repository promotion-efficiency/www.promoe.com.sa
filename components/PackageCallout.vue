<template>
    <section>
        <h4 class="mb-4 fs-1 fw-light">{{ text }}</h4>
        <a :href="link" class="btn btn-primary btn-lg">{{ buttonText }}</a>
    </section>
</template>

<script>
export default {
    props: ['text', 'buttonText', 'link']
}
</script>

<style>

</style>