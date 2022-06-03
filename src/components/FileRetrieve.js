import React,{ useState } from 'react'

const FileRetrieve = () => {

    const [fileHash, setFileHash] = useState();

return (
    <>
        <div className="container-fluid mt-5 text-center">
        <div className="row">
        <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '1024px' }}>
            <div className="content">
              <p>&nbsp;</p>
              <div className="card mb-3 mx-auto" style={{ maxWidth: '812px' }}>
                <h2 className="mt-4"><b><ins>Retrieve File</ins></b></h2>
                  <form>
                      <div className="form-group">
                        <br></br>
                          <input
                            id="fileHash"
                            type="text"
                            onChange={(event) => setFileHash(event.target.value)}
                            className="form-control m-4"
                            placeholder="Enter file Hash"
                            value={fileHash}
                            required />
                      </div>
                   <a href={"https://ipfs.infura.io/ipfs/" + fileHash} target="_blank" rel="noopener noreferrer"  className="btn-primary btn-block my-btn ml-4 p-2"> <b>Get File</b></a>
                  </form>
              </div>
              <p>&nbsp;</p>
            </div>
            </main>
        </div>
      </div>
    </>
)
}

export default FileRetrieve;