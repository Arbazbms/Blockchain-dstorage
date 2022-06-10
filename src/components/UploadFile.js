import React, { Component } from 'react';
import Base from "../core/Base";
import { Link } from "react-router-dom";


class UpoadFile extends Component {

  render() {
    return (
      <Base title="Upload a File Here.!" description="Welcome to File Upload Section." classname="container p-4 formBackground rounded">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <form onSubmit={(event) => {
              event.preventDefault()
              const description = this.fileDescription.value
              this.props.uploadFile(description)
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
              </div>
              <div>
                <label className="btn btn-block btn-outline-info">
                  <input type="file" onChange={this.props.captureFile} className="fileInputTextBox mb-3" />
                </label>
              </div>
              <div className="row text-center">
                <div className="col-md-6">
                  <button type="submit" className="btn btn-block btn-success">Upload.!</button>
                </div>
                <div className="col-md-6">
                  <button type="reset" className="btn btn-block btn-dark">Reset</button>
                </div>
              </div>
              <div className="row text-center">
                <div className="mt-3 col-md-3">
                  <Link
                    className="btn btn-block btn-info mb-3 homeBtn"
                    to="/"
                  >
                    Home
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