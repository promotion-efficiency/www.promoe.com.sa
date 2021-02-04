<template>
  <div>
    <section id="hero" class="p-2 py-lg-3 bg-white overflow-hidden h-100">
    <Navbar />
    </section>
    <b-container class="py-5 mt-5">
        <div class="about">
            <h1>About Us:</h1>
            <hr>
            <p>In an era where marketing is the battleground for brands today, Promotion Efficiency is a platform of skilled Saudis 
                who are equipped with ambition and creativity in the fields of marketing and advertisement, which makes them create 
                unusual, innovative and out-of-the-box marketing solutions that outperform current conventional methods. As we are a 100% owned and run Saudi establishment specializing in 
                marketing and advertising, we understand our surrounding community, their needs, desires, and how they would like to 
                perceive creative marketing content. This allows us to help our local clients grow their businesses and international 
                companies who are expanding to Saudi Arabia. In addition, we work as one team to produce media content, conduct 
                marketing strategies, and then launch it on the most effective advertising platform to deliver your product/service marketing content to the targeted audience.
            </p>
            <h3>We are your guiding partner on your <strong>HIKE TO PEAK</strong></h3>
        </div>
        <div class="values">
            <h1>Our Values:</h1>
            <hr>
            <div class="boxescontainer">
                <div class="box">
                    <h3>Creativity</h3>
                    <p>
                        We define creativity as a blend of simplicity 
                        and modernization. With the highest quality 
                        levels combined with innovation, our work 
                        aims to capture the audience’s attention.
                    </p>
                </div>
                <div class="box">
                    <h3>Determination</h3>
                    <p>
                    Being target-oriented makes us employ our 
                    distinguished resources to deliver new, 
                    unique, and effective solutions to our valued 
                    clients that exceed their expectations.
                    </p>
                </div>
                <div class="box">
                    <h3>Teamwork</h3>
                    <p>
                        We team up and partner with our clients on 
                        their journey to the peaks of success.
                    </p>
                </div>
            </div>
            <div class="boxescontainer">
                <div class="box">
                    <h3>Excellence</h3>
                    <p>
                        Excellence in the smallest details of our work adds up 
                        to excellence in the final result. By believing in that, we 
                        raise the bar to set and achieve ambitious goals with 
                        the highest quality within defined metrics and key 
                        performance indices to always track our excellence.
                    </p>
                </div>
                <div class="box">
                    <h3>Citizenship</h3>
                    <p>
                        Since we are a part of this society, we believe that 
                        investing in our community with impactive and 
                        valuable contributions comes back with great 
                        returns.                        
                    </p>
                </div>
                <div class="box">
                    <h3>Adaptability</h3>
                    <p>
                        Change is the key to success. Being ahead of time 
                        and catching up with the turns of events to be 
                        beyond our knowledge horizon is what 
                        distinguishes us
                    </p>
                </div>
            </div>
        </div>
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {},
  head() {
      return {
          title: 'About | Promotion Efficiency',
          meta: [
              {
                  hid: 'description',
                  name: 'description',
                  content:'We are your guiding partner on your HIKE TO PEAK'
              }

          ]
      }
  }
};
</script>