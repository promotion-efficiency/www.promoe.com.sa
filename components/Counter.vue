<template>
    <div class="col p-3 border-1">
        <span class="number fw-bolder">{{ number }}</span>
        <h3 class="h5">{{ text }}</h3>
    </div>
</template>

<script>
export default {
    props: ['number','text']
}
</script>

<style>

</style>