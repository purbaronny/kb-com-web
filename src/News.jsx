import { Component } from "react";
import ListItem from "./ListItem";
import Footer from "./Footer";

class News extends Component {

    state = {
        languageCode: "en-US",
        title: "News",
        cards: [{
            code: "ae",
            title: "KreditPlus Milik KB Kookmin Balikkan Rugi jadi Laba Rp95 Miliar di 2021 ",
            text1: "Perusahaan pembiayaan PT KB Finansial Multi Finance berhasil membalikkan rugi bersih di era pandemi alias periode 2020, menjadi laba Rp95,45 miliar pada 2021.",
            imgsrc: "Pictures/kreditplus2.jpg",
            linkSourceText: "Read More",
            linkTo: "https://finansial.bisnis.com/read/20220309/89/1508711/kreditplus-milik-kb-kookmin-balikkan-rugi-jadi-laba-rp95-miliar-di-2021",
            date: "Rabu, 09 Maret 2022  |  18:13 WIB"
        }, {
            code: "wd",
            title: "Ada Korean Link, Begini Peluang Besar KB Bukopin",
            text1: "Eksistensi PT Bank KB  Bukopin Tbk (BBKP) di Indonesia semakin menguat setiap tahunnya. Hal ini terjadi lantaran kinerja perseroan yang terus membaik, ditambah masuknya...",
            imgsrc: "Pictures/news2.jpeg",
            linkSourceText: "Read More",
            linkTo: "https://www.cnbcindonesia.com/market/20220228095611-17-318917/ada-korean-link-begini-peluang-besar-kb-bukopin",
            date: "Selasa, 01 March 2022  |  09:00"
        }, {
            code: "dm",
            title: "Transformasi KB Bukopin di 2022 Kian Terwujud",
            text1: "PT Bank KB Bukopin Tbk terus melakukan transformasi bisnis di tengah pandemi Covid-19. Dengan memanfaatkan keahlian KB Kookmin Bank dalam bidang teknologi, Perseroan akan menjalani proses transformasi dengan membangun sistem keuangan handal berbasis...",
            imgsrc: "Pictures/news2.jpeg",
            linkSourceText: "Read More",
            linkTo: "https://investasi.kontan.co.id/news/transformasi-kb-bukopin-di-2022-kian-terwujud ",
            date: " Selasa, 01 Maret 2022  |  11:49 WIB"
        }, {
            code: "ba",
            title: "Langkah KB Bukopin (BBKP) Menuju 'Perang' Bank Digital",
            text1: "Usai diambil alih konglomerasi KB Kookmin dari Korea Selatan, PT Bank KB Bukopin Tbk. (BBKP) mulai tancap gas mempercepat transformasi bisnis termasuk memperkuat lini digital.  Menurut Komisaris Utama BBKP Jerry Marmen, KB Kookmin selaku pengendali telah memiliki sepak terjang dan pengalaman matang di industri perbankan digital. Namun...",



            imgsrc: "Pictures/news3.jpeg",
            linkSourceText: "Read More",
            linkTo: "https://finansial.bisnis.com/read/20220217/90/1501911/langkah-kb-bukopin-bbkp-menuju-perang-bank-digital ",
            date: "Kamis, 17 Februari 2022  |  23:00 WIB"
        }, {
            code: "va",
            title: "Sudah Punya Wokee, Kok KB Bukopin Masih Mau Luncurkan Bank Digital?",
            text1: "PT Bank KB Bukopin Tbk. kian serius memasuki industri keuangan digital yang bakal direalisasikan melalui peluncuran bank digital dalam waktu dekat. Rencana itu terkuak setelah perseroan mengungkapkan bahwa pada awal Februari 2022 akan ada lompatan strategis, yakni penambahan ekosistem New Generation Banking System (NGBS). Padahal, jika ditelisik lebih jauh, KB Bukopin sudah memiliki Wokee, aplikasi perbankan digital yang diluncurkan sejak 2017. Tetapi, dalam sebuah paparan publik pada akhir 2021, perseroan menyatakan pangsa pasar dari produk itu belum maksimal.",
            imgsrc: "Pictures/news5.jfif",
            linkSourceText: "Read More",
            linkTo: "https://finansial.bisnis.com/read/20220131/90/1495374/sudah-punya-wokee-kok-kb-bukopin-masih-mau-luncurkan-bank-digital ",
            date: "Kamis, 31 January 2022  |  20:36 WIB"
        }, {
            code: "dmar",
            title: "Transformasi Digital Bank KB Bukopin Regional IV NEXT GENERATION BANKING SYSTEM (NGBS",
            text1: "Pembaharuan infrastruktur IT merupakan salah satu upaya Perseroan dalam memberikan pelayanan jasa keuangan yang handal. Krisis yang terjadi akibat pandemi di 2020 menjadi momentum bagi PT Bank KB Bukopin Tbk (BBKP/KB Bukopin) melakukan transformasi secara total, dari sisi kinerja hingga teknologi. Hadirnya KB Kookmin Bank sebagai pemegang saham pengendali di tengah pandemi Covid-19 memicu peningkatan kompetensi pegawai KB Bukopin secara keseluruhan. Berbagai program peningkatan kompetensi untuk SDM perusahaan seperti training dan sertifikasi telah gencar dilakukan, termasuk dalam hal ini yaitu peningkatan kompetensi SDM KB Bukopin Surabaya, ujar Suko Hadiananto selaku",
            imgsrc: "Pictures/news4.png",
            linkSourceText: "Read More",
            linkTo: "https://m.trustnews.id/read/1799/Transformasi-Digital-Bank-KB-Bukopin-Regional-IV-NEXT-GENERATION-BANKING-SYSTEM-NGBS ",
            date: "Minggu, 30 Januari 2022  |  10:09 WIB"
        }]
    }

    changeLanguage = (val) => {
        this.props.changeLanguage(val);
    }

    onLanguageClick = (value) => {
        this.setState({
            languageCode: value
        }, () => {
            this.changeLanguage(this.state.languageCode);
        });
    }

    componentDidMount() {
        fetch("./eventData.json")
            .then(response => response.json())
            .then(result => {
                for (var i = 0; i < result.length; i++) {
                    var obj = result[i];
                    if (obj.languageCode === this.props.languageCode) {
                        this.setState({
                            languageCode: obj.languageCode,
                            title: obj.title,
                            cards: obj.cards
                        });
                        break;
                    }
                }
                // console.log(result);
                // console.log(this.state.text1);
            });
    }

    componentDidUpdate(prevProps) {
        fetch("./newsData.json")
            .then(response => response.json())
            .then(result => {
                for (var i = 0; i < result.length; i++) {
                    var obj = result[i];
                    if (obj.languageCode === this.props.languageCode) {
                        this.setState({
                            languageCode: obj.languageCode,
                            title: obj.title,
                            cards: obj.cards
                        });
                        break;
                    }
                }
                // console.log(result);
                // console.log(this.state.text1);
            });
    }

    render() {
        return (
            <>
                <div className="my-5" style={{ marginTop: 100 }}>
                    <h1 className="text-center" style={{ color: "rgb(255, 188, 0)" }}>{this.state.title}</h1>
                </div>
                <div className="container-fluid mb-5">
                    <div className="row">
                        <div className="col-11 mx-auto">
                            <div className="row gy-4">
                                {this.state.cards.map((card =>
                                    <ListItem key={card.code} title={card.title} text1={card.text1} imgsrc={card.imgsrc} linkSourceText={card.linkSourceText} linkTo={card.linkTo} date={card.date} />
                                ))}
                            </div>

                        </div>

                    </div>

                </div>
                <Footer />
            </>
        );
    }
}

export default News;