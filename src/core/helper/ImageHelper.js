import React from "react";
import PDF from "../../pdf1.png";

const ImageHelper = ({ file }) => {
     var imageURL = `https://www.freecodecamp.org/news/technical-guide-to-ipfs-decentralized-storage-of-web3/`;
     if(file.fileType === "image/png") 
            imageURL = `https://ipfs.infura.io/ipfs/${file.fileHash}`;
     if(file.fileType === "application/pdf")
            imageURL = `https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png`;
     if(file.fileType === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") 
            imageURL = `https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/.docx_icon.svg/2048px-.docx_icon.svg.png`;
     if(file.fileType === "text/plain")
            imageURL = `https://cdn-icons-png.flaticon.com/512/29/29076.png`;
     if(file.fileType === "application/vnd.openxmlformats-officedocument.presentationml.presentation")  
            imageURL = `https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/.pptx_icon_%282019%29.svg/2048px-.pptx_icon_%282019%29.svg.png`;
     if(file.fileType === "application/mp3")
            imageURL = `https://www.pngitem.com/pimgs/m/464-4641493_mp3-icon-png-download-csv-file-icon-svg.png`;
     return (
          <div className="border-white p-2">
               <img
                    src={imageURL}
                    alt="File_Contents"
                    style={{ maxHeight: "50%", maxWidth: "50%", }}
                    className="rounded"
               />
          </div>
     );
};

export default ImageHelper;
