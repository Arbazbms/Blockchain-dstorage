import React from 'react';
import ImageHelper from './helper/ImageHelper';
import moment from 'moment';

const Card = ({
    file
}) => {
    return (
        <div className="card myCard">
               <div className="card-header lead">{file.fileName}</div>
               <div className="card-body">
                    <ImageHelper file={file} />
                    <hr />
                    <p className="lead font-weight-normal mt-2">
                        {file.fileDescription ? file.fileDescription : "A Sample File"}
                    </p>
                    <div className="row text-justify">
                         <div className="col-12">
                            <b>File Hash:</b> {file.fileHash ? file.fileHash.substring(0,20) + "..."  : "File hash"}
                         </div>
                         <br />
                         <div className="col-12">
                            <b>File Category:</b> {file.category ? file.category : "Unknown"}
                         </div>
                         <div className="col-12">
                            <b>Uploaded By:</b> {file.uploader.substring(0,16) + "..."}
                         </div>
                         <div className="col-12">
                            <b>Uploaded At:</b> {moment.unix(file.uploadTime).format('hh:mm:ss A DD/MM/Y')}
                         </div>
                    </div>
               </div>
          </div>
    )
}

export default Card;