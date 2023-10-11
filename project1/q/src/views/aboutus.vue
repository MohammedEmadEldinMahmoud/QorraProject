<template>
    <div class="container1">
        <div class="row row_about">
            <div class="col-6 لمحة">لمحة عن <span>قراء</span></div>
            <div class="col-6 about">
                <!-- <div class="about_us_img"> -->
                <img src="../assets/news.png" alt="" />
                <!-- </div> -->
                <p>
                    تقدم قُرَّاءْ تدريبات أكاديمية وتخصصية ومهارية لكل لجنة خاصة بوظيفتها. مثال: لجنة الإعلام يأخذ الشخص
                    المُنضم حديثاً للجنة تدريبات في المجال الإعلامي، ولجنة الإعلام لها أقسام وهى: - التصميم - التسويق -
                    التصوير - فحسب اختياره للقسم الذي يريد التدريب فيه يأخذ تدريبات أكاديمية، وعملية داخله، ليكون قادراً على
                    تأدية المهام الخاصة بهذا القسم، وهكذا في باقي اللجان.
                </p>
            </div>
        </div>
    </div>
    <div class="container2">
        <div class="row"><img src="../assets/Rectangle647.png" alt="" /></div>
        <div class="row row_goals">
            <div class="col-6 goals">
                <h2>اهدافنا</h2>
                <p>تحقيق التنمية الثقافية واالجتماعية كجزء من التنمية المستدامة.
                    ممارسة اللغة العربية الفصيحة من خالل ورش اللغة.
                    لقاءات مع نماذج مشرفة وإبراز دورهم في المجتمع.</p>
            </div>
            <div class="col-6 goals">
                <h2>رؤيتنا</h2>
                <p>نطمح إلى تشجيع ثقافة القراءة وإثراء المعرفة في المجتمع العربي. نسعى لأن نصبح المصدر الرئيسي والموجه لكل
                    محبي القراءة في العالم العربي، ونسهم في بناء جيل قارئ مثقف ومبدع.</p>
            </div>
        </div>
    </div>
    
    <div class="container3">
        <div class="row success " >شركاء <span>النجاح</span></div>
        <div class="row ">
            <div class="col-3"><img src="../assets/alexuni1.png" alt="" /> </div>
            <div class="col-3"><img src="../assets/mdarj.png" alt="" /></div>
            <div class="col-3"><img src="../assets/mezza.png" alt="" /></div>
            <div class="col-3"><img  src="../assets/arabisk.png" /></div>
        </div>
    </div>
    <div class="slider">
        <div class="siderhead">
            <div class="col">
                <h1 class="slider_title">فريق <span>العمل</span></h1>
            </div>
            <div class="col">
            </div>
        </div>
        <swiper :slidesPerView="5" :spaceBetween="30" :loop="true" :navigation="true" :modules="modules"
            :centeredSlides="true" :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
            }" :breakpoints="{
    '0': {
        slidesPerView: 1.5,
        spaceBetween: 10,
    },
    '640': {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    '768': {
        slidesPerView: 3,
        spaceBetween: 10,
    },
    '1024': {
        slidesPerView: 4,
        spaceBetween: 20,
    },
}" class="mySwiper">
            <swiper-slide v-for="slider in sliders">
                <div class="div_image">
                    <img :src="slider.imageURL" alt="">
                    <div class="imageDetails2">
                        <h3 class="writer2">{{ slider.imageAuthor }}</h3>
                    </div>
                    <p class="img2_title">{{ slider.imageTitle }}</p>
                </div>
            </swiper-slide>
        </swiper>

    </div>
</template>


<script>
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

            sliders: [
                { imageTitle: "رئيس التقييم بلجنة التقييم والتطوير لسنة 2023", imageAuthor: "م. يوسف التركي", imageURL: require("../assets/Rectangle649.png") },
                { imageTitle: "مستشار لجنة الإعلام لسنة 2023", imageAuthor: "أ. سيف الدين سامر", imageURL: require("../assets/Rectangle650.png") },
                { imageTitle: "منسق بلجنة الإعلام لسنة 2023", imageAuthor: "م. خالد حسن", imageURL: require("../assets/Rectangle651.png") },
                { imageTitle: "رئيس المبادرة لسنة 2023", imageAuthor: "م. محمد علاء", imageURL: require("../assets/Rectangle652.png") },
            ],


        };
    },
    setup() {
        return {
            modules: [Pagination, Navigation],
        };
    }
}
</script>


<style  scoped>
* {
    font-family: "Cairo", sans-serif;

    text-align: center;
}

.row {
    flex-direction: row-reverse;
}

.row_about {
    margin: 3rem;
}

.about {
    display: flex;
    flex-direction: column;
}

.about img {
    width: 200px;
    height: 200px;
    position: relative;
    /* margin-left: 130px; */
}

.about p {
    font-size: 20px;
}

.لمحة {
    position: relative;
    width: 300px;
    height: fit-content;
    font-weight: bolder;
    font-size: 80px;
    text-align: end;
}

/* .لمحة ::after {
    content: "";
    position: absolute;
    bottom: 20px;
    right: 250px;
    width: 5px;
    height: 80px;
    background-color: var(--main-color);
    border-radius: 30px;
    z-index: -1;
    transform: rotate(30deg);
}

.لمحة ::before {
    content: "";
    position: absolute;
    bottom: 20px;
    right: 230px;
    width: 5px;
    height: 60px;
    background-color: var(--main-color);
    border-radius: 30px;
    z-index: -1;
    transform: rotate(30deg);
} */

.لمحة span {
    text-align: center;
    display: block;
    background: linear-gradient(to left, #C957FF, #5367FF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.container2 {
    margin: 3rem;
}

.goals {
    /* width: ; */
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: end;
}

.goals h2 {
    text-align: end;
    border-bottom: 2px solid var(--main-color);
    right: 0;
}

.goals p {
    font-weight: 300;
    font-size: 20px;
    text-align: end;
}

.success{
    position: relative;
    width: 100%;
    /* height: fit-content; */
    font-weight: bolder;
    display: inline;
    font-size: 70px;
    text-align: center;
}
.slider_title {
    position: relative;
    width: 100%;
    /* height: fit-content; */
    font-weight: bolder;
    display: inline;
    font-size: 70px;
    text-align: center;
}

.success::after {
    content: "";
    position: absolute;
    bottom: 0px;
    right: 250px;
    width: 5px;
    height: 80px;
    background-color: var(--main-color);
    border-radius: 30px;
    z-index: -1;
    transform: rotate(30deg);
}.slider_title ::after {
    content: "";
    position: absolute;
    bottom: 0px;
    right: 250px;
    width: 5px;
    height: 80px;
    background-color: var(--main-color);
    border-radius: 30px;
    z-index: -1;
    transform: rotate(30deg);
}

.success ::before {
    content: "";
    position: absolute;
    bottom: 0px;
    right: 230px;
    width: 5px;
    height: 60px;
    background-color: var(--main-color);
    border-radius: 30px;
    z-index: -1;
    transform: rotate(30deg);
}.slider_title ::before {
    content: "";
    position: absolute;
    bottom: 0px;
    right: 230px;
    width: 5px;
    height: 60px;
    background-color: var(--main-color);
    border-radius: 30px;
    z-index: -1;
    transform: rotate(30deg);
}

.success span {
    text-align: end;
    display: inline;
    background: linear-gradient(to left, #C957FF, #5367FF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}.slider_title span {
    text-align: end;
    display: inline;
    background: linear-gradient(to left, #C957FF, #5367FF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}


.container3.row {
    background-color: rgb(250, 250, 250);
    margin: 3rem;
}

.container3.row.col-3 img {
    width: 150px;
    height: 150px;
    filter: grayscale(100%);
    aspect-ratio: 3/2;
    object-fit: contain;
    /* mix-blend-mode: color-burn; */
}

.container3.row.col-3 img:hover {
    width: 150px;
    height: 150px;
    filter: none;
}

/* .siderhead {
    display: flex;
    flex-direction: row-reverse;
    margin: 10px;
} */

.div_image img {
    width: 100%;
}

@media only screen and (max-width: 700px) {
    .container1 {
        margin-top: 100px;
    }

    .container1 .row {
        display: flex;
        justify-content: center;
    }

    .row_about {
        margin: 0;
    }

    .لمحة {
        text-align: center;
    }

    .row_goals {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
    }

    .container2 {
        margin: 5px;
    }

    .container3 .row {
        margin: 0;
    }

    .container2 .row {
        margin: 0;
    }

    .container2 .row img {
        border-radius: 30px;
    }

    .goals p {
        font-weight: 300;
        font-size: 20px;
    }

    .goals {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .goals h2 {
        text-align: center;
        border-bottom: 2px solid var(--main-color);
        right: 0;
    }

    .goals p {
        font-weight: 300;
        font-size: 20px;
    }

    .container3.row.col-3 img {
        width: 60px;
        height: 100px;
        filter: grayscale(100%);
    }

    .container3 .row .col-3 img:hover {
        width: 60px;
        height: 100px;
        filter: none;
    }

    .لمحة {
        position: relative;
        width: 500px;
        top: 10px;
        height: -moz-fit-content;
        height: fit-content;
        font-weight: bolder;
        font-size: 60px;
    }

    .لمحة ::after {
        content: "";
        position: absolute;
        bottom: 5px;
        right: 118px;
    }

    .لمحة ::before {
        content: "";
        position: absolute;
        bottom: 5px;
        right: 108px;
    }

    .about {
        width: 100%;
    }
}
</style>