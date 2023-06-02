import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: () => import('@/layout/LayoutPage.vue'),
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('@/views/home/HomeView.vue')
        },
        {
          path: 'template/:id',
          name: 'template',
          component: () => import('@/views/template/TemplateView.vue')
        }
      ]
    },
    {
      path: '/editor/:id',
      name: 'editor',
      component: () => import('@/views/editor/EditorView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/LoginView.vue')
    }
  ],
  scrollBehavior() {
    return { top: 0 };
  }
});

export default router;
