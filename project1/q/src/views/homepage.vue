<template>
    <div class="mainpage">
        <div class="container1">
            <div class="row">
                <div class="col-8 Div position-relative" style="border-right: 1px solid #00000047">
                    <div class="div_Rectangle2">
                        <div>
                            <img src="../assets/Rectangle2.png" class="img1" height="470" alt="">
                            <div class="imageDetails">
                                <!-- <div class="p_time">
                                    <p> فبراير 2 . 5 دقائق قراءة </p>

                                </div> -->
                                <p class="writer">كتب بواسطة : أحمد السيد</p>
                            </div>
                            <h1 class="img1_title">فوائد القراءة اليومية</h1>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="div_Rectangle3">
                        <img src="../assets/Rectangle3.png" class="img2" height="200" alt="">
                        <div class="imageDetails2">
                            <!-- <div class="p_time2">
                                {{ lasest[1].from_time }} . {{ lasest[1].time_to_raed }}
                            </div> -->
                            <p class="writer2">كتب بواسطة : أحمد السيد</p>
                        </div>
                        <p class="img2_title">تعزيز التفكير النقدي من خلال القراءة</p>
                    </div>
                    <!-- </div> -->
                    <div class="div_img2">
                        <div>
                            <img src="../assets/Rectangle4.png" class="img2" height="200" alt="">
                            <div class="imageDetails2">
                                <!-- <div class="p_time2">
                                    {{ lasest[2].from_time }} . {{ lasest[2].time_to_raed }}
                                </div> -->
                                <p class="writer2">كتب بواسطة : أحمد السيد</p>
                            </div>
                            <p class="img2_title">رحلة ممتعة لاكتشاف التراث</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="slider">
        <h1 class="slider_title"> <span> الاقسام </span> </h1>
        <swiper :slidesPerView="5" :spaceBetween="30" :loop="true" :navigation="true" :modules="modules"
            :centeredSlides="true" :autoplay="{ delay: 2500, disableOnInteraction: false, }" :breakpoints="{
                '0': {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                '640': {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                '768': {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
                '1024': {
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
            }" class="mySwiper">
            <swiper-slide v-for="slider in sliders1">
                <img :src="slider.imageURL" alt="" />
                <h1 class="slider_h1">{{ slider.imageTitle }}</h1>
            </swiper-slide>
        </swiper>
    </div>

    <br>
    <div class="lastestArticle">
        <div class="lastestArticle_titles">
            <h1 class="Article_title"> احدث<span>المقالات</span></h1>
            <router-link class="to_article_page" to="">عرض الجميع</router-link>
        </div>
        <div class="containerlastestArticle">
            <div class="row lg-my-5 d-flex align-items-center">
                <div class="col-6 article_description" style="gap: 9px">
                    <p class="article_writer"> كتب بواسطة : أحمد السيد</p>
                    <h3 class="article_title">فوائد القراءة اليومية</h3>
                    <p class="part_of_article"> القراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية. إن القراءة اليومية
                        لها تأثير كبير على حياتنا وتعزز الذكاء والتفكير الإبداعي. في هذا المقال، سنستكشف فوائد القراءة
                        اليومية وكيف يمكن أن تؤثر بشكل إيجابي على حياتنا. </p>
                    <div class="div">
                        <router-link class="to_article_page2" to="/articlepage"> أقرأ المزيد</router-link>
                        <!-- <div class="article_time">
                            <p class="p_article_from">
                                {{ article.article_from }}.{{ article.article_time_read }}
                            </p>
                        </div> -->
                    </div>
                </div>
                <div class="col-6 col_img">
                    <img src="../assets/Rectangle2.png" class="article_img" alt="" />
                </div>
            </div>
            <br style="margin-bottom: 75px;" />
            <div class="row lg-my-5 d-flex align-items-center">
                <div class="col-6 article_description" style="gap: 9px">
                    <p class="article_writer"> كتب بواسطة : أحمد السيد </p>
                    <h3 class="article_title">فوائد القراءة اليومية</h3>
                    <p class="part_of_article"> القراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية. إن القراءة اليومية
                        لها تأثير كبير على حياتنا وتعزز الذكاء والتفكير الإبداعي. في هذا المقال، سنستكشف فوائد القراءة
                        اليومية وكيف يمكن أن تؤثر بشكل إيجابي على حياتنا. </p>
                    <div class="div">
                        <router-link class="to_article_page2" to="/articlepage"> أقرأ المزيد</router-link>
                        <!-- <div class="article_time">
                            <p class="p_article_from">
                                {{ article.article_from }}.{{ article.article_time_read }}
                            </p>
                        </div> -->
                    </div>
                </div>
                <div class="col-6 col_img">
                    <img src="../assets/Rectangle12.png" class="article_img" alt="" />
                </div>
            </div>
        </div>
    </div>
    <br>

    <div class="slider">
        <div class="siderHead">
            <h1> الاكثر <span>قراءه</span></h1>
            <router-link to="" style="text-decoration: none">عرض الجميع</router-link>
        </div>
        <swiper :slidesPerView="3" :spaceBetween="80" :loop="true" :navigation="true" :modules="modules"
            :centeredSlides="true" :autoplay="{ delay: 2500, disableOnInteraction: false, }" :breakpoints="{
                '0': {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                '640': {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                '768': {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
                '1024': {
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
            }" class="mySwiper">
            <swiper-slide v-for="slider in sliders2" class="swiperSlide">
                <div class="div_Slider2_img">
                    <img :src="slider.imageURL" alt="" />
                    <div class="imageDetails2">
                        <!-- <div class="p_time2">
                            {{ most.article_from }} . {{ most.article_time_read }}
                        </div> -->
                        <p class="writer2"> كتب بواسطة : أحمد السيد</p>

                    </div>
                    <h5 class="img2_title">{{ slider.imageTitle }}</h5>
                </div>
            </swiper-slide>
        </swiper>


    </div>

    <hr style="margin-top: 45px" />
    <div class="form">
        <h1>اشترك ليصلك جميع المقالات</h1>
        <p>ابقي علي اطلاع مع مقالتنا فور نزولها مع خدمة الرسائل البريدية هذه الخدمة مجانية تماماً </p>
        <input type="E-mail" name="" placeholder="البريد الإلكتروني" value="" />
        <button type="button">أشترك</button>
    </div>
</template>

<script >


import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';



export default {
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {

            sliders1: [
                { imageTitle: "فلسفة", imageURL: require("../assets/Rectangle6.png") },
                { imageTitle: "فنون", imageURL: require("../assets/Rectangle11.png") },
                { imageTitle: "شعر", imageURL: require("../assets/Rectangle8.png") },
                { imageTitle: "أدب", imageURL: require("../assets/Rectangle9.png") },
                { imageTitle: "تاريخ", imageURL: require("../assets/Rectangle10.png") }
            ],

            sliders2: [
                { imageTitle: "جولة في عالم الأدب العربي", imageURL: require("../assets/Rectangle15.png") },
                { imageTitle: "كتب تعريفك بتراث وتقاليد الشعوب", imageURL: require("../assets/Rectangle14.png") },
                { imageTitle: "اليوم العالمي للغة العربية", imageURL: require("../assets/Rectangle13.png") },

            ]
        };
    },
    setup() {
        return {
            modules: [Pagination, Navigation],
        };
    }
}

</script>

<style scoped >
* {
    font-family: "Cairo";
}

* {
    text-align: center;
}

img {
    width: 100%;
}

p,
h1 {
    color: black;
    text-align: center;
}

h1 {
    font-size: 50px;
}

.container1 {
    margin: 48px;
}

.col-8 {
    border-right: 1px solid black;
}

.div_Rectangle2 {
    width: 100%;
}

.imageDetails,
.imageDetails2 {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    padding: 0px 10px;
}

.div {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

.img1_title,
.img2_title {
    display: flex;
    justify-content: flex-end;
    margin: 0;
    padding: 0px 10px;
}

.slider_h1 {
    position: absolute;
    color: white;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
}

.swiperSlide {
    border: 1px solid #00000047;
    padding-bottom: 12px;


}

.slider_title,
span {
    font-size: 50px;
    margin: 10px;
    background: linear-gradient(to left, #C957FF, #5367FF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.Article_title {
    position: relative;
    /* text-align: center; */
    width: 500px;
    /* right: 0; */
    /* background-color: aqua; */
    /* height: auto; */
    /* top: 100px; */
}

.Article_title::after {
    /* content: ""; */
    position: absolute;
    bottom: 0px;
    right: 330px;
    width: 5px;
    height: 80px;
    background-color: var(--main-color);
    border-radius: 30px;
    z-index: -1;
    transform: rotate(30deg);
}

.Article_title::before {
    /* content: ""; */
    position: absolute;
    bottom: 20px;
    right: 350px;
    width: 5px;
    height: 60px;
    background-color: var(--main-color);
    border-radius: 30px;
    z-index: -1;
    transform: rotate(30deg);
}

.lastestArticle {
    margin: 3rem;
}

.lastestArticle_titles {
    /* margin: 5px; */
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    align-items: center;
}

.to_article_page,
.to_article_page2 {
    font-size: 30px;
    text-decoration: none;
}

.article_description {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
}

.article_writer,
.article_title,
.to_article_page2,
.article_time,
.part_of_article {
    text-align: end;
}

.siderHead {
    display: flex;
    padding: 20px;
    margin: 20px;
    flex-direction: row-reverse;
    justify-content: space-between;
}

.article_title {
    font-size: 25px;
    font-weight: 1000;
}

.part_of_article {
    font-size: 20px;
}

.article_writer {
    position: relative;
}

.article_writer::before {
    position: absolute;
    display: none;
    content: "";
    width: 20px;
    height: 3px;
    margin: 0px 10px;
    background-color: rgb(227, 227, 227);
    top: 50%;
    right: -30px;
}

.article_img {
    width: 90% !important;
    height: 40vh !important;
}

.p_article_from {
    text-align: end;
}

/* .line {
    position: absolute;
    top: -5px;
    width: 40px;
    display: inline-flex;
    color: #000;
    border: 1px solid #000;
} */

.form {
    margin: 60px 0;
}

.form h1 {
    color: rgb(56, 56, 56);
    font-size: 50px;
}

.form p {
    color: rgb(96, 96, 96);
    font-size: 20px;
    font-weight: 100;
    margin: 10px;
    padding: 10px;
}

.form input {
    width: 300px;
    height: 35px;
}

.form input::placeholder {
    text-align: end;
    margin-right: 15px;
}

.form button {
    width: 100px;
    height: 35px;
    border: none;
    background-color: rgb(81, 101, 253);
    color: rgb(242, 242, 242);
    margin: 10px 0;
}





/* .p_article_time_to_read,
.p_article_time_to_read {
    display: inline;
} */

@media (max-width: 781px) {
    .siderHead {
        padding: 0 25px;
        margin: 0;
        align-items: center;
    }

    .lastestArticle {
        margin-top: 25px;
    }

    .Article_title {
        margin: 0px !important;
    }

    .Article_title span {
        margin: 0 !important;
    }

    .div .to_article_page2 {
        font-size: 17px;
    }

    .div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .article_description {
        gap: 0 !important;
    }

    .article_description .part_of_article {
        font-size: 15px;
    }

    .article_description p,
    .article_description h3 {
        margin: 0 !important;
        padding: 0 !important;
    }

    .article_img {
        width: 100% !important;
        height: 25vh !important;
    }

    .Article_title {
        text-align: end;
    }

    .mainpage {
        margin: 85px 0 0;
    }

    .div_Rectangle3 {
        margin: 0 0 10px;
    }

    .imageDetails2 {
        font-size: 10px;
    }

    .imageDetails2 p {
        margin: 0;
    }

    .img1_title {
        font-size: 25px;
        margin-bottom: 15px;
    }

    .Div {
        border-right: none !important;
    }
}

@media only screen and (max-width: 700px) {
    .div_Rectangle3 {
        width: 50%;
    }

    .container1 {
        margin: 0;
    }

    .main_page {
        margin-top: 80px;
    }

    .container1 .row {
        display: flex;
        flex-direction: column;
        margin: 5px;
        /* background-color: aqua;  */
    }

    .img1_title  {
        font-size: 50px;
    }

    .col-8 {
        border: none;
        width: 100%;
    }

    .col-4 {
        width: 100%;
        /* margin: 5px; */

        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .img2_title  {
        font-size: smaller;
        font-weight: 600;
    }

    /* .p_time2 {
        display: none;
    } */

    .div_Slider2_img {
        width: 100%;
        height: 100%;
        margin: 0px;
    }

    .part_of_article {
        font-size: 10px;
        /* font-weight:bold; */
    }

    .Article_title{
        width: 200px;
    }

    .Article_title,
    .Article_title span {
        font-size: 30px;
        margin-left: 40px;
    }

    .Article_title::after {
        /* content: ""; */
        position: absolute;
        bottom: 0px;
        right: 100px;
        width: 5px;
        height: 30px;
        background-color: var(--main-color);
        border-radius: 30px;
        z-index: -1;
        transform: rotate(30deg);
    }

    .Article_title::before {
        /* content: ""; */
        position: absolute;
        bottom: 0px;
        right: 120px;
        width: 5px;
        height: 20px;
        background-color: var(--main-color);
        border-radius: 30px;
        z-index: -1;
        transform: rotate(30deg);
    }

    .to_article_page,
    .to_article_page2 {
        font-size: 10px;
        font-weight: 20;
        display: inline;
        margin: 0;
        padding: 0;
    }

    .lastestArticle {
        padding-bottom: 10px;
        margin: 0;
    }

    .lastestArticle_titles {
        display: flex;
        justify-content: space-between;
        flex-direction: row-reverse;
        align-items: center;
        padding: 0 25px;
    }

    .form h1 {
        color: rgb(56, 56, 56);
        font-size: 30px;
    }

    .form input {
        width: auto;
        height: 35px;
    }
}

@media (max-width: 425px) {
    .lastestArticle .row {
        flex-direction: column-reverse;
        padding: 0 35px;
        margin: 0 0 25px;
    }

    .lastestArticle .row .col_img {
        width: 100%;
    }

    .div {
        margin: 8px 0;
    }

    .article_description {
        width: 100%;
    }

    .img1_title {
        font-size: 35px;
        margin-bottom: 25px;
    }
}

.swiper-button-prev:after,
.swiper-button-prev::before,
.swiper-button-next::after,
.swiper-button-next::before {
    content: " " !important;
}

.swiper-button-next,
.swiper-rtl .swiper-button-prev {
    color: white !important;
}

.swiper-button-prev,
.swiper-rtl .swiper-button-next {
    color: white !important;
}
</style>

