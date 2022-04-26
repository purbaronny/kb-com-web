import { Component } from "react";
import ListItem from "./ListItem";
import Footer from "./Footer";

class News extends Component {
    constructor(props) {
        super(props);
        if (props.languageCode === "en-US") {
            this.state = {
                languageCode: "en-US",
                title: "News",
                cards: [{
                    code: "ae",
                    title: "KB Kookmin's CreditPlus Turns Loss into Profit of IDR 95 Billion in 2021",
                    text1: "The finance company PT KB Finansia Multi Finance managed to reverse the net loss in the pandemic era, aka the 2020 period, to a profit of IDR 95.45 billion in 2021.  Based on the company's financial report published in the Indonesian Business Daily on Wednesday (9/3/2022), this multi- brand CreditPlus in 2020 recorded a net loss of IDR 230.17 billion. The loss was due to a total expense of Rp1.47 trillion that could not be covered by a total income of Rp1.18 trillion. Meanwhile, in the 2021 period, although total expenses still rose to Rp. 1.54 trillion, total revenues soared to Rp. 1.66 trillion.  ",
                    imgsrc: "Pictures/kreditplus2.jpg",
                    linkSourceText: "Read more",
                    linkTo: "https://finansial.bisnis.com/read/20220309/89/1508711/kreditplus-milik-kb-kookmin-balikkan-rugi-jadi-laba-rp95-miliar-di-2021",
                    date: "Wednesday, March 9 2022  |  06:13 PM"
                }, {
                    code: "wd",
                    title: "There's a Korean Link, this is a great opportunity for KB Bukopin",
                    text1: "The existence of PT Bank KB Bukopin Tbk (BBKP) in Indonesia is getting stronger every year. This happened because the company's performance continued to improve, plus the entry of Kookmin Bank, the largest bank in South Korea, as the controlling shareholder (PSP) of KB Bukopin. Since being controlled by Kookmin Bank, KB Bukopin's business expansion has become increasingly unstoppable because the company is now able to further expand its network and financing and funding business relying on the network of Korean companies in Indonesia. It is certain that in the future there will be more and more Korean companies that are members of the Korean Link or a network of companies from South Korea who entrust their financial management through KB Bukopin.",
                    imgsrc: "Pictures/news2.jpeg",
                    linkSourceText: "Read More",
                    linkTo: "https://www.cnbcindonesia.com/market/20220228095611-17-318917/ada-korean-link-begini-peluang-besar-kb-bukopin",
                    date: "Tuesday, March 1 2022  |  09:00 AM"
                }, {
                    code: "dm",
                    title: "Bukopin's KB transformation in 2022 is becoming more and more real",
                    text1: "PT Bank KB Bukopin Tbk continues to transform its business in the midst of the Covid-19 pandemic. By leveraging KB Kookmin Bank's expertise in technology, the Company will undergo a transformation process by building a reliable financial system based on corporate customers to MSMEs.  KB Bukopin continues to build an ecosystem of mass affluent customers with a variety of retail product services and utilizing digital banking. Kim Jong Un, Korean Link Business Division Head of KB Bukopin stated that in 2022, KB Bukopin plans to pursue different strategic goals from last year.",
                    imgsrc: "Pictures/news2.jpeg",
                    linkSourceText: "Read More",
                    linkTo: "https://investasi.kontan.co.id/news/transformasi-kb-bukopin-di-2022-kian-terwujud ",
                    date: "Tuesday, March 1 2022  |  11:49 PM"
                }, {
                    code: "ba",
                    title: "KB Bukopin (BBKP) Steps Towards a Digital Bank 'War'",
                    text1: "After being taken over by the KB Kookmin conglomerate from South Korea, PT Bank KB Bukopin Tbk. (BBKP) has started to step on the gas to accelerate business transformation, including strengthening the digital line. According to BBKP President Commissioner Jerry Marmen, KB Kookmin as controller has had a lot of experience and experience in the digital banking industry. However, in his capacity, Jerry will try to emphasize that the transfer of experience into the BBKP management structure will run smoothly.",
                    imgsrc: "Pictures/news3.jpeg",
                    linkSourceText: "Read More",
                    linkTo: "https://finansial.bisnis.com/read/20220217/90/1501911/langkah-kb-bukopin-bbkp-menuju-perang-bank-digital ",
                    date: "Thursday, February 17 2022  |  11:00 PM"
                }, {
                    code: "va",
                    title: "Already Have a Wokee, Why Does KB Bukopin Still Want to Launch a Digital Bank?",
                    text1: "PT Bank KB Bukopin Tbk. increasing serious in entering the digital finance industry which will be realized through the launch of a digital bank in the near future. The plan was revealed after the company revealed that in early February 2022 there would be a strategic leap, namely the addition of the New Generation Banking System (NGBS) ecosystem. In fact, if examined further, KB Bukopin already has Wokee, a digital banking application that has been launched since 2017. However, in a public expose at the end of 2021, the company stated that the market share of the product was not maximized.",
                    imgsrc: "Pictures/news5.jfif",
                    linkSourceText: "Read More",
                    linkTo: "https://finansial.bisnis.com/read/20220131/90/1495374/sudah-punya-wokee-kok-kb-bukopin-masih-mau-luncurkan-bank-digital ",
                    date: "Thursday, 31 January  |  08:36 PM"
                }, {
                    code: "dmar",
                    title: "Digital Transformation of Bank KB Bukopin Regional IV NEXT GENERATION BANKING SYSTEM (NGBS)",
                    text1: "Renewal of IT infrastructure is one of the Company's efforts in providing reliable financial services. The crisis that occurred due to the pandemic in 2020 became a momentum for PT Bank KB Bukopin Tbk (BBKP/KB Bukopin) to make a total transformation, from performance to technology. The presence of KB Kookmin Bank as a controlling shareholder in the midst of the Covid-19 pandemic has triggered an increase in the competence of KB Bukopin employees as a whole. Various competency improvement programs for the companys HR such as training and certification have been intensively carried out, including in this case the improvement of HR competence of KB Bukopin Surabaya , said Suko Hadiananto as Region Head Regional IV to TrustNews.",
                    imgsrc: "Pictures/news4.png",
                    linkSourceText: "Read More",
                    linkTo: "https://m.trustnews.id/read/1799/Transformasi-Digital-Bank-KB-Bukopin-Regional-IV-NEXT-GENERATION-BANKING-SYSTEM-NGBS",
                    date: "Sunday, January 30 2022  |  10:09 AM"
                }]
            }

        } else if (props.languageCode === "id-ID") {
            this.state = {
                languageCode: "id-ID",
                title: "Berita",
                cards: [
                    {
                        code: "ae",
                        title: "KreditPlus Milik KB Kookmin Balikkan Rugi jadi Laba Rp95 Miliar di 2021",
                        text1: "Perusahaan pembiayaan PT KB Finansial Multi Finance berhasil membalikkan rugi bersih di era pandemi alias periode 2020, laba Rp,45 miliar pada 2021 Berdasarkan laporan keuangan perusahaan yang terbit di Harian Bisnis Indonesia pada Rabu (9/3/2022), multifinance dengan brand KreditPlus ini pada 2020 mencatatkan rugi bersih Rp230,17 miliar. Rugi menyebabkan total beban Rp1,47 triliun yang tidak dapat ditutup oleh total pendapatan Rp1,18 triliun. Sementara itu, pada periode 2021, walaupun total beban masih naik menjadi Rp1,54 triliun, tetapi total pendapatan melejit menjadi Rp1,66 triliun.",
                        imgsrc: "Pictures/kreditplus2.jpg",
                        linkSourceText: "Selengkapnya",
                        linkTo: "https://finansial.bisnis.com/read/20220309/89/1508711/kreditplus-milik-kb-kookmin-balikkan-rugi-jadi-laba-rp95-miliar-di-2021",
                        date: "Rabu, 09 Maret 2022  |  18:13 WIB"
                    },
                    {
                        code: "wd",
                        title: "Ada Korean Link, Begini Peluang Besar KB Bukopin",
                        text1: "Eksistensi PT Bank KB Bukopin Tbk (BBKP) di Indonesia semakin menguat setiap tahunnya. Hal ini terjadi lantaran kinerja perseroan yang terus membaik, ditambah masuknya Kookmin Bank, bank terbesar di Korea Selatan, sebagai pemegang saham pengendali (PSP) KB Bukopin. Sejak dikendalikan Kookmin Bank, ekspansi bisnis KB Bukopin semakin tak terbendung lantaran perusahaan kini bisa semakin meluaskan jaringan dan bisnis pembiayaan serta pendanaan mengandalkan jaringan perusahaan-perusahaan Korea yang ada di Indonesia. Dipastikan ke depannya ada semakin banyak perusahaan Korea yang tergabung dalam Korean Link atau jaringan perusahaan asal Korsel yang mempercayakan pengelolaan keuangan melalui KB Bukopin.",
                        imgsrc: "Pictures/news2.jpeg",
                        linkSourceText: "Selengkapnya",
                        linkTo: "https://www.cnbcindonesia.com/market/20220228095611-17-318917/ada-korean-link-begini-peluang-besar-kb-bukopin",
                        date: "Selasa, 01 March 2022  |  09:00"
                    },
                    {
                        code: "dm",
                        title: "Transformasi KB Bukopin di 2022 Kian Terwujud",
                        text1: "PT Bank KB Bukopin Tbk terus melakukan transformasi bisnis di tengah pandemi Covid-19. Dengan memanfaatkan keahlian KB Kookmin Bank dalam bidang teknologi, Perseroan akan menjalani proses transformasi dengan membangun sistem keuangan handal berbasis pelanggan korporasi hingga UMKM. KB Bukopin melanjutkan membangun ekosistem nasabah mass affluent dengan beragam layanan produk ritel dan memanfaatkan digital banking. Kim Jong Un, Korean Link Business Division Head KB Bukopin menyatakan pada tahun 2022, KB Bukopin berencana untuk mengejar tujuan strategis yang berbeda dari tahun lalu.",
                        imgsrc: "Pictures/news2.jpeg",
                        linkSourceText: "Selengkapnya",
                        linkTo: "https://investasi.kontan.co.id/news/transformasi-kb-bukopin-di-2022-kian-terwujud ",
                        date: "Selasa, 01 Maret 2022  |  11:49 WIB"
                    },
                    {
                        code: "ba",
                        title: "Langkah KB Bukopin (BBKP) Menuju 'Perang' Bank Digital",
                        text1: "Usai diambil alih konglomerasi KB Kookmin dari Korea Selatan, PT Bank KB Bukopin Tbk. (BBKP) mulai tancap gas mempercepat transformasi bisnis termasuk memperkuat lini digital.  Menurut Komisaris Utama BBKP Jerry Marmen, KB Kookmin selaku pengendali telah memiliki sepak terjang dan pengalaman matang di industri perbankan digital. Namun, dalam kapasitasnya, Jerry akan mencoba menekankan agar transfer pengalaman tersebut ke dalam struktur manajemen BBKP berjalan mulus.",
                        imgsrc: "Pictures/news3.jpeg",
                        linkSourceText: "Selengkapnya",
                        linkTo: "https://finansial.bisnis.com/read/20220217/90/1501911/langkah-kb-bukopin-bbkp-menuju-perang-bank-digital ",
                        date: "Kamis, 17 Februari 2022  |  23:00 WIB"
                    },
                    {
                        code: "va",
                        title: "Sudah Punya Wokee, Kok KB Bukopin Masih Mau Luncurkan Bank Digital?",
                        text1: "PT Bank KB Bukopin Tbk. kian serius memasuki industri keuangan digital yang bakal direalisasikan melalui peluncuran bank digital dalam waktu dekat. Rencana itu terkuak setelah perseroan mengungkapkan bahwa pada awal Februari 2022 akan ada lompatan strategis, yakni penambahan ekosistem New Generation Banking System (NGBS). Padahal, jika ditelisik lebih jauh, KB Bukopin sudah memiliki Wokee, aplikasi perbankan digital yang diluncurkan sejak 2017. Tetapi, dalam sebuah paparan publik pada akhir 2021, perseroan menyatakan pangsa pasar dari produk itu belum maksimal.",
                        imgsrc: "Pictures/news5.jfif",
                        linkSourceText: "Selengkapnya",
                        linkTo: "https://finansial.bisnis.com/read/20220131/90/1495374/sudah-punya-wokee-kok-kb-bukopin-masih-mau-luncurkan-bank-digital ",
                        date: "Kamis, 31 January 2022  |  20:36 WIB"
                    },
                    {
                        code: "dmar",
                        title: "Transformasi Digital Bank KB Bukopin Regional IV NEXT GENERATION BANKING SYSTEM (NGBS)",
                        text1: "Pembaharuan infrastruktur IT merupakan salah satu upaya Perseroan dalam memberikan pelayanan jasa keuangan yang handal. Krisis yang terjadi akibat pandemi di 2020 menjadi momentum bagi PT Bank KB Bukopin Tbk (BBKP/KB Bukopin) melakukan transformasi secara total, dari sisi kinerja hingga teknologi. Hadirnya KB Kookmin Bank sebagai pemegang saham pengendali di tengah pandemi Covid-19 memicu peningkatan kompetensi pegawai KB Bukopin secara keseluruhan. Berbagai program peningkatan kompetensi untuk SDM perusahaan seperti training dan sertifikasi telah gencar dilakukan, termasuk dalam hal ini yaitu peningkatan kompetensi SDM KB Bukopin Surabaya, ujar Suko Hadiananto selaku",
                        imgsrc: "Pictures/news4.png",
                        linkSourceText: "Selengkapnya",
                        linkTo: "https://m.trustnews.id/read/1799/Transformasi-Digital-Bank-KB-Bukopin-Regional-IV-NEXT-GENERATION-BANKING-SYSTEM-NGBS",
                        date: "Minggu, 30 Januari 2022  |  10:09 WIB"
                    }
                ]
            }
        } else if (props.languageCode === "ko-KR") {
            this.state = {
                languageCode: "ko-KR",
                title: "소식",
                cards: [
                    {
                        code: "ae",
                        title: "KB국민 신용플러스, 2021년 손실액 950억 루피아로 전환",
                        text1: "금융 회사 PT KB 금융 멀티 파이낸스(PT KB Finansial Multi Finance)는 2020년으로 알려진 팬데믹 시대 순 손실을 2021년 954억 5000만 IDR 954억 5000만 IDR의 이익으로 역전시켰습니다. 2020. 손실은 1조 4700억 루피아의 총 비용으로 인해 발생하며, 이는 1조 1800억 루피아의 총 수익으로 충당할 수 없습니다. 한편, 2021년 기간에 총 비용은 여전히 ​​Rp입니다. 총수입은 1조5400억원, 1조5400억원으로 늘었다. 1조6천억.",
                        imgsrc: "Pictures/kreditplus2.jpg",
                        linkSourceText: "더 읽어보기",
                        linkTo: "https://finansial.bisnis.com/read/20220309/89/1508711/kreditplus-milik-kb-kookmin-balikkan-rugi-jadi-laba-rp95-miliar-di-2021",
                        date: "Wednesday, March 9 2022  |  06:13 PM"
                    },
                    {
                        code: "wd",
                        title: "한국링크 있다 KB부코핀에게는 좋은 기회다",
                        text1: "인도네시아에서 PT Bank KB Bukopin Tbk(BBKP)의 존재는 해가 갈수록 강해지고 있습니다. 이는 회사의 실적이 지속적으로 개선되고 한국 최대 은행인 국민은행이 KB부코핀의 지배주주(PSP)로 진입했기 때문입니다. 국민은행에 의해 지배된 이후 KB부코핀의 사업 확장은 인도네시아에서 한국 기업의 네트워크에 의존하여 네트워크와 파이낸싱 및 펀딩 사업을 더욱 확장할 수 있게 됨에 따라 점점 더 멈출 수 없게 되었습니다. 앞으로 KB 부코핀을 통해 재정 관리를 위탁하는 한국 회사 또는 한국 기업 네트워크의 회원인 한국 기업이 점점 더 많아질 것이 확실합니다.",
                        imgsrc: "Pictures/news2.jpeg",
                        linkSourceText: "더 읽어보기",
                        linkTo: "https://www.cnbcindonesia.com/market/20220228095611-17-318917/ada-korean-link-begini-peluang-besar-kb-bukopin",
                        date: "Tuesday, March 1 2022  |  09:00 AM"
                    },
                    {
                        code: "dm",
                        title: "2022년 KB부코핀 변신이 점점 현실이 되고 있다",
                        text1: "PT Bank KB Bukopin Tbk는 Covid-19 대유행 속에서도 사업을 계속 변화시키고 있습니다. KB국민은행의 기술력을 바탕으로 기업고객을 기반으로 중소기업에 이르기까지 안정적인 금융시스템을 구축하는 변혁의 과정을 거치게 됩니다. KB부코핀은 다양한 리테일 상품 서비스와 디지털 뱅킹을 활용하여 대중적 풍요로운 고객 생태계를 지속적으로 구축하고 있습니다. KB부코핀 한국링크사업부장 김정은은 2022년 KB부코핀이 지난해와 다른 전략 목표를 추진할 계획이라고 밝혔다.",
                        imgsrc: "Pictures/news2.jpeg",
                        linkSourceText: "더 읽어보기",
                        linkTo: "https://investasi.kontan.co.id/news/transformasi-kb-bukopin-di-2022-kian-terwujud ",
                        date: "Tuesday, March 1 2022  |  11:49 PM"
                    },
                    {
                        code: "ba",
                        title: "KB부코핀, 디지털뱅크 '전쟁' 본격 나선다",
                        text1: "한국에서 KB 국민 대기업, PT Bank KB Bukopin Tbk에 인수 된 후. (BBKP)는 디지털 라인 강화를 포함하여 비즈니스 혁신을 가속화하기 위해 가스를 밟기 시작했습니다. BBKP의 Jerry Marmen 커미셔너에 따르면 KB 국민은 컨트롤러로 디지털 뱅킹 업계에서 많은 경험과 경험을 가지고 있습니다. 그러나 Jerry는 자신의 자격으로 BBKP 관리 구조로의 경험 이전이 원활하게 진행될 것임을 강조하려고 노력할 것입니다.",
                        imgsrc: "Pictures/news3.jpeg",
                        linkSourceText: "더 읽어보기",
                        linkTo: "https://finansial.bisnis.com/read/20220217/90/1501911/langkah-kb-bukopin-bbkp-menuju-perang-bank-digital ",
                        date: "Thursday, February 17 2022  |  11:00 PM"
                    },
                    {
                        code: "va",
                        title: "이미 잠이 깼는데 왜 KB 부코핀은 여전히 ​​디지털 은행을 시작하려고 합니까?",
                        text1: "PT은행 KB부코핀 Tbk. 머지않은 장래에 디지털 뱅크의 출범을 통해 실현될 디지털 금융 산업의 진출이 본격화되고 있습니다. 이 계획은 회사가 2022년 2월 초에 NGBS(New Generation Banking System) 생태계의 추가라는 전략적 도약이 있을 것이라고 밝힌 후 공개되었습니다. 실제로 KB부코핀은 2017년부터 론칭한 디지털뱅킹 애플리케이션 '워키(Wokee)'를 더 자세히 들여다보면 이미 보유하고 있다. 하지만 2021년 말 공개된 공시에서 KB부코핀은 해당 제품의 시장 점유율을 극대화하지 못했다고 밝혔다.",
                        imgsrc: "Pictures/news5.jfif",
                        linkSourceText: "더 읽어보기",
                        linkTo: "https://finansial.bisnis.com/read/20220131/90/1495374/sudah-punya-wokee-kok-kb-bukopin-masih-mau-luncurkan-bank-digital ",
                        date: "Thursday, 31 January  |  08:36 PM"
                    },
                    {
                        code: "dmar",
                        title: "Bank KB Bukopin Regional IV NEXT GENERATION BANKING SYSTEM(NGBS) 디지털 트랜스포메이션",
                        text1: "IT 인프라의 리뉴얼은 안정적인 금융 서비스를 제공하기 위한 회사의 노력 중 하나입니다. 2020년 대유행으로 발생한 위기는 PT Bank KB Bukopin Tbk(BBKP/KB Bukopin)가 성능에서 기술로 전면적인 전환을 하는 계기가 되었습니다. 코로나19 사태 속에서 KB국민은행이 지배주주로 나서면서 KB부코핀 임직원들의 역량이 전반적으로 높아졌다. TrustNews의 지역 책임자인 Suko Hadiananto는 KB Bukopin Surabaya의 HR 역량 향상을 포함하여 교육 및 인증과 같은 회사 HR을 위한 다양한 역량 개선 프로그램이 집중적으로 수행되었습니다.",
                        imgsrc: "Pictures/news4.png",
                        linkSourceText: "더 읽어보기",
                        linkTo: "https://m.trustnews.id/read/1799/Transformasi-Digital-Bank-KB-Bukopin-Regional-IV-NEXT-GENERATION-BANKING-SYSTEM-NGBS",
                        date: "Sunday, January 30 2022  |  10:09 AM"
                    }
                ]
            }
        }

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
                            cards: obj.cards,
                            linkSourceText: obj.linkSourceText
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
                <section id="news">
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
                </section>
            </>
        );
    }
}

export default News;