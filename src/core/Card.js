import React from 'react';
import ImageHelper from './helper/ImageHelper';
import moment from 'moment';

const Card = ({
    file
}) => {
    return (
        <div className="card myCard">
               <div className="card-header lead myCardHeader">{file.fileName}</div>
               <div className="card-body">
                    <ImageHelper file={file} />
                    <hr />
                    <p className="lead font-weight-normal mt-2">
                        {file.fileDescription ? file.fileDescription : "A Sample File"}
                    </p>
                    <div className="row">
                         <div className="col-12 text-justify">
                            <b>File Hash:</b> {file.fileHash ? file.fileHash.substring(0,20) + "..."  : "File hash"}
                         </div>
                         <br />
                         <div className="col-12  text-justify">
                            <b>File Category:</b> {file.fileCategory ? file.fileCategory : "Unknown"}
                         </div>
                         <div className="col-12  text-justify">
                            <b>Uploaded By:</b> {file.uploader.substring(0,16) + "..."}
                         </div>
                         <div className="col-12  text-justify">
                            <b>Uploaded At:</b> {moment.unix(file.uploadTime).format('hh:mm:ss A DD/MM/Y')}
                         </div>
                    </div>
                    <div className="mt-4">
                         <a href={"https://ipfs.infura.io/ipfs/" + file.fileHash} target="_blank" rel="noopener noreferrer" className="btn btn-block btn-outline-info">Get File</a>
                    </div>
               </div>
          </div>
    )
}

export default Card;