<template>
    <div class="container">
        <div class="row">
            <div class="col-6">
                <h1 class="col_h1">تواصل معنا</h1>
                <p>
                    نحن نتطلع لسماع أخباركم والاستماع إلى ما لديكم لتقولوه لا
                    تترددوا في التواصل معنا
                </p>
                <div class="img_h3">
                    <img src="../assets/news2.png" alt="" />
                    <!-- <div class="h3">جريدة قراء</div> -->
                </div>
            </div>
            <div class="col">
                <form action="">
                    <label for=""> الاسم </label>
                    <input type="text" name="name" id="" />
                    <label for=""> البريد الالكتروني</label>
                    <input type="email" name="email" id="" />
                    <label for=""> عنوان الرسالة </label>
                    <input type="text" name="masage_title" id=" " />
                    <label for="">الرسالة</label>
                    <input type="text" class="message" name="message" id="" />
                    <button>ارسال</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>

</script>


<style scoped>
* {
    font-family: 'Cairo', sans-serif;
}

.container {
    margin-top: 100px;
}

.img_h3 {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.img_h3 .h3 {
    color: var(--main-color);
    font-weight: 900;
    font-size: 40px;
}

img {
    /* width: 200px; */
    height: 200px;
}

.row {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    text-align: center;
}

.col-6 .col_h1 {
    padding: 10px;
    font-size: 60px;
    font-weight: 900;
}

.col-6 p {
    font-size: 30px;
    font-weight: 500;
}

form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: end;
    padding: 10px 10px;
}

input {
    width: 100%;
    margin: 10px 0 10px 10px;
    padding: 10px;
    background-color: rgb(246, 246, 246);
    border: none;
}

label {
    color: black;
    font-weight: bold;
}

.message {
    height: 100px;
}

button {
    border: none;
    background-color: rgb(81, 101, 253);
    color: white;
    width: 150px;
    height: 50px;
    margin: 10px;
    border-radius: 4px;
}

@media only screen and (max-width: 700px) {
    .row {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }

    .col-6 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        width: 100%;
    }

    .col-6 .col_h1 {
        font-size: 60px;
        font-weight: 900;
    }

   
}</style>
