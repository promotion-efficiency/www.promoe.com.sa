<template>
  <div class="test-form-page">
    <h1>Test Pipedrive Form</h1>
    <div id="webFormDiv" style="background: white; padding: 20px; border-radius: 10px; min-height: 500px;">
      <div
        class="pipedriveWebForms"
        data-pd-webforms="https://webforms.pipedrive.com/f/73NrgnZ3EcEJnitT9nyE3N15V4IZCqPkjHtAq67ULPWsX6sdWWbfgd5x88m6xLoKxJ"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Test Form',
      script: [
        {type: 'text/javascript', src: 'https://webforms.pipedrive.com/f/loader'},
        {
          innerHTML: `
            window.addEventListener('load', function() {
              console.log('Page loaded, checking Pipedrive form...');
              setTimeout(function() {
                const formDiv = document.getElementById('webFormDiv');
                console.log('Form div:', formDiv);
                if (formDiv) {
                  const form = formDiv.querySelector('.pipedriveWebForms');
                  console.log('Pipedrive form element:', form);
                  if (form) {
                    console.log('Form HTML:', form.innerHTML);
                    form.style.display = 'block';
                    form.style.visibility = 'visible';
                    form.style.opacity = '1';
                  }
                }
              }, 2000);
            });
          `,
          type: 'text/javascript'
        }
      ]
    }
  }
}
</script>

<style scoped>
.test-form-page {
  padding: 20px;
  background: #f0f0f0;
  min-height: 100vh;
}

#webFormDiv {
  background: white;
  padding: 20px;
  border-radius: 10px;
  min-height: 500px;
  border: 2px solid #ccc;
}
</style>
