import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Base from "../core/Base";
import Card from "../core/Card";


  const Home = (props) => {

     const [myFiles, setMyFiles] = useState([]);
     const [search, setSearch] = useState("");
     const [filteredproducts, setFilteredProducts] = useState([]);

     const loadFiles = () => {
        setMyFiles(props.files);
        console.log("myfiles from useEffect" + myFiles)
    };

    useEffect(() => {
            loadFiles();
    }, [props]);

    useEffect(() => {
            setFilteredProducts(
                myFiles.filter((file) =>
                    file.fileName.toLowerCase().includes(search.toLowerCase())
                )
            );
    }, [search, myFiles]);

    const searchBox = () => {
            return (
               <div>
                {/* <i className="fa fa-search"></i> */}
                <input
                    type="text"
                    className="form-control sb"
                    placeholder="Search for a File"
                    onChange={(e) => setSearch(e.target.value)}
                    autofocus
                />
                </div>
            );
    };


      console.log("Files from Home Page: " + typeof(props.files));
        document.title="Home | DStorage for OER";
        return (
        <>
            <Base title = "Welcome To Open Educational Resources.!" description="Decentralised Storage System for Educational Resources Using IPFS & Ethereum Blockchain.">
            {/* {searchBox()} */}
            <div className="row">
              <div className="col-md-2 offset-md-2">
                <Link
                  className="btn btn-block btn-outline-info mb-3 homeBtn"
                  to="/dashboard"
                >
                  <span className="fa fa-tachometer"></span> Dashboard 
                </Link>
              </div>
              <div className="col-md-4">
                {searchBox()}     
              </div>
              <div className="col-md-2">
                <h3 style={{ 'fontSize': '18px' }} className="text-center btn btn-block homeBtn btn-outline-info">File count: <span className="badge badge-success">{props.count}</span></h3>
              </div>
          </div>
                <br />
                <div className="row text-center">
                        <div className="row">
                            {filteredproducts.map((file, index) => {
                                return (
                                    <div key={index} className="col-3 mb-4">
                                        <Card file={file} />
                                    </div>
                                );
                            })}
                            {/* {files.length} */}
                        </div>
                </div>
            </Base>            
        </>
    );
  }

  export default Home; 