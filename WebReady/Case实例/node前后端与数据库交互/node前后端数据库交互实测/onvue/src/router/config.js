import get from '../views/get/get.vue'
import send from '../views/send/send.vue'
import request from '../views/request/request.vue'

const routes =[
    {
        path:"/get",
        component:get
    },
    {
        path:"/send",
        component:send
    },
    {
        path:"/request",
        component:request
    },
]

export default routes