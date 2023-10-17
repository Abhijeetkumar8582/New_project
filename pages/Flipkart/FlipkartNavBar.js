import React, { useCallback, useState } from "react";
import Style from "/styles/Flipkart.module.css";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import Head from 'next/head';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function FlipkartNavBar() {
    const handleDownload = useCallback(() => {
        const link = document.createElement("a");
        link.href = "/Image/AbhijeetKumar_SE.pdf";
        link.download = "/Image/AbhijeetKumar_SE.pdf";
        link.click();
    });
    const [open, setOpen] = React.useState(false);
    const [getQuestion, setQuestion] = useState('')
    const [getAnswerfromPDF, setGetAnswerfromPDF] = useState('')
    const handleClickOpen = () => {

    };

    const handleClose = () => {
        setOpen(false);
    };

    const onQuestionInput = (e) => {
        setQuestion(e.target.value)
    }
   
    const findAnswerFromPDF = () => {
        setOpen(true);
        console.log(true);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "user_input": "and what programming languages you used"
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            mode: 'no-cors',
            
        };

        fetch("http://65.0.45.74:5000/get_answer", requestOptions)
        .then(response => {
            console.log('Response:', response);
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Network response was not ok.');
            }
        })
        .then(result => setGetAnswerfromPDF(result.answer))
        .catch(error => console.log('error', error));

    }

    return (
        <>
            <Head>
                <title>Flipkart - Abhijeet</title>
            </Head>
            <nav
                className="navbar navbar-expand-lg bg-body-tertiary"
                style={{ backgroundColor: "#2874f0", color: "white" }}
            >
                <div className="container-fluid">
                    <Link
                        className="navbar-brand"
                        href="/"
                        style={{ color: "white", fontWeight: '500' }}
                    >
                        Abhijeet Kumar
                    </Link>
                    <Button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </Button>
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
                                            onChange={(e) => onQuestionInput(e)}
                                            placeholder="Soon will add search Algorithum"
                                            inputProps={{ "aria-label": "search google maps" }}
                                        />
                                        <IconButton
                                            type="button"
                                            sx={{ p: "10px" }}
                                            aria-label="search"
                                            onClick={findAnswerFromPDF}
                                        >

                                            <SearchIcon />
                                        </IconButton>
                                    </Paper>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <button
                        aria-label="handleDownload"
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
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Use Google's location service?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {getAnswerfromPDF}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleClose}>Agree</Button>
                </DialogActions>
            </Dialog>

        </>
    );
}

export default FlipkartNavBar;
