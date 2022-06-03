import React, { Component } from 'react';
import { convertBytes } from './helpers';
import moment from 'moment'

class Main extends Component {

  render() {
    return (
      <div className="container-fluid mt-5 text-center">
        <div className="row">
          <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '1024px' }}>
            <div className="content">
              <p>&nbsp;</p>
              <div className="card mb-3 mx-auto" style={{ maxWidth: '812px' }}>
                <h2 className="mt-4"><b><ins>Upload a File</ins></b></h2>
                  <form onSubmit={(event) => {
                    event.preventDefault()
                    const description = this.fileDescription.value
                    this.props.uploadFile(description)
                  }} >
                      <div className="form-group">
                        <br></br>
                          <input
                            id="fileDescription"
                            type="text"
                            ref={(input) => { this.fileDescription = input }}
                            className="form-control text-monospace m-4"
                            placeholder="Description..."
                            
                            required />
                      </div>
                    <input type="file" onChange={this.props.captureFile} className="fileInputTextBox mb-3"/>
                    <button type="submit" className="btn-primary btn-block m-auto p-2 my-btn"><b>Upload!</b></button>
                  </form>
              </div>
              <p>&nbsp;</p>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Main;