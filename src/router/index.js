import Vue from 'vue'
import Router from 'vue-router'

import AboutMe from '@/views/AboutMe'
import ContactMe from '@/views/ContactMe'
import Portfolio from '@/views/Portfolio'
import Project from '@/views/Project'
import Resume from '@/views/Resume'
import PageNotFound from '@/views/PageNotFound'

Vue.use(Router)

export default new Router({
  base: '/portfolio',
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: { name: 'AboutMe' }
    },
    {
      path: '/aboutme',
      name: 'AboutMe',
      component: AboutMe
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/portfolio/project/:id',
      name: 'Project',
      component: Project,
      props: true
    },
    {
      path: '/contactme',
      name: 'ContactMe',
      component: ContactMe
    },
    {
      path: '/contactme/resume',
      name: 'Resume',
      component: Resume
    },
    {
      path: '*',
      name: 'PageNotFound',
      component: PageNotFound
    }
  ]
})
