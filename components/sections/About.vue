<template>
    <section id="about">
        <div class="container">
            <Title :title="$t('AboutUs')" divider="divider-blue" />
            <div class="row row-cols-1 g-md-5 w-100 w-md-75 mx-auto text-center">
                <div class="col">
                    <p class="lead" v-html="$t('AboutUsText')"></p>
                </div>
                <div class="col"><a :href="localePath('/pages/about')" class="btn btn-primary btn-lg text-uppercase">{{ $t('readmore') }}</a></div>
            </div>
        </div>
    </section>

</template>

<script>
export default {

}
</script>

<style>

</style>
