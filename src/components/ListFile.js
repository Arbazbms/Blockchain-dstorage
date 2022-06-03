import React, { Component } from 'react';
import { convertBytes } from './helpers';
import moment from 'moment'

class ListFile extends Component 
{
    render() {
        return (
          <div className="container mt-5 text-center tabb">
            <div className="row">
                  <p>&nbsp;</p>
                  <table className="table-sm table-bordered center" style={{ width: '1000px', maxHeight: '450px'}}>
                    <thead style={{ 'fontSize': '18px' }}>
                      <tr className="">
                        <th scope="col" style={{ width: '20px'}}>Id</th>
                        <th scope="col" style={{ width: '200px'}}>Name</th>
                        <th scope="col" style={{ width: '230px'}}>Description</th>
                        <th scope="col" style={{ width: '120px'}}>Type</th>
                        <th scope="col" style={{ width: '90px'}}>Size</th>
                        <th scope="col" style={{ width: '180px'}}>Date</th>
                        <th scope="col" style={{ width: '120px'}}>Uploader</th>
                        <th scope="col" style={{ width: '120px'}}>File hash</th>
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
                            <td>{moment.unix(file.uploadTime).format('h:mm:ss A M/D/Y')}</td>
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
        );
      }
}

export default ListFile;