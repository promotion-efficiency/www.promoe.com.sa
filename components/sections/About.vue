<template>
    <section id="about">
        <div class="container">
            <Title :title="$t('AboutUs')" divider="divider-blue" />
            <div class="row row-cols-1 g-md-5 w-100 w-md-75 mx-auto text-center">
                <div class="col">
                    <p class="lead">
                        {{ $t('AboutUsText') }}
                        
                    </p>
                    
                </div>
                <div class="col"><a href="/pages/about" class="btn btn-primary btn-lg">READ MORE</a></div>
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