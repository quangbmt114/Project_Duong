import Home from "../pages/Home"
import AboutUs from "../pages/AboutUs"
import Apartments from "../pages/APartments"
//public Routes
const publicRoutes = [
        {path:"/", component: Home},
        {path:"/aboutus", component: AboutUs},
        {path:"/apartments", component: Apartments}
]

const privateRoutes = [

]
export {publicRoutes,privateRoutes}
