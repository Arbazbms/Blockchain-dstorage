import React, { useState } from 'react';
import Base from "../core/Base";
import { Link } from "react-router-dom";

const FileRetrieve = () => {

  const [fileHash, setFileHash] = useState("");
  document.title="Search for a File | DStorage for OER";

  return (
    
    <Base title="Search for a File Here.!" description="Welcome to File Search Section." classname="container p-4 formBackground rounded">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <form>
            <div className="form-group">
              <br></br>
              <p className="lead my-2">Enter Content Identifier or File Hash</p>
              <input
                id="fileHash"
                type="text"
                onChange={(event) => setFileHash(event.target.value)}
                autoFocus
                className="form-control"
                placeholder="Enter file Hash"
                value={fileHash}
                required />
            </div>
            <div className="row text-center">
              <div className="col-md-6">
                {fileHash.length > 0 ? <a href={"https://ipfs.infura.io/ipfs/" + fileHash} target="_blank" rel="noopener noreferrer" className="btn btn-block btn-success">Get File</a> : <a href={"https://ipfs.infura.io/ipfs/" + fileHash} target="_blank" rel="noopener noreferrer" className="btn btn-block btn-success disabled">Get File</a>}
              </div>
              <div className="col-md-6">
                <button type="reset" className="btn btn-block btn-dark" onClick={()=>window.location.reload()}>Reset</button>
              </div>
            </div>
          </form>
          <div className="row text-center">
            {/* <div className="mt-3 col-md-3">
              <Link
                className="btn btn-block btn-info mb-3 homeBtn"
                to="/"
              >
                Home <span className="fa fa-home"></span>
              </Link>
            </div> */}
            <div className="mt-3 col-md-3">
                  <Link
                    className="btn btn-block btn-info mb-3 homeBtn"
                    to="/dashboard"
                  >
                    <span className="fa fa-tachometer"></span> Dashboard 
                  </Link>
                </div>
          </div>
        </div>
      </div>
    </Base>
  )
}

export default FileRetrieve;