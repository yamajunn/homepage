import { Box, SxProps, Theme, Typography, Link } from "@mui/material";
import MainvisualImg from "../../resources/homepage/mainvisual_backgraound.png"

export const Mainvisual = () => {
    return (
        <Box className="Mainvisual" sx={sx}>
            <img className="Mainvisual-Image" src={MainvisualImg} alt="profile" />
            <Box className="Mainvisual-Title">
                <Typography className="Mainvisual-Title-Big-0" variant="h1" fontWeight={500}>安心</Typography>
                <Typography className="Mainvisual-Title-Big-1" variant="h2" fontWeight={500}>と</Typography>
                <Typography className="Mainvisual-Title-Big-2" variant="h1" fontWeight={500}>信頼</Typography>
                <Typography className="Mainvisual-Title-Big-3" variant="h2" fontWeight={500}>×</Typography>
                <Typography className="Mainvisual-Title-Big-4" variant="h1" fontWeight={500}>高度</Typography>
                <Typography className="Mainvisual-Title-Big-5" variant="h2" fontWeight={500}>な</Typography>
                <Typography className="Mainvisual-Title-Big-6" variant="h1" fontWeight={500}>技術力</Typography>
                <Typography className="Mainvisual-Title-Small" variant="h3" fontWeight={500}>高品質な開発を標準に。</Typography>
            </Box>
        </Box>
    );
};

const sx: SxProps<Theme> = {
    "&.Mainvisual": {
        width: "100%",
    },
    ".Mainvisual-Image": {
        width: "100%",
        // backgroundColor: "#FFF",
    },
    ".Mainvisual-Logo": {
        position: "absolute",
        width: "264px",
        height: "35px",
        left: "98px",
        top: "21px",
        color: "#FFF"
    },
    ".Mainvisual-Top": {
        position: "absolute",
        width: "477px",
        height: "25px",
        left: "718px",
        top: "31px",
        textAlign: "center",
        letterSpacing: "0.1em",
        color: "#FFF",
    },
    ".Mainvisual-Top-Link": {
        margin: "0 20px",
        color: "#FFF",
        textDecoration: "none",
    },
    ".Mainvisual-Button": {
        position: "absolute",
        width: "200px",
        height: "80px",
        left: "1240px",
        top: "0px",
        background: "#22A1B9",
    },
    ".Mainvisual-Button-Text": {
        position: "absolute",
        width: "100%",
        top: "28.6px",
        textAlign: "center",
        color: "#FFF",
        textDecoration: "none",
    },
    ".Mainvisual-Title": {
        // position: "absolute",
    },
    ".Mainvisual-Title-Big-0": {
        position: "absolute",
        width: "200px",
        height: "139px",
        left: "100px",
        top: "277px",
        color: "#FFF",
    },
    ".Mainvisual-Title-Big-1": {
        position: "absolute",
        width: "50px",
        height: "139px",
        left: "300px",
        top: "320px",
        color: "#FFF",
    },
    ".Mainvisual-Title-Big-2": {
        position: "absolute",
        width: "200px",
        height: "139px",
        left: "370px",
        top: "277px",
        color: "#FFF",
    },
    ".Mainvisual-Title-Big-3": {
        position: "absolute",
        width: "50px",
        height: "139px",
        left: "570px",
        top: "320px",
        color: "#FFF",
    },
    ".Mainvisual-Title-Big-4": {
        position: "absolute",
        width: "200px",
        height: "139px",
        left: "100px",
        top: "380px",
        color: "#FFF",
    },
    ".Mainvisual-Title-Big-5": {
        position: "absolute",
        width: "200px",
        height: "139px",
        left: "300px",
        top: "420px",
        color: "#FFF",
    },
    ".Mainvisual-Title-Big-6": {
        position: "absolute",
        width: "300px",
        height: "139px",
        left: "370px",
        top: "380px",
        color: "#FFF",
    },
    ".Mainvisual-Title-Small": {
        position: "absolute",
        width: "682px",
        height: "66px",
        left: "98px",
        top: "542px",
        color: "#FFF",
    },
};
