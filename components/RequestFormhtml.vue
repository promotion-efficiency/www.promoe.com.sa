<template>
    <section id="RequestFormhtml">
        <header class="head-image"></header>
            <div class="container">
                <div class="wrapper">
                    <b-form action="https://formsubmit.co/contact@promoe.com.sa" method="POST">
                        <b-form-group
                            id="input-group-1"
                            label="Full Name:"
                            label-for="name"
                            description="الاسم الثلاثي"
                        >
                            <b-form-input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Example: Ahmed Hady Ibrahim"
                            required
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group
                            id="input-group-2"
                            label="Mobile Phone:"
                            label-for="phone"
                            description="رقم الهاتف"
                        >
                            <b-form-input
                            name="phone"
                            id="phone"
                            type="text"
                            placeholder="Example: +966 5511111111"
                            required
                            ></b-form-input>
                        </b-form-group>

                        
                        <b-form-group
                            id="input-group-3"
                            label="Email:"
                            label-for="email"
                            description="البريد الإلكتروني"
                        >
                            <b-form-input
                            name="email"
                            id="email"
                            type="email"
                            placeholder="Example: contact@promoe.com.sa"
                            required
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group
                            id="input-group-4"
                            label="Website:"
                            label-for="text"
                            description="الموقع الإلكتروني"
                        >
                            <b-form-input
                            name="website"
                            id="website"
                            type="text"
                            placeholder="Example: https://promoe.com.sa"
                            ></b-form-input>
                        </b-form-group>

                        <hr >

                        <b-form-group label="The Service" v-slot="{ ariaDescribedby }">
                            <b-form-radio :aria-describedby="ariaDescribedby" name="service" value="Photography">Photography</b-form-radio>
                            <b-form-radio :aria-describedby="ariaDescribedby" name="service" value="Videography">Videography</b-form-radio>
                            <b-form-radio :aria-describedby="ariaDescribedby" name="service" value="Designing">Designing</b-form-radio>
                            <b-form-radio :aria-describedby="ariaDescribedby" name="service" value="Copywriting">Copywriting</b-form-radio>
                            <b-form-radio :aria-describedby="ariaDescribedby" name="service" value="SocialMediaAccountsManagement">Social Media Accounts Management</b-form-radio>
                            <b-form-radio :aria-describedby="ariaDescribedby" name="service" value="Marketing">Marketing</b-form-radio>
                            <b-form-radio :aria-describedby="ariaDescribedby" name="service" value="Advertising">Advertising</b-form-radio>
                            <b-form-radio :aria-describedby="ariaDescribedby" name="service" value="IT">IT</b-form-radio>
                            <b-form-radio :aria-describedby="ariaDescribedby" name="service" value="EventsManagement">Events Management</b-form-radio>
                        </b-form-group>

                        <hr class="pt-3">
                        <b-form-group
                            id="input-group-5"
                            label="Project Name"
                            label-for="Project-Name"
                            description="Please, write project name in Arabic and English | إسم المشروع بالعربي والانجليزي"
                        >
                            <b-form-input
                            name="Project-Name"
                            id="Project-Name"
                            type="text"
                            placeholder="Example: Shot Coffeeshop"
                            ></b-form-input>
                        </b-form-group>

                        <label class="pt-3">Project Type</label>
                        <select class="form-select" aria-label="Default select example" name="projectType">
                            <option selected value="food">Cafe | مقهى</option>
                            <option value="realstate">Resturant | مطعم</option>
                            <option value="advertising">Real State | عقارات</option>
                            <option value="other">Food | طعام</option>
                            <option value="other">Products | منتجات</option>
                            <option value="other">Services | خدمات</option>
                            <option value="other">Technique | تقنية</option>
                            <option value="other">Other | اخر</option>
                        </select>


                        <b-form-group class="pt-3"
                            id="input-group-5"
                            label="About Project"
                            label-for="aboutproject"
                            description="نبذة عن المشروع وجميع التفاصيل"
                        >
                        <div class="mb-3">
                            <textarea class="form-control" id="aboutproject" name="aboutproject" rows="3"></textarea>
                        </div>
                        </b-form-group>

                        <button type="submit" class="btn btn-primary">Submit</button>
                    </b-form>
                </div>
            </div>
    </section>
</template>

<script>

export default {
    name: 'RequestFormhtml',
}
</script>