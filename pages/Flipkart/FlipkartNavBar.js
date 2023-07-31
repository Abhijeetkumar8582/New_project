import React from "react";
import Style from "/styles/Flipkart.module.css";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";

function FlipkartNavBar() {
    const handleDownload = useCallback(() => {
        const link = document.createElement("a");
        link.href = "/Image/AbhijeetKumar_SE.pdf";
        link.download = "/Image/AbhijeetKumar_SE.pdf";
        link.click();
    });

    return (
        <>
            <nav
                className="navbar navbar-expand-lg bg-body-tertiary"
                style={{ backgroundColor: "#2874f0", color: "white" }}
            >
                <div className="container-fluid">
                    <Link
                        className="navbar-brand"
                        href="/Flipkart/MainPage"
                        style={{ color: "white" }}
                    >
                        Abhijeet Kumar
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                            <li className="nav-item">
                                <div style={{ width: "550px" }}>
                                    <Paper
                                        component="form"
                                        sx={{
                                            p: "2px 4px",
                                            display: "flex",
                                            alignItems: "center",
                                            width: "100%",
                                        }}
                                    >
                                        <InputBase
                                            sx={{ ml: 1, flex: 1 }}
                                            placeholder="Welcome to My portfolio"
                                            inputProps={{ "aria-label": "search google maps" }}
                                        />
                                        <IconButton
                                            type="button"
                                            sx={{ p: "10px" }}
                                            aria-label="search"
                                        >
                                            <SearchIcon />
                                        </IconButton>
                                    </Paper>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <button
                        className={`${Style.custombtn} ${Style.btn12}`}
                        onClick={() => handleDownload()}
                    >
                        <span>Download!</span>
                        <span>
                            <i className="fa fa-cloud-download" aria-hidden="true"></i>Resume
                        </span>
                    </button>
                </div>
            </nav>
        </>
    );
}

export default FlipkartNavBar;
