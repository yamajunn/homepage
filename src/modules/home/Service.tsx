import { Box, SxProps, Theme, Typography, Link, Button } from "@mui/material";
import ServiceImg1 from "../../resources/homepage/service_guild.png"
import ServiceImg2 from "../../resources/homepage/service_element.png"
import ServiceImg3 from "../../resources/homepage/service_education.png"

export const Service = () => {
    return (
        <Box className="Service" sx={sx}>
            <Box className="Service-Title">
                <Typography className="Service-Title-Title" variant="h1" fontWeight={400}><a className="aqua">S</a>ERVICE</Typography>
                <Typography className="Service-Title-Text" variant="h6" fontWeight={500}>事業内容</Typography>
            </Box>

            <Box className="Programmers-Guild">
                <Box className="Image1"><img className="Mainvisual-Image" src={ServiceImg1} alt="profile" /></Box>
                <Box className="Text1">
                    <Typography fontWeight={600}>プログラマーズギルド</Typography>
                    <Typography className="Text-guild" variant="h3" fontWeight={600}>Programmers Guild</Typography>
                    <Typography className="Text-kaihatu" variant="h5" fontWeight={700}>チーム開発の請負サービス</Typography>
                    <Typography className="Text-text">
                        副業人材を主体とした「業務委託サービス」です。 通常では人材派遣の市場に出てこないような大企業に勤めているベテランのエンジニアや開発の中核を担うフリーランスエンジニアが現在約100名ほど所属しています。副業を主体としているため長時間の拘束稼働はできませんが、トップレベルの知識と経験を活かして複数人でチームとなってクライアントの業務を請け負います。 クライアント側のチームメンバーと共同して開発を行うこともできるため、クライアント所属のエンジニアのスキルアップを行うことも可能です。
                    </Typography>
                    <Box className="Link">
                        <Typography className="Text-more" variant="h6">MORE</Typography>
                        <Button className="Button" variant="outlined">→</Button>
                    </Box>
                </Box>
            </Box>

            <Box className="Techno-Element">
                <Box className="Image2"><img className="Mainvisual-Image" src={ServiceImg2} alt="profile" /></Box>
                <Box className="Text2">
                    <Typography fontWeight={600}>テクノエレメント</Typography>
                    <Typography className="Text-guild" variant="h3" fontWeight={600}>Techno Element</Typography>
                    <Typography className="Text-kaihatu" variant="h5" fontWeight={700}>フレキシブルなSES事業</Typography>
                    <Typography className="Text-text">
                        お客さまのプロジェクトで人手が足りない場合に、「スポットで力を入れるため1ヶ月フルで稼働できるエンジニアが２、３人欲しい」、「特定のスキルを持った人材が1人が欲しい」といった、要望にも対応することができる SES 事業も手がけています。弊社は多くの人材をプールしているため、お客様の事業フェーズにあったご要望にフレキシブルにご提供できます。事業分野も Web やクライアントアプリの開発からインフラまで、業界・ジャンルに問わずさまざまな人材をご用意しております。
                        また、現役の Web/IT エンジニアも多数所属しているため、開発から得た知見や技術も提供することができます。結果として保守性が高く、事業の規模や今後のスケールに合わせて拡張しやすい、高品質な開発のサポートを行うことも可能です。
                    </Typography>
                    <Box className="Link">
                        <Typography className="Text-more" variant="h6">MORE</Typography>
                        <Button className="Button" variant="outlined">→</Button>
                    </Box>
                </Box>
            </Box>

            <Box className="Top-engineer-Experience-Program">
                <Box className="Image3"><img className="Mainvisual-Image" src={ServiceImg3} alt="profile" /></Box>
                <Box className="Text3">
                    <Typography fontWeight={600}>エンジニア教育</Typography>
                    <Typography className="Text-guild-top" variant="h3" fontWeight={600}>Top engineer Experience Program</Typography>
                    <Typography className="Text-kaihatu" variant="h5" fontWeight={700}>トップエンジニアとの開発を体験する</Typography>
                    <Typography className="Text-text">
                        バンタンテックフォードアカデミーという学校と共同でエンジニアリング教育を行っています。 一般的なスクールではプログラミングを教えたりするのみで、実際に必要な開発スキルは教えてもらえません。 そのためスクール出身の人材は使えないというイメージが付いてしまっています。 TEP では弊社で受けている案件をテクノスタンダードギルドのトップレベルのエンジニアと一緒に行うことで実際に必要なことを体験でき、 トップレベルの開発者のコードを読むことで動くだけのシステムではなく保守まで考えられた堅牢なシステム開発を経験できます。 TEP参加希望者に向けた事前授業も行っており、スクールでは教えていないエンジニアの必須スキルである、コマンド操作、サーバー構築、git、設計の基礎などのできて当たり前の基礎技術を5日間で教えることも行っています。
                    </Typography>
                    <Box className="Link">
                        <Typography className="Text-more" variant="h6">MORE</Typography>
                        <Button className="Button" variant="outlined">→</Button>
                    </Box>
                </Box>
            </Box>

        </Box>
    );
};

const sx: SxProps<Theme> = {
    "&.Service": {
        width: "100%",
    },
    ".Service-Title-Title": {
        textAlign: "center",
    },
    ".Service-Title-Text": {
        textAlign: "center",
    },
    ".Text1": {
        width: "500px",
        margin: "0px 80px 0",
    },
    ".Text-guild": {
        height: "60px",
        color: "#22A1B9",
    },
    ".Text-guild-top": {
        height: "130px",
        color: "#22A1B9",
    },
    ".Text-kaihatu": {
        height: "60px",
    },
    ".Text-text": {
        height: "300px",
    },
    ".Text-more": {
        color: "#22A1B9",
    },
    ".Link": {
        display: "flex",
    },
    ".Button": {
        width: "30px",
        height: "60px",
        left: "20px",
        top: "-10px",
        // background: "white",
        borderRadius: "30px",
        color: "#22A1B9",
    },
    ".Text2": {
        width: "600px",
        margin: "80px 100px 150px",
    },
    ".Text3": {
        width: "600px",
        margin: "0px 80px 0",
    },
    ".Image1": {
        width: "50%",
        borderImageWidth: "30%"
    },
    ".Image2": {
    },
    ".Image3": {
    },
    ".Service-Title": {

    },
    ".Programmers-Guild": {
        display: "flex",
        margin: "80px 0px 150px",
    },
    ".Techno-Element": {
        display: "flex",
        flexDirection: "row-reverse",
    },
    ".Top-engineer-Experience-Program": {
        display: "flex",
        margin: "0 0px 150px",
    },
    ".aqua": {
        color: "#22A1B9",
    },
};
