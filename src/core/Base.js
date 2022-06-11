import React from 'react'

const Base = ({
    title = "Hello, Welcome",
    description = "",
    classname="p-4",
    children,
}) => {
  return (
    <div>
        <div className="container-fluid">
               <div className="jumbotron text-center mt-3">
                    <h2 className="display-4">{title}</h2>
                    <p className="lead">{description}</p>
               </div>
               <div className={classname}>{children}</div>
          </div>
          <footer className="footer lead mt-4 pt-2">
               <div className="container-fluid lead text-white text-center py-3" style={{backgroundColor:'#232629', boxShadow: '0px -2px 10px rgba(255, 205, 20, 0.8)'}}>
                    <p className="text-center mt-auto py-2">
                         <h3> Designed & Developed By </h3>
                            <a href="http://arbazahmed.netlify.app" target="_blank" className="text-warning names">Arbaz Ahmed</a> 
                            &nbsp; <i className="fa fa-flash"></i> &nbsp;
                            <a href="https://github.com/HarshaR99" target="_blank" className="text-warning names">Harsha R </a> 
                            &nbsp; <i className="fa fa-flash"></i> &nbsp;
                            <a href="https://mdyaseenahmed.github.io/" target="_blank" className="text-warning names">Md Yaseen Ahmed</a> 
                            &nbsp; <i className="fa fa-flash"></i> &nbsp;
                            <a href="https://github.com/Arafat2198" target="_blank" className="text-warning names">Mohammad Arafat Khan</a>
                            <br /><p className="paraText">Department of Computer Science & Engineering
                            <br />B.M.S College Of Engineering, Bengaluru - 560 019</p>

                            <br /><h3>Under the Guidance of,</h3>
                            <h4><a href="https://bmsce.ac.in/home/facultyProfile/37/Dr-K-PANIMOZHI" target="_blank" className="text-warning names">Dr. K. Panimozhi</a></h4>
                            <p className="paraText">Assistant Professor
                            <br/>Department of Computer Science & Engineering
                            <br />B.M.S College Of Engineering, Bengaluru - 560 019</p>
                    </p>
               </div>
          </footer>
    </div>
  )
}

export default Base;