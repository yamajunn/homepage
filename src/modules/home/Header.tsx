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
        width: "30%",
        height: "5%",
        left: "7%",
        top: "5%",
        color: "#FFF"
    },
    ".Header-Top": {
        position: "absolute",
        width: "15%",
        height: "5%",
        left: "50%",
        top: "5%",
        textAlign: "center",
        letterSpacing: "0.1em",
        color: "#FFF",
    },
    ".Header-Top-Link": {
        margin: "0 10%",
        color: "#FFF",
        textDecoration: "none",
    },
    ".Header-Button": {
        position: "absolute",
        width: "12%",
        height: "12%",
        right: "0%",
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
