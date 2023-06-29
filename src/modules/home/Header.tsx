import { Box, SxProps, Theme, Typography, Link } from "@mui/material";
import { serialize } from "v8";

export const Header = () => {
    return (
        <Box className="Header" sx={sx}>
            <Box className="Header-Logo">
                <Typography variant="h6" fontWeight="fontWeightBold">🌐テクノテクノスタンダード</Typography>
            </Box>
            <Box className="Header-Top">
                <Link className="Header-Top-Link" href="#" fontWeight="fontWeightBold">TOP</Link>
                <Link className="Header-Top-Link" href="#" fontWeight="fontWeightBold">ABOUT</Link>
                <Link className="Header-Top-Link" href="#" fontWeight="fontWeightBold">SERVICE</Link>
                <Link className="Header-Top-Link" href="#" fontWeight="fontWeightBold">COMPANY</Link>
            </Box>
            <Box className="Header-Button">
                <Link className="Header-Button-Text" href="#" fontWeight="fontWeightBold">CONTACT</Link>
            </Box>
        </Box>
    );
};

const sx: SxProps<Theme> = {
    "&.Header": {
        width: "100%",
    },
    ".Header-Logo": {
        position: "absolute",
        width: "264px",
        height: "35px",
        left: "98px",
        top: "21px",
        color: "#FFF"
    },
    ".Header-Top": {
        position: "absolute",
        width: "477px",
        height: "25px",
        left: "718px",
        top: "31px",
        textAlign: "center",
        letterSpacing: "0.1em",
        color: "#FFF",
    },
    ".Header-Top-Link": {
        margin: "0 20px",
        color: "#FFF",
        textDecoration: "none",
    },
    ".Header-Button": {
        position: "absolute",
        width: "200px",
        height: "80px",
        left: "1240px",
        top: "0px",
        background: "#22A1B9",
    },
    ".Header-Button-Text": {
        position: "absolute",
        width: "100%",
        top: "28.6px",
        textAlign: "center",
        color: "#FFF",
        textDecoration: "none",
    },
};
