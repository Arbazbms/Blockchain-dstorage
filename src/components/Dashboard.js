import React from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";

const Landing = ({
    account = "0x0",
    count,
}) => {

    document.title = "Dashboard | DStorage for OER";

    const userLeftSide = () => {
        return (
            <div className="card text-center">
                <h4 className="card-header text-center borderBottom">
                    <b><span className="fa fa-tachometer"></span> Dashboard</b>
                </h4>
                <ul className="list-group text-center">
                    <li className="list-group-item borderBottom1">
                        <Link
                            to="/"
                            className="nav-link"
                        >
                            <i className="fa fa-home"></i> Home
                        </Link>
                    </li>
                    <li className="list-group-item borderBottom1">
                        <Link
                            to="/uploadFile"
                            className="nav-link"
                        >
                            <span className="fa fa-upload"></span> Upload File
                        </Link>
                    </li>
                    <li className="list-group-item borderBottom1">
                        <Link
                            to="/listFiles"
                            className="nav-link"
                        >
                            <i class="fa fa-align-center"></i> List Files
                        </Link>
                    </li>
                    <li className="list-group-item borderBottom1">
                        <Link
                            to="/retrieve"
                            className="nav-link"
                        >
                            <i className="fa fa-search"></i> Search for a File
                        </Link>
                    </li>
                </ul>
            </div>
        );
    };

    const userRightSide = () => {
        return (
            <div className="card mb-4">
                <h4 className="card-header borderBottom">
                    <b><span className="fa fa-user-circle"></span> User Information</b>
                </h4>
                <ul className="list-group">
                    <li className="list-group-item borderBottom1">
                        <span className="badge badge-success mr-2">
                            Public Id
                        </span>
                        {account ? account : "0x0"}
                    </li>
                    <li className="list-group-item borderBottom1">
                        <span className="badge badge-success mr-2">
                            Files Uploaded
                        </span>
                        {count}
                    </li>
                </ul>
            </div>
        );
    };

    return (
        <>
            <Base title={"Hello, { " + account.substring(0, 6) + "..." + account.substring(36, 42) + " }"} description="Welcome to Decentralised Storage System for Educational Resources">
                <div className="row">
                    <div className="col-lg-3 col-sm-12">{userLeftSide()}</div>
                    <div className="col-lg-9 col-sm-12">{userRightSide()}</div>
                </div>
            </Base>
        </>
    );
};

export default Landing;
