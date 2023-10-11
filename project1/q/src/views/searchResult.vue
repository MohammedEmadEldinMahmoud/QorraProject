<template>
    <div class="container">
        <div class="sidebar">
            <h1>الاقسام</h1>
            <p v-for="result in results" @click="filter(result)">
                {{ result }}
            </p>
        </div>
        <h1 class="h1_topic">نتائج البحث عن : {{ this.$route.params.result }}</h1>
        <div class="row" v-for="article in articles">
            <div class="col-9">
                <img :src="article.articleURL" alt="" />
                <div class="about_article">
                    <p class="writer">كتب بواسطة : أحمد السيد</p>
                    <h1 class="article_title1">{{ article.articleTitle }}</h1>
                    <p class="part_of_article">{{ article.articleContent }}</p>
                    <div class="time_and_topic">
                        <div class="topic" id="topic">{{ article.result }}</div>
                        <!-- <div class="time">{{ article.article_from }}.{{ article.article_time_read }}</div> -->
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>


<script>

export default {

    setup() {
        return {
            results: ["الكل", "ادب", "فلسفه", "لغه", "موسيقي", "فن"],
            select: true,
            result: "الكل",
        };
    },
    data() {
        return {
            searchresult: [],
            articles: [
                { articleURL: require("../assets/Rectangle2.png"), result: "أدب", articleTitle: "فوائد القراءة اليومية", articleContent: "لقراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية. إن القراءة اليومية لها تأثير كبير على حياتنا وتعزز الذكاء والتفكير الإبداعي. في هذا المقال، سنستكشف فوائد القراءة اليومية وكيف يمكن أن تؤثر بشكل إيجابي على حياتنا." },
                { articleURL: require("../assets/Rectangle3.png"), result: "فن", articleTitle: "فوائد القراءة اليومية", articleContent: "لقراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية. إن القراءة اليومية لها تأثير كبير على حياتنا وتعزز الذكاء والتفكير الإبداعي. في هذا المقال، سنستكشف فوائد القراءة اليومية وكيف يمكن أن تؤثر بشكل إيجابي على حياتنا." },
                { articleURL: require("../assets/Rectangle4.png"), result: "فلسفة", articleTitle: "فوائد القراءة اليومية", articleContent: "لقراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية. إن القراءة اليومية لها تأثير كبير على حياتنا وتعزز الذكاء والتفكير الإبداعي. في هذا المقال، سنستكشف فوائد القراءة اليومية وكيف يمكن أن تؤثر بشكل إيجابي على حياتنا." },
                { articleURL: require("../assets/Rectangle11.png"), result: "أدب", articleTitle: "فوائد القراءة اليومية", articleContent: "لقراءة هي نشاط ممتع ومفيد يعزز التعلم والتنمية الشخصية. إن القراءة اليومية لها تأثير كبير على حياتنا وتعزز الذكاء والتفكير الإبداعي. في هذا المقال، سنستكشف فوائد القراءة اليومية وكيف يمكن أن تؤثر بشكل إيجابي على حياتنا." },
            ],
        };
    },
    methods: {
        filter(result) {
            if (result === "الكل") {
                this.searchresult = this.articles;
            } else {
                this.searchresult = this.articles.filter((article) => article.result === result);
            }
            this.select = result === "الكل";
            this.result = result;
        },
    },

};
</script>


<style scoped>
* {
    font-family: "Cairo", sans-serif;
}

.swiper {
    display: none;
}

.h1_topic {
    text-align: center;
    margin-left: 300px;
}

h2 {
    text-align: end;
}

.row {
    position: relative;
    margin: 20px;
}

img {
    width: 50%;
    height: 350px;
}

.col-9 {
    display: flex;
    flex-direction: row-reverse;
}

.about_article {
    display: flex;
    flex-direction: column;
    width: 50%;
}

.writer {
    text-align: end;
    position: relative;
    margin: 20px 50px 20px 0;
    font-size: 25px;
}

.writer::after {
    position: absolute;
    content: "";
    width: 20px;
    height: 3px;
    margin: 0px 10px;
    background-color: rgb(227, 227, 227);
    top: 50%;
}

.article_title1 {
    margin: 10px 20px 10px 0;
    text-align: end;
    background-color: transparent;
}

.part_of_article {
    text-align: end;
    margin: 10px 20px 10px 0;
    font-size: 20px;
    font-weight: 500;
}

.time_and_topic {
    display: flex;
    justify-content: space-between;
    align-items: end;
}

.topic,
.time {
    display: inline;
    margin: 10px;
}

.sidebar {
    text-align: end;
    margin: 30px;
    padding: 0 30px;
    position: absolute;
    border-left: 2px solid #333;
    width: 20%;
    top: 226px;
    right: 0;
}

.sidebar h1 {
    position: relative;
    /* margin-left: ; */
}

.sidebar h1::after {
    content: "";
    position: absolute;
    width: 84px;
    height: 2px;
    background-color: var(--main-color);
    bottom: 0px;
    right: -22px;
}

.sidebar p {
    text-align: end;
    font-size: 30px;
}



@media only screen and (max-width: 700px) {
    .conatiner {
        position: relative;
        top: 70px;
    }

    .h1_topic {
        text-align: center;
        margin: 40px 0px 20px 0;
    }

    .sidebar {
        display: none;
        justify-content: center;
        position: absolute;
        top: -100px;
        max-width: 100%;
    }

    .sidebar h1 {
        display: none;
    }

    .sidebar p {
        margin: 0 20px;
    }

    .row {
        margin: 20px 0;
    }

    .col-9 {
        flex-direction: column;
        width: 100%;
    }

    .col-9 img {
        width: 100%;
    }

    .about_article {
        width: 100%;
    }

    .writer {
        font-size: 20px;
    }

    .topic {
        margin: 0;
    }

    .part_of_article {
        text-align: end;
        margin: 10px 20px 10px 0;
        font-size: 15px;
        font-weight: 500;
    }

    .time_and_topic {
        display: flex;
        justify-content: space-between;
        align-items: end;
    }

    .time {
        margin: 0;
    }


}
</style>