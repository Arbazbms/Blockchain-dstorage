import React from "react";
import  {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  import App from './App';
  import Landing from "./Landing";
  import ListFile from "./ListFile";


  const Home = () => {
        return (<>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/uploadFile" element={<App />} />
                <Route path="/listFiles" element={<ListFile />} />
            </Routes>
        </>);
  }

  export default Home; 