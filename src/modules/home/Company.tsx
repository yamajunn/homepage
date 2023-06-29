import { Box, SxProps, Theme } from "@mui/material";

export const Company = () => {
    const itemList = [
        { id: 1, text1: "会社名", text2: "株式会社テクノスタンダード" },
        { id: 2, text1: "設立日", text2: "2022年6月" },
        { id: 3, text1: "所在地", text2: "東京都渋谷区渋谷3-10-15 YKビル7F" },
        { id: 4, text1: "資本金", text2: "資本金" },
        { id: 5, text1: "代表取締役", text2: "加藤拓也" },
    ]
    return (
        <Box className="Company" sx={sx}>
            test
        </Box>
    );
};

const sx: SxProps<Theme> = {
    "&.Company": {
        width: "100%",
    },
    ".Title": {
        textAlign: "center",
        height: "200px",
    },
    ".text": {
    },
    ".Object": {
        display: "flex",
        justifyContent: "center",
    },
    ".num": {
        display: "flex",
        // textAlign: "center",
        width: "800px",
    },
    ".num2": {
        display: "flex",
        // textAlign: "center",
        width: "800px",
    },
    ".num3": {
        display: "flex",
        // textAlign: "center",
        width: "800px",
    },
    ".num4": {
        display: "flex",
        // textAlign: "center",
        width: "800px",
    },
    ".num5": {
        display: "flex",
        // textAlign: "center",
        width: "800px",
    },
    ".num6": {
        display: "flex",
        // textAlign: "center",
        width: "800px",
    },
    ".num7": {
        display: "flex",
        // textAlign: "center",
        width: "800px",
    },
    ".text1": {
        right: "100px",
        width: "400px",
        margin: "5px 50px 5px",
    },
    ".text2": {
        margin: "5px -200px 5px",
    },
    ".text3": {
        lineHeight: "5px",
        margin: "5px -200px 5px",
    },
    ".color": {
        color: "#FFFFFF99",
    }
}
