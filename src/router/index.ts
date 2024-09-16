import { createRouter, createWebHistory } from 'vue-router';
import CompanySearch from '../components/CompanySearch.vue';
import CompanyDetail from '../components/CompanyDetail.vue';

const routes = [
  { path: '/', component: CompanySearch }, 
  { path: '/company/:id', component: CompanyDetail, props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
