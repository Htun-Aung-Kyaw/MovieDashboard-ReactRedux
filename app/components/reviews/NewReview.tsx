"use client";

import {useState} from "react";
import styles from "@/app/components/movies/movies.module.css";
import {IconButton, Tooltip} from "@mui/material";
import {AddCircle} from "@mui/icons-material";
import {blue, blueGrey, red} from "@mui/material/colors";
import ReviewForm from "@/app/components/reviews/ReviewForm";

export default function NewReview() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div className={`end uiSticky pr d-flex align-items-center justify-content-center`}>
            <p className="fw-bold p-2">Add new reviews</p>
            <Tooltip title="Add" arrow placement="right">
                <IconButton color="error" onClick={handleShow}>
                    <AddCircle sx={{ color: red[400] }}></AddCircle>
                </IconButton>
            </Tooltip>

            <ReviewForm show={show} handleClose={handleClose} handleShow={handleShow} />
        </div>
    )
}