import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/views/layout/index.vue'
import { resolve } from 'path'

import { video, archive, wafcdn, system } from './dynamic'

// 格式路由结构
const formatRouteItem = (children, basePath) => {
  children.path = resolve(basePath, children.path)
  if (children.children) {
    for (const item of children.children) {
      formatRouteItem(item, children.path)
    }
  }
}

const formatRouteList = (routes) => {
  const routelist = []
  for (const item of routes) {
    formatRouteItem(item, '/')
    routelist.push(item)
  }
  return routelist
}

/**
 * 动态路由 router.addRoute() 不能通过 router.options.routes 获取到。https://github.com/vuejs/vue-router/issues/1859
 * 所以最有效率的解决办法是通过hide + beforeEach 来控制权限问题
 * - 参数介绍
 * path : 进行跳转
 * name : 进行权限验证
 * meta.white 进行白名单放行。
 * meta.hidden 控制是否展示
 * meta.title 为空则菜单也会隐藏。
 *  - 备注说明
 * 如果菜单childen只有一个则子meta 菜单处理详见src\views\layout\components\AsideBar\MenuItem.vue
 * 通过配置src\stores\module\auth.js的routes是否包含name字符串来鉴权是否放行
 */
const routes = formatRouteList([
  // default route
  {
    name: 'notFound',
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/layout/404.vue'),
    meta: { white: true, hidden: true }
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: { white: true, hidden: true }
  },
  // menu route
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        name: 'Dashboard',
        meta: { title: '仪表盘', icon: 'Odometer' }
      }
    ]
  },
  {
    path: '/example',
    component: Layout,
    redirect: '/example/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/example/index.vue'),
        name: 'exampleIndex',
        meta: { title: '示例列表', icon: 'Tickets' }
      }
    ]
  },
  {
    path: 'icon',
    component: Layout,
    name: 'Icon',
    meta: { // 处理外链
      title: '图标',
      icon: 'PictureRounded',
      path: 'https://element-plus.org/zh-CN/component/icon.html#%E5%9B%BE%E6%A0%87%E9%9B%86%E5%90%88'
    }
  }
])

routes.push(...formatRouteList([system, video, archive, wafcdn]))

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
