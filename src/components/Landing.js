import React from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";

const Landing = ({
    account = "0x0"
}) => {

    const userLeftSide = () => {
        return (
            <div className="card text-center">
                <h5 className="card-header text-center borderBottom">
                    <b>Home</b>
                </h5>
                <ul className="list-group">
                    <li className="list-group-item borderBottom1">
                        <Link
                            to="/uploadFile"
                            className="nav-link"
                        >
                            Upload File
                        </Link>
                    </li>
                    <li className="list-group-item borderBottom1">
                        <Link
                            to="/listFiles"
                            className="nav-link"
                        >
                            List Files
                        </Link>
                    </li>
                    <li className="list-group-item borderBottom1">
                        <Link
                            to="/retrieve"
                            className="nav-link"
                        >
                            Search for a File
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
                    <b>User Information</b>
                </h4>
                <ul className="list-group">
                    <li className="list-group-item borderBottom1">
                        <span className="badge badge-success mr-2">
                            Public Id
                        </span>
                        {account}
                    </li>
                </ul>
            </div>
        );
    };

    return (
        <>
            <Base title={"Hello, { " + account.substring(0, 6) + "..." + account.substring(38, 42) + " }"} description="Welcome to Decentralised Storage System for Educational Resources">
                <div className="row">
                    <div className="col-2">{userLeftSide()}</div>
                    <div className="col-10">{userRightSide()}</div>
                </div>
            </Base>
        </>
    );
};

export default Landing;
