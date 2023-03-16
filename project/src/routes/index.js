import Home from "../pages/Home"
import AboutUs from "../pages/AboutUs"
import Apartments from "../pages/APartments"
import Detail from "../pages/Detail"
import FormLogin from '../pages/FormLogin'
import ManagerCards from "../pages/Admin"
//public Routes
const publicRoutes = [
        {path:"/", component: Home},
        {path:"/aboutus", component: AboutUs},
        {path:"/apartments", component: Apartments},
        {path:"/detail/:title", component:Detail},
        {path:"/detail", component:Detail},
        {path:"/admin", component:FormLogin},
        {path:"/managercards", component:ManagerCards}
]

const privateRoutes = [

]
export {publicRoutes,privateRoutes}
