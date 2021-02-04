<template>
  <div id="jobs">
    <section id="hero" class="p-2 py-lg-3 bg-white overflow-hidden h-100">
    <Navbar />
    </section>
    <section id="content" class="py-2 py-lg-5 bg-white mb-5">
      <b-container>
        <header class="mb-2 mb-lg-5">
          <h1>Apply to a Job</h1>
          <hr />
          <b-alert variant="warning" show>Openings are closing soon</b-alert>
          <p class="text-muted">
            We, at Promotion Efficiency, crave for talents in the region in a multitude 
            of fields and those set the base for our <strong>Excellence</strong> and success.<br /><br />
            If you think you have a skill or talent that can be utilized in 
            <strong>Marketing</strong> in anyway, shape or form, use the below 
            form to add your information and we will get back to you ASAP.</p>
        </header>
      

        <h4>Fill your information now</h4>
        <hr />
        <div>
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">

            <b-form-group id="input-group-2" label="Full Name:" label-size="lg" label-for="input-2">
              <b-form-input id="input-2" size="lg" v-model="form.name" required placeholder="Enter name"></b-form-input>
            </b-form-group>                                      

            <label for="example-datepicker">Birth Date</label>
            <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
            <p>Value: '{{ value }}'</p>

            <h3 style="padding-top:25px; padding-bottom: 40px; color:#083d53 !important">Current Address</h3>

            <b-form-group id="input-group-2" label-size="lg" label-for="street" style="padding-bottom:50px">
            <b-form-input id="street" size="lg" v-model="form.street" required></b-form-input>
            <small>Street Address</small>

            <b-form-input id="street2" size="lg" v-model="form.street2"></b-form-input>
            <small>Street Address 2</small>

            <b-form-input id="city" size="lg" v-model="form.city" required></b-form-input>
            <small>City</small>

            <b-form-input id="state" size="lg" v-model="form.state"></b-form-input>
            <small>State</small>
            </b-form-group>  

            <hr style="padding-bottom: 50px">

            <b-form-group id="input-group-1" label="Email address:" label-size="lg" label-for="input-1" description="We'll never share your email with anyone else.">
              <b-form-input id="input-1" size="lg" v-model="form.email" type="email" required placeholder="Enter email"></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-1" label="Phone Number" label-size="lg" label-for="phonenumber" style="padding-bottom:50px">
            <b-form-input id="phonenumber" size="lg" v-model="form.phonenumber" type="text" required placeholder="+966 0000000000"></b-form-input>
            </b-form-group>

            <hr style="padding-bottom: 50px">

            <b-form-group id="input-group-1" label="University" label-size="lg" label-for="university">
            <b-form-input id="university" size="lg" v-model="form.university" type="text" required></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-1" label="Major" label-size="lg" label-for="major">
            <b-form-input id="major" size="lg" v-model="form.major" type="text" required ></b-form-input>
            </b-form-group>

            
            <b-form-group id="input-group-1" label="GPA" label-size="lg" label-for="gpa" style="padding-bottom:50px">
            <b-form-input id="gpa" size="lg" v-model="form.gpa" type="text" required></b-form-input>
            </b-form-group>

            <hr style="padding-bottom: 50px">

            <b-form-group id="input-group-3" label="Job:" label-size="lg" label-for="input-3">
            <b-form-select id="input-3" size="lg" v-model="form.job" :options="jobs" required></b-form-select>
            </b-form-group>

            <b-form-group id="input-group-4" label="Your Message:" label-size="lg" style="padding-bottom: 50px;">
              <b-form-textarea id="textarea" v-model="form.message" placeholder="Enter something..." rows="3" max-rows="6" size="lg"></b-form-textarea> 
            </b-form-group>
            <hr style="padding-bottom: 50px">
            <b-form-group id="input-group-4" label="Availbility:" label-size="lg" >
              <b-form-radio-group id="radio-group-2" v-model="form.selected" name="radio-sub-component" size="lg">
                <b-form-radio value="available">Available Immediately</b-form-radio>
                <b-form-radio value="not_available">Require a Notice Period</b-form-radio>
              </b-form-radio-group>
            </b-form-group>

            <b-form-group id="CV" label="Your CV and Works:" label-size="lg" label-for="uploader_input" description="Add your CV, Portfolio or Samples of Works">
              <b-form-file
                id="uploader_input"
                v-model="form.file1"
                :state="Boolean(form.file1)"
                placeholder="Choose files or drop here..."
                drop-placeholder="Drop file here..."
                multiple 
                size="lg"
                accept=".jpg, .png, .gif, .doc, .docx, .pdf"
              >
              </b-form-file>
              <div class="mt-3 text-muted"><small>Selected file: {{ form.file1 ? (form.file1.length === 1 ? form.file1[0].name : `${form.file1.length} files selected`) : '' }}</small></div>

            </b-form-group>
            <b-button type="submit" variant="primary">Submit</b-button> 
            <b-button type="reset" variant="danger">Reset</b-button>
          </b-form>
          <b-card class="mt-3" header="Form Data Result">
            <pre class="m-0">{{ form }}</pre>
          </b-card>
        </div>
    </b-container>

    </section>
  </div>
</template>

<script>
export default {
    head() {
      return {
          title: 'Apply for a Job | Promotion Efficiency',
          meta: [
              {
                  hid: 'description',
                  name: 'description',
                  content:'Apply for a job at Promotion Efficiency, we crave for talents in the region in a multitude of fields'
              }

          ]
      }
  },
  data() {
      return {
        form: {
          email: '',
          name: '',
          job: null,
          selected: null,
          file1: [],
          message: null
        },
        jobs: [
          { 
            text: 'Select One', 
            value: null 
          }, 
          'Marketer', 
          'Designer', 
          'IT Analyst', 
          'Assistant',
          'Reciptionist',
          'Accountant',
          'HR Analyst',
        ],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.job = null
        this.form.selected = null
        this.form.file1 = []
        this.form.message = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
};
</script>