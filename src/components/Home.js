import React from "react";
import { Link } from "react-router-dom";
import Base from "../core/Base";
import Card from "../core/Card";

  const Home = ({
        files,
        count
  }) => {
    //   console.log("Files from Home Page: " + files)
        document.title="Home | DStorage for OER";
        return (
        <>
            <Base title = "Welcome, to Open Educational Resources.!" description="Decentralised Storage System for Educational Resources Using IPFS & Ethereum Blockchain.">
            <div className="row">
              <div className="col-md-2 offset-md-2">
                <Link
                  className="btn btn-block btn-outline-info mb-3 homeBtn"
                  to="/dashboard"
                >
                  <span className="fa fa-tachometer"></span> Dashboard 
                </Link>
              </div>
              <div className="col-md-4"></div>
              <div className="col-md-2">
                <h3 style={{ 'fontSize': '18px' }} className="text-center btn btn-block homeBtn btn-outline-info">File count: <span className="badge badge-success">{count}</span></h3>
              </div>
          </div>
                <br />
                <div className="row text-center">
                        <div className="row">
                            {files.map((file, index) => {
                                return (
                                    <div key={index} className="col-3 mb-4">
                                            <Card file={file} />
                                    </div>
                                );
                            })}
                        </div>
                </div>
            </Base>            
        </>
    );
  }

  export default Home; 