import React, { Component } from 'react';
import { convertBytes } from './helpers';
import moment from 'moment'
import Base from "../core/Base";
import { Link } from "react-router-dom";

class ListFile extends Component 
{
    render() {
    document.title="List Files | DStorage for OER";

        return (
          <Base title="Find all Files Here.!" description="Welcome to File Listing Section.">
          <div className="row">
              {/* <div className="col-md-2 offset-md-2">
                <Link
                  className="btn btn-block btn-outline-info mb-3 homeBtn"
                  to="/"
                >
                  Home <span className="fa fa-home"></span>
                </Link>
              </div> */}
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
                <h3 style={{ 'fontSize': '18px' }} className="text-center btn btn-block homeBtn btn-outline-info">File count: <span className="badge badge-success">{this.props.count}</span></h3>
              </div>
          </div>
          { this.props.count === 0 ? <h5 className="text-center text-danger"> No File found, Please Upload a File & Try again.</h5>:
          <div className="container mt-4 text-center tabb">
            <div className="row">
                  {/* <p>&nbsp;</p> */}
                  <table className="table-sm table-bordered center table-striped table-hover">
                    <thead style={{ 'fontSize': '18px' }}>
                      <tr className="table-secondary">
                        <th scope="col" style={{ width: '150px'}}>Id</th>
                        <th scope="col" style={{ width: '200px'}}>Name</th>
                        <th scope="col" style={{ width: '230px'}}>Description</th>
                        <th scope="col" style={{ width: '120px'}}>Type</th>
                        <th scope="col" style={{ width: '120px'}}>Size</th>
                        <th scope="col" style={{ width: '180px'}}>Date</th>
                        <th scope="col" style={{ width: '120px'}}>Uploader</th>
                        <th scope="col" style={{ width: '120px'}}>Content Identifier / File hash</th>
                      </tr>
                    </thead>
                    { this.props.files.map((file, key) => {
                      return(
                        <thead style={{ 'fontSize': '15px' }} key={key}>
                          <tr>
                            <td>{file.fileId}</td>
                            <td>{file.fileName}</td>
                            <td>{file.fileDescription}</td>
                            <td>{file.fileType}</td>
                            <td>{convertBytes(file.fileSize)}</td>
                            <td>{moment.unix(file.uploadTime).format('h:mm:ss A DD/MM/Y')}</td>
                            <td>
                                {file.uploader.substring(0,10)}
                             </td>
                            <td>
                              {file.fileHash}
                            </td>
                          </tr>
                        </thead>
                      )
                    })}
                  </table>
                </div>
          </div>
          }
          </Base>
        );
      }
}

export default ListFile;