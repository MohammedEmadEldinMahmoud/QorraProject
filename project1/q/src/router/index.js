import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import homepage from "../views/homepage.vue";
import aboutus from "../views/aboutus.vue";
import contactus from "../views/contactus.vue";
import articlepage from "../views/articlepage.vue";
import searchResult from "../views/searchResult.vue"

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: homepage
  }, {
    path: '/aboutus',
    name: 'aboutus',
    component: aboutus
  },{
    path: '/contactus',
    name: 'contactus',
    component: contactus
  },{
    path: '/articlepage',
    name: 'articlepage',
    component: articlepage
  },{
    path:'/searchResult',
    name:'searchResult',
    component: searchResult
  }

  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },

  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  // //
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
