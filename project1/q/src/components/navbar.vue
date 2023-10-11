<template>
    <div dir="ltr">
        <nav class="navbar navbar-expand-sm bg-white shadow-sm fixed-top">

            <div class="container-fluid">

                <a class="navbar-brand"><span><img src="../assets/newspaper-1.png" alt=""></span></a>

                <button class="navbar-toggler d-xl-none" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul dir="rtl" class="navbar-nav  me-auto   mb-2  mb-lg-0  ">

                        <li class="nav-item ms-5"><router-link to="/" class="nav-link">الرئيسية</router-link></li>
                        <li class="nav-item ms-5"><router-link to="/aboutus" class="nav-link"> من نحن</router-link></li>
                        <li class="nav-item ms-5"><router-link to="/contactus" class="nav-link">راسلنا</router-link></li>

                    </ul>

                    <div class="p-2">
                        <router-link to="/search">
                            <div dir="rtl" class="nav-item d-none d-md-inline " style="background-color: #EEEEEE;  ">
                                <div style="background-color: #EEEEEE;"><img src="../assets/search.png" alt="">
                                    <input  type="search"  @keyup="search" v-model="search_value" class="w-[200px] rounded-sm  outline-none " style="background-color: #EEEEEE; border: none;  border-radius: 3px; width:155px;
                                    height: 43px; " placeholder="بحث">
                                </div>

                            </div>
                        </router-link>
                    </div>

                    <div class="p-2">
                        <div dir="rtl" class="collapse navbar-collapse justify-content-right  align-right "
                            id="navbarSupportedContent">
                            <button class="button1">تطوع معنا</button>
                        </div>

                    </div>


                </div>



            </div>



        </nav>



    </div>



    <!-- <div dir="rtl">

        <nav class="navbar navbar-expand-lg  navbar-light bg-white shadow-sm ">
            <div class="container-fluid d-flex flex-row mb-3">


               
                <div class="p-2">
                    <div class="collapse navbar-collapse justify-content-right  align-right" id="main-nav">
                        <button class="button1">تطوع معنا</button>
                    </div>

                </div>
                <div class="p-2">
                    <router-link to="/search">
                        <div class="nav-item d-none d-md-inline " style="background-color: #EEEEEE;  ">
                            <div style="background-color: #EEEEEE;"><img src="../assets/search.png" alt="">
                                <input type="text" class="w-[200px] rounded-sm  outline-none " style="background-color: #EEEEEE; border: none;  border-radius: 3px; width:155px;
                                   height: 43px; " placeholder="بحث">
                            </div>

                        </div>
                    </router-link>
                </div>
                <div class="px-5 py-2">
                  
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav"
                        aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                   
                    <div class="collapse navbar-collapse justify-content-center  align-center" id="main-nav">
                        <ul class="navbar-nav">
                            <li class="nav-item   ms-5"><router-link to="/" class="nav-link">
                                    الرئيسية</router-link>
                            </li>
                            <li class="nav-item  ms-5"><router-link to="/about" class="nav-link"> من
                                    نحن</router-link>
                            </li>
                            <li class="nav-item  ms-5"><router-link to="/contactus" class="nav-link">راسلنا</router-link>
                            </li>

                        </ul>
                    </div>

                </div>

            </div>




            <a class="navbar-brand ">
                <span>
                    <img src="../assets/newspaper-1.png" alt="">
                </span>
            </a>





    

        </nav>

    </div> -->


    <!-- <div dir="rtl">
        <nav class="flex items-center place-content-between px-4 md:px-9 lg:px-0 lg:justify-around py-3 shadow">
            <div class="hidden lg:flex gap-x-3 ">
                <div>
                    <button style="background-color: #5165FD; color: #FFFFFF;" class="flex-normal px-11 text-lg py-2 rounded-sm">تطوع معنا</button>
                </div>
            
                <router-link to="/search">
                    <div class="flex py-2 w-60" style="background-color: #EEEEEE;">
                        <img src="public/search.png" alt="" class="pr-2">
                        <input type="text" class="w-[200px] rounded-sm pr-3 outline-none " style="background-color: #EEEEEE;" placeholder="بحث">
                    </div>
                </router-link>
            </div>

            <li class="hidden lg:flex list-none gap-x-20">
                <div>
                    <router-link to="/" class="text-xl"> الرئيسية</router-link>
                </div>
                <div>
                    <router-link to="/about" class="text-xl"> من نحن</router-link>
                </div>
                <div>
                    <router-link to="/contactus" class="text-xl"> راسلنا</router-link>
                </div>

            </li>

            <button class="lg:hidden" @click="toggleMenu">
                <img src="public/menu1.png" alt="" class="h-11 w-12">
            </button>

            <div>
                <img src="public/الجريدة 1.png" alt="">
            </div>
        
        

    </nav>

    <div v-if="menuItems" class="flex flex-col lg:hidden bg-white absolute w-full pr-6 gap-y-8 pb-10 z-50">
        <router-link to="/" class="text-xl"> الرئيسية</router-link>
        <router-link to="/about" class="text-xl"> من نحن</router-link>
        <router-link to="/contactus" class="text-xl"> راسلنا</router-link>
        <div>
            <button style="background-color: #5165FD; color: #FFFFFF;" class="flex font-normal px-11 text-lg py-2 rounded-sm"></button>
        </div>


    </div> 

    

</div> -->
</template>

<script>
export default {
    methods: {

        search(e) {
            if (e.key == "Enter" && this.search_value) {
                console.log(e);
                this.$router.push({
                    name: "searchResult",
                    params: { topic: this.search_value },
                });
                this.search_value = "";
            }
        },
    },
}
</script>

<style scoped>
.nav-link {
    color: #383838;
    font-size: 20px;
    font-family: Cairo;
    font-weight: 400;
    word-wrap: break-word
}

.nav-link:hover {

    color: #5165FD;
    font-size: 20px;
    font-family: Cairo;
    font-weight: 400;
    word-wrap: break-word
}

.button1 {
    width: 155px;
    height: 43px;
    background: #5165FD;
    color: #FFFFFF;
    border-radius: 5px;
    border-color: #5165FD;
    justify-content: right;

}
</style>