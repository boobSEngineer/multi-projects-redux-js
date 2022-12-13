import {Route, Routes} from "react-router-dom";

import {Layout} from "./Layout";

import {Home} from "./components/Home";
import {Posts} from "./projects/PracticWithRedux/Posts/Posts";
import Convertor from "./projects/Convertor/Convertor";
import Error from "./projects/Error/Error";
import {Diagram} from "./projects/Diagram/Diagram";

const App = () => {
    return (
        <>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path="/diagram" element={<Diagram/>}/>
              <Route path="/convertor" element={<Convertor/>}/>
              <Route path="/error" element={<Error/>}/>
              <Route path="/posts" element={<Posts/>}/>
            </Route>
            <Route path="*" element={<div>Not found</div>}/>
          </Routes>
        </>
    )
};

export {App};
