import { Box, SxProps, Theme, Typography } from "@mui/material";

export const Company = () => {
    return (
        <Box className="Company" sx={sx}>
            <Box className="Title">
                <Typography variant="h1">COMPANY</Typography>
                <Typography variant="h6">会社概要</Typography>
            </Box>
            <Box className="text">
                <Box className="num1" sx={{ borderBottom: 1 }}>
                    <Typography className="text1" variant="h6">会社名</Typography>
                    <Typography className="text2">株式会社テクノスタンダード</Typography>
                </Box>
                <Box className="num2" sx={{ borderBottom: 1 }}>
                    <Typography className="text1" variant="h6">設立日</Typography>
                    <Typography className="text2">2022年6月</Typography>
                </Box>
                <Box className="num3" sx={{ borderBottom: 1 }}>
                    <Typography className="text1" variant="h6">所在地</Typography>
                    <Typography className="text2">東京都渋谷区渋谷3-10-15 YKビル7F</Typography>
                </Box>
                <Box className="num4" sx={{ borderBottom: 1 }}>
                    <Typography className="text1" variant="h6">資本金</Typography>
                    <Typography className="text2">100万円</Typography>
                </Box>
                <Box className="num5" sx={{ borderBottom: 1 }}>
                    <Typography className="text1" variant="h6">代表取締役</Typography>
                    <Typography className="text2">加藤拓也</Typography>
                </Box>
                <Box className="num6">
                    <Typography className="text1" variant="h6">取引銀行取引先</Typography>
                    <Typography className="text2"><p>三菱UFJ銀行</p><p>SBIネット銀行</p></Typography>
                </Box>
                <Box className="num7">
                    <Typography className="text1" variant="h6">取引先</Typography>
                    <Typography className="text2"><p>株式会社バンタン</p><p>株式会社ジョブクラウン</p><p>株式会社メルメクス</p><p>マナルカ合同会社</p></Typography>
                </Box>
            </Box>
        </Box>
    );
};

const sx: SxProps<Theme> = {
    "&.Company": {
        width: "100%",
        backgroundColor: "#22A1B9",
        color: "#FFF",
    },
    ".Title": {
        textAlign: "center",
    },
    ".text": {
        margin: "0 auto",
    },
    ".num1": {
        display: "flex",
        textAlign: "center",
        width: "800px",
    },
    ".num2": {
        display: "flex",
        textAlign: "center",
        width: "800px",
    },
    ".num3": {
        display: "flex",
        textAlign: "center",
        width: "800px",
    },
    ".num4": {
        display: "flex",
        textAlign: "center",
        width: "800px",
    },
    ".num5": {
        display: "flex",
        textAlign: "center",
        width: "800px",
    },
    ".num6": {
        display: "flex",
        textAlign: "center",
        width: "800px",
    },
    ".num7": {
        display: "flex",
        textAlign: "center",
        width: "800px",
    },
    ".text1": {
        width: "500px",
    }
}
