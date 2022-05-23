<template>
  <section id="works">
        <div class="container">
            <Title :title="$t('Works')" :subtitle="$t('thatourclientsenjoyed')" divider="divider-blue"></Title>
        </div>
        <div class="container-fluid">
            <div class="row row-cols-1  row-cols-md-4 mb-5 justify-content-center g-1 g-md-0">
                <Work v-for="work of works" 
                :key="localePath(work.path)" 
                :title="work.title" 
                :image="work.featured_image" 
                :link="localePath(work.path)" />
            </div>
            
        </div>
    </section>
</template>

<script>
export default {
    props: ['works'],
    mounted(){
    }
}
</script>

<style>

</style>