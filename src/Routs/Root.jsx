import { createBrowserRouter } from "react-router";
import HomePage from "../Pages/HomePage";
import Home from "../Pages/Home";
import CategoryNew from "../Pages/CategoryNew";

const router = createBrowserRouter([
    {
        path:'/',
        element:<HomePage></HomePage>,
        children:[
            {
                index:true,
                element:<Home></Home>
            },{
                path:'/category/:id',
                element:<CategoryNew></CategoryNew>
            }

        ]
        
    }
])
export default router