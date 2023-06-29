import { Box, SxProps, Theme, Typography, Link } from "@mui/material";

export const Footer = () => {
    return (
        <Box className="Footer" sx={sx}>
            <Box className="num1">
                <Box className="Title"><Typography variant="h5" fontWeight={900} letterSpacing={-2}>🌐テクノテクノスタンダード</Typography></Box>
                <Box className="Post"><Typography>〒000-0000</Typography></Box>
                <Box className="Address"><Typography>東京都渋谷区渋谷3-10-15 YKビル7F</Typography></Box>
                <Box className="Link-Box">
                    <Link className="Link" href="#">ABOUT</Link>
                    <Link className="Link" href="#">SERVICE</Link>
                    <Link className="Link" href="#">COMPANY</Link>
                    <Link className="Link" href="#">CONTACT</Link>
                </Box>
            </Box>
            <Box className="num2">
                <Typography>© techno standard guild CO., LTD.</Typography>
            </Box>
        </Box>
    );
};

const sx: SxProps<Theme> = {
    "&.Footer": {
        width: "100%",
    },
    ".num1": {
        backgroundColor: "#373636",
        color: "#FFF"
    },
    ".Title": {
        textAlign: "center",
        paddingTop: "80px",
        height: "50px",
    },
    ".Post": {
        textAlign: "center",
    },
    ".Address": {
        textAlign: "center",
        paddingBottom: "30px",
    },
    ".Link": {
        width: "120px",
        color: "#FFF",
        textDecoration: "none",
        margin: "0 20px",
    },
    ".Link-Box": {
        height: "+100px",
        textAlign: "center",
    },
    ".num2": {
        textAlign: "center",
        margin: "20px 0 50px",
    },
};
