import { Box, SxProps, Theme, Typography, backdropClasses } from "@mui/material";
import AboutImg from "../../resources/homepage/about_illustration.png"


export const About = () => {
    return (
        <Box className="About" sx={sx}>
            <Box className="About-Title">
                <Typography className="About-Title-Title" variant="h1" fontWeight={400}><a className="About-Text-Lightblue">A</a>BOUT</Typography>
                <Typography className="About-Title-Sub" variant="h6" fontWeight={600}>私たちについて</Typography>
            </Box>
            <img className="About-Image" src={AboutImg} alt="profile" />
            <Box className="About-Text">
                <Typography fontWeight={450}>
                    <p>副業人材を主体とした<a className="About-Text-Lightblue">「業務委託サービス」</a>です。</p>
                    <p>通常では人材派遣の市場に出てこないような大企業に勤めているベテランのエンジニアや開発の中核を担う</p>
                    <p>フリーランスエンジニアが<a className="About-Text-Lightblue">現在約100名</a>ほど所属しています。</p>
                    <p>副業を主体としているため長時間の拘束稼働はできませんが、</p>
                    <p>トップレベルの知識と経験を活かして複数人でチームとなってクライアントの業務を請け負います。</p>
                    <p>クライアント側のチームメンバーと共同して開発を行うこともできるため、</p>
                    <p><a className="About-Text-Lightblue">クライアント所属のエンジニアのスキルアップ</a>を行うことも可能です。</p>
                </Typography>
            </Box>
        </Box>
    );
};

const sx: SxProps<Theme> = {
    "&.About": {
        width: "100%",
        height: "952",
        backgroundColor: "rgba(34,161,185,0.1)"
    },
    ".About-Title": {
        height: "200px",
    },
    ".About-Title-Title": {
        textAlign: "center",
    },
    ".About-Title-Sub": {
        textAlign: "center",
    },
    ".About-Text": {
        textAlign: "center",
        height: "400px",
    },
    ".About-Text-Lightblue": {
        color: "#22A1B9"
    },
    ".About-Image": {
        width: "100%",
    },
};
