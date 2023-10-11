<template>
    <div class="container-fluid" style="background-image: linear-gradient(to bottom, #FECE2F15, #ffffff);">
        <div class="container  ">
            <div class="row1 pt-5">
                <h1 class="full_article_title">فوائد القراءة اليومية</h1>
                <p>
                    كتب بواسطة : أحمد السيد
                </p>
            </div>
            <div class="row">
                <div class="col">
                    <img src="../assets/Rectangle2.png" alt="" />
                </div>
            </div>
            <div class="row">
                <p class="full_article">
                    القراءة هي نافذتنا إلى العالم، إنها رحلة سحرية تأخذنا في استكشاف أفكار الآخرين وتعلم ثقافات جديدة. في
                    العالم العربي، يتمتع الكتاب والأدب بمكانة خاصة، حيث يتميزون بإبداعهم وقدرتهم على صياغة الكلمات بأناقة
                    وجمال. ومن خلال هذا المقال، سنستكشف سحر القراءة في اكتشاف العالم العربي وأهميتها في بناء المعرفة وتعزيز
                    الثقافة.
                </p>
                <div class="full_article" v-for="subarticle in article">
                    <h3>{{ subarticle.articleTitle }}</h3>
                    {{ subarticle.articleText }}
                </div>
            </div>
        </div>
    </div>
    <br />
    <div class="container2">
        <div>
            <div class="row">
                <div class="col">
                    <svg class="like" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_73_998)">
                            <path d="M6.75 11.25H2.25V23.25H6.75V11.25Z" stroke="#383838" stroke-width="2"
                                stroke-miterlimit="10" stroke-linejoin="round" />
                            <path
                                d="M6.75 11.25L10.5 7.5L12 2.25C13.6568 2.25 15 3.59325 15 5.25V11.25H18.75C20.4068 11.25 21.75 12.5932 21.75 14.25L20.4592 21.9968C20.3385 22.7198 19.7122 23.25 18.9795 23.25H6.75V11.25Z"
                                stroke="#383838" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_73_998">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <svg class="dislike" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_73_1002)">
                            <path d="M17.25 12.75H21.75V0.75H17.25V12.75Z" stroke="#383838" stroke-width="2"
                                stroke-miterlimit="10" stroke-linejoin="round" />
                            <path
                                d="M17.25 12.75L13.5 16.5L12 21.75C10.3432 21.75 9 20.4068 9 18.75V12.75H5.25C3.59325 12.75 2.25 11.4068 2.25 9.75L3.54075 2.00325C3.6615 1.28025 4.28775 0.75 5.0205 0.75H17.25V12.75Z"
                                stroke="#383838" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_73_1002">
                                <rect width="24" height="24" fill="white" transform="matrix(-1 0 0 -1 24 24)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p>: هل اعجبك المقال</p>
                </div>
                <br />
                <div class="col share">
                    <p>: شارك المقال</p>
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M17.9341 9.20325H14.6977V7.08066C14.6977 6.28352 15.2261 6.09768 15.5982 6.09768C15.9694 6.09768 17.8821 6.09768 17.8821 6.09768V2.59333L14.7367 2.58105C11.245 2.58105 10.4504 5.19471 10.4504 6.8673V9.20325H8.43115V12.8143H10.4504C10.4504 17.4485 10.4504 23.0323 10.4504 23.0323H14.6977C14.6977 23.0323 14.6977 17.3935 14.6977 12.8143H17.5637L17.9341 9.20325Z"
                            fill="#383838" />
                    </svg>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M22.3678 6.37727C21.6012 6.71805 20.7761 6.94792 19.9104 7.05079C20.7943 6.52162 21.472 5.68342 21.7917 4.68351C20.9649 5.17416 20.0497 5.53018 19.0747 5.72237C18.2945 4.89095 17.1824 4.37109 15.9518 4.37109C13.5892 4.37109 11.6736 6.28667 11.6736 8.64972C11.6736 8.98457 11.7113 9.31096 11.7845 9.62465C8.22851 9.44601 5.07553 7.74294 2.96521 5.15426C2.59692 5.78587 2.3861 6.52078 2.3861 7.30564C2.3861 8.78984 3.14132 10.0996 4.2894 10.8667C3.58836 10.8443 2.92838 10.6517 2.35138 10.3312C2.35096 10.349 2.35096 10.3672 2.35096 10.3854C2.35096 12.458 3.82585 14.1869 5.78334 14.5806C5.42435 14.678 5.04632 14.7305 4.65601 14.7305C4.37999 14.7305 4.11202 14.7038 3.85083 14.6534C4.39566 16.3531 5.97553 17.5905 7.84751 17.6248C6.3832 18.7724 4.53874 19.4566 2.53384 19.4566C2.18882 19.4566 1.84804 19.4362 1.51318 19.3964C3.40717 20.611 5.65592 21.3188 8.07188 21.3188C15.9421 21.3188 20.2452 14.7995 20.2452 9.14544C20.2452 8.96002 20.2414 8.77502 20.2334 8.5913C21.069 7.98932 21.7946 7.23536 22.3678 6.37727Z"
                            fill="#383838" />
                    </svg>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2.40591 8.71138H6.62517V21.4085H2.40591V8.71138ZM4.54378 2.59082C3.0997 2.59082 2.15625 3.53887 2.15625 4.78321C2.15625 6.00196 3.07209 6.97757 4.48856 6.97757H4.51547C5.98716 6.97757 6.90366 6.00191 6.90366 4.78321C6.87605 3.53887 5.9872 2.59082 4.54378 2.59082ZM16.9846 8.41312C14.745 8.41312 13.7416 9.64499 13.1819 10.5089V8.71138H8.96137C9.01725 9.90252 8.96137 21.4085 8.96137 21.4085H13.1819V14.3175C13.1819 13.9378 13.2095 13.5594 13.3206 13.2873C13.6261 12.5292 14.3205 11.7441 15.4853 11.7441C17.0136 11.7441 17.6239 12.9089 17.6239 14.6151V21.4085H21.8438V14.1277C21.8438 10.2277 19.7624 8.41312 16.9846 8.41312Z"
                            fill="#383838" />
                    </svg>

                    <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.1476 22.3507C10.0016 22.3507 7.85549 22.3507 5.70941 22.3507C4.49521 22.3507 3.70898 21.5633 3.70898 20.3503C3.70898 16.6681 3.70898 12.9863 3.70898 9.30492C3.70898 8.50071 4.04642 7.89895 4.75953 7.52552C4.99631 7.40083 5.26014 7.33632 5.52775 7.33768C6.43264 7.33768 7.33696 7.33768 8.24185 7.33206C8.35939 7.33206 8.39538 7.36243 8.39369 7.48278C8.38751 8.00299 8.3847 8.5232 8.39369 9.04285C8.39369 9.19301 8.33746 9.21157 8.21261 9.20875C7.40614 9.20426 6.59967 9.20875 5.79433 9.20313C5.63573 9.20313 5.58005 9.23406 5.58062 9.40784C5.58549 13.0334 5.58549 16.6591 5.58062 20.285C5.58062 20.4279 5.61099 20.4751 5.76339 20.4751C10.0132 20.4706 14.2632 20.4706 18.5133 20.4751C18.6584 20.4751 18.6989 20.4408 18.6984 20.2923C18.6946 16.6593 18.6946 13.0266 18.6984 9.39434C18.6984 9.22563 18.6421 9.20201 18.4959 9.20313C17.6894 9.21044 16.883 9.20313 16.0776 9.21044C15.9185 9.21044 15.8769 9.16995 15.8802 9.01136C15.8911 8.51308 15.8911 8.01443 15.8802 7.5154C15.8802 7.36299 15.9258 7.33093 16.0686 7.33206C16.9246 7.33825 17.78 7.33206 18.6359 7.336C19.7793 7.34275 20.5728 8.1419 20.5745 9.29255C20.5775 11.857 20.5775 14.4217 20.5745 16.9866C20.5745 18.1035 20.5745 19.2206 20.5745 20.3379C20.5745 21.5684 19.79 22.3507 18.5628 22.3507C16.4231 22.3514 14.2847 22.3514 12.1476 22.3507Z"
                            fill="#383838" />
                        <path
                            d="M13.0796 3.96649V4.2595C13.0796 7.12544 13.0796 9.99119 13.0796 12.8568C13.0796 13.3888 12.8136 13.769 12.3738 13.8747C11.7552 14.0226 11.2046 13.5811 11.2029 12.9293C11.1984 11.7483 11.2029 10.5673 11.2029 9.38906C11.2029 7.6614 11.2029 5.93373 11.2029 4.20607V3.96143L10.1845 4.99229C9.9595 5.22006 9.69237 5.33535 9.36899 5.28811C9.1931 5.26936 9.02663 5.19919 8.8904 5.08636C8.75416 4.97354 8.6542 4.82306 8.60302 4.65373C8.54157 4.4911 8.52982 4.31388 8.56927 4.14456C8.60872 3.97524 8.69759 3.82146 8.8246 3.70273C9.70867 2.81078 10.5963 1.92202 11.4875 1.03644C11.5713 0.948087 11.6722 0.877664 11.784 0.829436C11.8958 0.781207 12.0163 0.756178 12.138 0.755862C12.2598 0.755547 12.3804 0.779953 12.4925 0.827601C12.6045 0.875249 12.7058 0.945148 12.79 1.03307C13.6898 1.92052 14.582 2.81453 15.4664 3.7151C15.552 3.80149 15.6196 3.90403 15.6652 4.01676C15.7109 4.1295 15.7336 4.25017 15.7322 4.37178C15.7308 4.49339 15.7052 4.6135 15.657 4.72514C15.6088 4.83678 15.5388 4.93772 15.4512 5.0221C15.3647 5.10948 15.2618 5.17885 15.1483 5.22619C15.0348 5.27353 14.9131 5.29791 14.7902 5.29791C14.6672 5.29791 14.5455 5.27353 14.432 5.22619C14.3185 5.17885 14.2156 5.10948 14.1291 5.0221C13.7871 4.69029 13.4576 4.34779 13.0796 3.96649Z"
                            fill="#383838" />
                    </svg>
                </div>
            </div>
            <div class="row let_comment">
                <div class="col">
                    <p>: اترك تعليق</p>
                    <form action="">
                        <input type="text" name="الاسم" placeholder="الاسم" id="" />
                        <input type="email" name="البريد الالكترونى" placeholder="البرىد الالكتروني" id="" />
                        <textarea class="text2" name="التعليق" placeholder="التعليق" id="" cols="30" rows="10"></textarea>
                        <button class="send_comment">ارسال</button>
                    </form>
                </div>
            </div>
        </div>

        <div class="container comment">
            <div class="row" v-for="comment in comments">
                <div class="client">
                    {{ comment.username }}
                    <img :src="comment.imageURL" class="rounded-circle" />
                </div>
                <div class="client_comment py-3">
                    <p class="fs-6">{{ comment.commentcontent }}</p>
                </div>
            </div>
        </div>
    </div>
    <br>
    <div class="container3 m-5">
        <div class="row">
            <p>اقرا المزيد</p>
            <h1>مواضيع زات صله</h1>
        </div>
        <div class="row relation_article_row">
            <div class="col-4 position-relative" v-for="part in parts">
                <div class="div_img1">
                    <div>
                        <img :src="part.imageURL" class="img1" />
                        <div class="img_details">
                            <!-- <div class="p_time">
                                {{ article_have_relation.from_time }} .
                                {{ article_have_relation.time_to_raed }}
                            </div> -->
                            <p class="writer">كتب بواسطة : أحمد السيد</p>
                        </div>
                        <h1 class="img1_title">{{ part.imageTitle }}</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    data() {
        return {
            article: [
                { articleTitle: "القراءة نافذة إلى الثقافة  ", articleText: " القراءة تعد أداة قوية لاكتشاف الثقافة العربية والتعرف على تراثها العريق. من خلال قراءة الأدب العربي الكلاسيكي والمعاصر، نلمس جمال اللغة العربية وقوة التعبير فيها. نتعرف على الروائع الأدبية والشعرية التي ترسخ الهوية العربية وتعبر عن تجارب ومشاعر الناس في المنطقة. إنها فرصة للغوص في تاريخنا وتعزيز الفهم للعادات والتقاليد والتحولات الاجتماعية التي شكلتنا. " },
                { articleTitle: " توسيع الأفق وتحدي العقل ", articleText: " عندما نمارس القراءة، نمارس أيضًا تمرينًا عقليًا يوسع أفقنا ويحفز تفكيرنا. إن قراءة الكتب والمقالات تعزز مهارات التركيز والتفكير النقدي. نتعلم التحليل والتفكير العميق، ونتقن قراءة النصوص بانتباه وتركيز على التفاصيل. كما تعزز القراءة القدرات اللغوية وتثري مفرداتنا وتوسع قدرتنا على التعبير بشكل أفضل." },
                { articleTitle: "وسيلة للتأمل والاسترخاء ", articleText: "في عالم مليء بالضغوط والتوترات، تُعد القراءة بوابة للهروب والاسترخاء. عندما نغوص في صفحات الكتب، نجد أنفسنا في عوالم مختلفة تعيد ترتيب أفكارنا وتهدئ أعصابنا. إن الانغماس في قصة مشوقة أو قراءة كتاب يتناول المواضيع التي نهتم بها يمنحنا لحظات هادئة للتأمل والتشبث باللحظة الحالية." },
                { articleTitle: " القراءة وتواصل الأجيال ", articleText: " تُعتبر القراءة أيضًا وسيلة لتواصل الأجيال ونقل المعرفة والقيم من جيل إلى جيل. عندما نشارك الكتب والقصص مع أطفالنا وأحفادنا، نبني جسورًا من التواصل والفهم المتبادل. تصبح القراءة لحظات قيّمة تجمع الأسرة وتحفز  النقاش والتفاعل البناء بين الأجيال المختلفة." },
                { articleTitle: " القراءة وتنمية الذات ", articleText: " إن القراءة تُعَدُّ مصدرًا للتعلم المستمر وتنمية الذات. من خلال قراءة الكتب التعليمية والتطوير الشخصي، نكتسب المهارات والمعرفة الجديدة التي تساعدنا على النمو والتطور. كما تُعَدُّ القراءة للتأمل الذاتي والبحث عن الإلهام والتوجه نحو التحسين المستمر." },
                { articleTitle: " القراءة والابتكار والإبداع ", articleText: "عندما نستكشف الكتب والمواد الإبداعية، يتم تحفيز قدراتنا على الابتكار والإبداع. قد تُلهمنا قصة أو فكرة لتجربة أفكار جديدة وتنمية مشاريع مبتكرة. إن القراءة تفتح أمامنا أفقًا للتفكير المستقبلي وتعزز قدرتنا على الابتكار القضايا والمشاكل من زوايا جديدة ومبتكرة." },
                { articleTitle: " تعزيز التفاعل الاجتماعي ", articleText: "تُعتبر القراءة أيضًا فرصة لتعزيز التفاعل الاجتماعي والانخراط في مناقشات وحوارات مع الآخرين. عندما نقرأ كتابًا مشتركًا أو ننضم إلى نادي قراءة، يتاح لنا فرصة لتبادل الأفكار والانطباعات وتوسيع آفاقنا. يمكننا أن نتعلم من خلال آراء الآخرين ونتبادل الأفكار والتجارب، مما يغني تجربتنا القرائية ويعزز التواصل الاجتماعي." },
                { articleTitle: " القراءة وتحقيق الأهداف ", articleText: " تمتلك القراءة القدرة على توجيهنا نحو تحقيق أهدافنا. عندما نقرأ عن قصص النجاح والإلهام، نجد التحفيز والدفع للتحرك نحو تحقيق أحلامنا. كتب التطوير الذاتي والملهمة تعطينا أدوات واستراتيجيات لتحقيق النجاح والتطور الشخصي." },
                { articleTitle: " :الختام", articleText: "تبقى القراءة رحلة سحرية ومثيرة في اكتشاف العالم العربي والثقافات الأخرى. إنها أداة قوية لتوسيع آفاقناوتنمية ذواتنا. تُعَدُّ القراءة مصدرًا للمعرفة والترفيه والإلهام. لذا، لنستمتع بسحر القراءة ونستفيد منفوائدها العديدة في حياتنا اليومية. ليكن الكتاب رفيقًا لنا في رحلتنا، وليساعدنا في بناء عالمنا الداخليوتحقيق طموحاتن" }
            ],

            comments: [
                { username: "احمد محمد", commentcontent: "مقال رائع!", imageURL: require("../assets/Ellipse144.png") },
                { username: "نيهال احمد", commentcontent: "!القراءة تنقلنا إلى عوالم بديلة وتزرع فينا بذور الخيال والتفكير النقدي. أنا ممتنة لهذا الموقع الذي يلهمني دائمًا للغوص في صفحات الكتب واكتشاف عوالم جديدة. شكرًا لكم على هذا الإثراء الثقافي الرائع", imageURL: require("../assets/Ellipse145.png") },
            ],

            parts: [
                { imageTitle: "جولة في عالم الأدب العربي", imageURL: require("../assets/Rectangle15.png") },
                { imageTitle: "كتب تعريفك بتراث وتقاليد الشعوب", imageURL: require("../assets/Rectangle14.png") },
                { imageTitle: "اليوم العالمي للغة العربية", imageURL: require("../assets/Rectangle13.png") }

            ]

        };
    }
}

</script>

<style scoped>
* {
    font-family: "Cairo", sans-serif;
}

.container {
    padding-top: 30px;
}

p {
    display: inline;
}

.row {
    margin: 10px;
}

.row1 {
    text-align: right;
}

.row1 p {
    font-size: 20px;
    font-weight: 300;
}

.full_article_title {
    position: relative;
    font-size: 60px;
    font-weight: 400;
}

.full_article_title::before {
    content: "";
    position: absolute;
    width: 400px;
    height: 5px;
    background-color: #ffca27;
    bottom: -10px;
    right: 0;
}

.full_article {
    text-align: right;
}

img {
    width: 100%;
    margin: 40px 0;
}

.row p {
    font-size: 20px;
    font-weight: 900;
}

.container2 .row {
    display: flex;
    margin: 10px 100px;
    text-align: right;
    flex-direction: row-reverse;
}

svg {
    display: inline;
    margin: 0 20px;
}

.share {
    display: flex;
    flex-direction: row-reverse;
}

.share p {
    font-size: 20px;
}

.let_comment {
    display: flex;
    margin: 10px 100px;
    text-align: right;
}

.let_comment .col {
    display: flex;
    flex-direction: column;
}

form {
    display: flex;
    flex-direction: column;
    align-items: end;
}

input {
    margin: 10px 0px;
    background-color: rgb(246, 246, 246);
    border: none;
    width: 40%;
    height: 50px;
}

.text2 {
    height: 100px;
    position: relative;
    width: 40%;
    border: none;
    background-color: rgb(246, 246, 246);
}

.text2::placeholder {
    position: absolute;
    top: 0;
    right: 0;
}

input::placeholder {
    text-align: end;
}

.send_comment {
    border: none;
    color: white;
    background-color: blue;
    width: 130px;
    height: 50px;
    border-radius: 5px;
    margin: 20px 0 0 0;
}

.comment {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: end;
}

.comment .row {
    width: 60%;
    background-color: rgb(246, 246, 246);
    text-align: start;
}

.client {
    text-align: end;
    font-size: 30px;

}

.client img {
    display: inline;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    margin: 10px;
}

.client_comment {
    text-align: end;
    text-wrap: balance;
    word-wrap: break-word;
}


.container3 .row {
    text-align: center;
}

.relation_article_row {
    display: flex;
    flex-direction: row;
}

.div_img1 {
    width: 100%;
}

.img_details {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
}

.img1_title {
    display: flex;
    justify-content: end;
}

.img1 {
    margin: 0;
    /* width: 100%; */
    height: 300px;
}

textarea {
    direction: rtl;
}

@media only screen and (max-width: 700px) {
    .full_article_title {
        text-align: center;
        font-size: 70px;
        margin-bottom: 30px;
    }

    .full_article_title::before {
        right: 35%;
        text-align: center;
        width: 150px;
    }

    .row1 {
        text-align: center;
    }

    .row1 p {
        width: 100%;
    }

    .full_article {
        text-align: right;
    }

    .share {
        margin-top: 20px;
        width: 100%;
    }

    svg {
        margin: 0 10px;
    }

    .container2 {
        margin: 0;
    }

    .container2 .row {
        flex-direction: column;
        margin: 10px 10px;
    }

    input {
        width: 100%;
    }

    .text2 {
        width: 100%;
    }

    .let_comment {
        margin: 0;
        /* width: 100%; */
    }

    .let_comment .col {
        margin: 0;
        width: 100%;
    }

    .comment {
        margin: 0 0 0 0px;
        width: 100%;
        text-align: center;
    }

    .comment .row {
        margin: 10px 0;
        width: 100%;
        text-align: center;
    }

    .container3 {
        display: none;
    }
}</style>