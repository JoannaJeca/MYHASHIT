import {RouterProvider} from "react-router-dom"
import { MainRouter } from "./Route/MainRouter"

const App = ()=>{
  return(
    <div>
      <RouterProvider router={MainRouter}/>
    </div>
  )
};
export default App;