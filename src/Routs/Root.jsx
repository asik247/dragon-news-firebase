import { createBrowserRouter } from "react-router";
import HomePage from "../Pages/HomePage";

const router = createBrowserRouter([
    {
        path:'/',
        element:<HomePage></HomePage>,
        // children:[
        //     {
        //         index:true,
        //         element:<h1>hi</h1>
        //     },{
        //         path:'/about',
        //         element:<p>about</p>
        //     }

        // ]
        
    }
])
export default router