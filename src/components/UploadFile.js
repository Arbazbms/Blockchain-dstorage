import React, { Component } from 'react';
import Base from "../core/Base";
import { Link } from "react-router-dom";


class UpoadFile extends Component {

  render() {
    document.title="Upload File | DStorage for OER";
    return (
      <Base title="Upload a File Here.!" description="Welcome to File Upload Section." classname="container p-4 formBackground rounded">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <form onSubmit={(event) => {
              event.preventDefault()
              const description = this.fileDescription.value
              const category = this.fileCategory.value
              this.props.uploadFile(description, category)
            }} >
              <div className="form-group">
                <br></br>
                <p className="lead my-2">Enter File Description</p>
                <input
                  id="fileDescription"
                  type="text"
                  ref={(input) => { this.fileDescription = input }}
                  className="form-control"
                  placeholder="File Description..."
                  autoFocus
                  required
                />
                <input
                  id="fileCategory"
                  type="text"
                  ref={(input) => { this.fileCategory = input }}
                  className="form-control"
                  placeholder="File Category..."
                  autoFocus
                  required
                />
              </div>
              <div>
                <label className="btn btn-block btn-outline-info">
                  <input type="file" required onChange={this.props.captureFile} className="fileInputTextBox mb-3" />
                </label>
              </div>
              <div className="row text-center">
                <div className="col-md-6">
                  <button type="submit" className="btn btn-block btn-success"><span className="fa fa-upload"></span> Upload.!</button>
                </div>
                <div className="col-md-6">
                  <button type="reset" className="btn btn-block btn-dark" onClick={()=>window.location.reload()}>Reset</button>
                </div>
              </div>
              <div className="row text-center">
                {/* <div className="mt-3 col-md-3">
                  <Link
                    className="btn btn-block btn-info mb-3 homeBtn"
                    to="/"
                  >
                     <span className="fa fa-home"></span> Home
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
            </form>
          </div>
        </div>
      </Base>
    );
  }
}

export default UpoadFile;