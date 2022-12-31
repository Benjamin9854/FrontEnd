import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'



//Se importan las "VIEWS"
import Usuarioss from '../views/Usuarios.vue'
import Rifass from '../views/Rifas.vue'
import Numeross from '../views/Numeros.vue'



//definir el objeto ruta. CON las rutas para cada "VIEW"
const routes = [
  {
      path:'/', component: Usuarioss,
      
  },
  {
      path:'/todo-rifas', component: Rifass, name: 'data-rifas'
  },
  {
    path:'/numeros-rifa', component: Numeross, name: 'num-rifa'
  }
]

//crear objeto para las rutas de vue router
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
