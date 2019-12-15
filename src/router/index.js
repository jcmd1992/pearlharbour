import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Why from '@/components/Why'
import AttackWave1 from '@/components/AttackWave1'
import AttackWave2 from '@/components/AttackWave2'
import Consequences from '@/components/Consequences'
import Theories from '@/components/Theories'
import Message from '@/components/Message'
import Messages from '@/components/Messages'
import Edit from '@/components/Edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Welcome',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/Why',
      name: 'Why',
      component: Why
    },
    {
      path: '/AttackWave1',
      name: 'AttackWave1',
      component: AttackWave1
    },
    {
      path: '/AttackWave2',
      name: 'AttackWave2',
      component: AttackWave2
    },
    {
      path: '/Consequences',
      name: 'Consequences',
      component: Consequences
    },
    {
      path: '/Theories',
      name: 'Theories',
      component: Theories
    },
    {
      path: '/Message',
      name: 'Message',
      component: Message
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit,
      props: true
    },
    {
      path: '/Messages',
      name: 'Messages',
      component: Messages
    }
  ]
})
