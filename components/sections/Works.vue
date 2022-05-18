<template>
  <section id="works">
        <Title title="Our Works" subtitle="WHAT OUR CLIENTS HAVE ENJOYED" divider="divider-blue"></Title>
        <div class="container-fluid">
            <div class="row row-cols-1 row-cols-4 mb-5 justify-content-center g-1">
                <Work v-for="work of works" :key="work.createdAt" :title="work.title" :image="work.image" :link="`works/${work.slug}`" />
            </div>
            
        </div>
    </section>
</template>

<script>
export default {
    props: ['works'],
    mounted(){
        console.log(this.works);
    }
}
</script>

<style>

</style>