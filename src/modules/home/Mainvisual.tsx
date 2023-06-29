import { Box, SxProps, Theme, Typography, Link } from "@mui/material";
import MainvisualImg from "../../resources/homepage/mainvisual_backgraound.png"

export const Mainvisual = () => {
    return (
        <Box className="Mainvisual" sx={sx}>
            <img className="Mainvisual-Image" src={MainvisualImg} alt="profile" />
            <Box className="Mainvisual-Title">
                <Typography className="Mainvisual-Title-Big-0" variant="h1" fontWeight={500} sx={{ borderBottom: 1 }}>安心<Box className="small">と</Box>信頼<Box className="small">×</Box></Typography>
                <Typography className="Mainvisual-Title-Big-1" variant="h1" fontWeight={500} sx={{ borderBottom: 1 }}>高度<Box className="small">な</Box>技術力</Typography>
                <Typography className="Mainvisual-Title-Big-2" variant="h3" fontWeight={500}>高品質な開発を標準に。</Typography>
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
    ".Mainvisual-Title-Big-0": {
        position: "absolute",
        height: "16%",
        left: "7%",
        top: "42%",
        color: "#FFF",
        display: "flex",
    },
    ".Mainvisual-Title-Big-1": {
        position: "absolute",
        height: "16%",
        left: "7%",
        top: "58%",
        color: "#FFF",
        display: "flex",
    },
    ".Mainvisual-Title-Big-2": {
        position: "absolute",
        height: "16%",
        left: "7%",
        top: "80%",
        color: "#FFF",
        display: "flex",
    },
    ".small": {
        fontSize: "65%",
        lineHeight: "200%",
    },
}