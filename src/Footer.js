import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee, faWarning } from "@fortawesome/free-solid-svg-icons"
import { faInstagram, faYoutube, faTwitter, faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons"
import 'bootstrap-icons/font/bootstrap-icons.css';
const Footer = () => {
    return (

        /*
        <footer class="footer-basic" style={{ fontSize: 25, textAlign: "center", backgroundColor: "#f8f9fa", height: 200, marginTop: 150 }}>

            <div class="row mb-2 pt-5">
                <div class="col">
                    <h6 style={{ fontSize: 14, fontFamily: "KGBF Display,sans-serif" }}>Follow Us on</h6>
                </div>
            </div>

            <div class="row fs-5 mb-2">
                <div class="col">
                    <a href="https://www.instagram.com/kbds_id/" target={"_blank"}><i class="bi bi-instagram" style={{ color: "#d62976", padding: 5 }}></i></a>
                    <a href="https://www.linkedin.com/in/pt-kb-data-systems-indonesia-6b873b223/" target={"_blank"}><i class="bi bi-linkedin" style={{ color: "#1DA1F2", padding: 5 }}></i></a>

                </div>
            </div>

            <div class="row justify-content-center">
                <div class="col" style={{ fontSize: 14, color: "#8e8e8e" }}>
                    <p>Copyright(c) 2022, PT KB Data Systems Indonesia</p>
                    <p>All Right Reserved.</p>

                </div>
            </div>


        </footer >

        */




        <div className="container-fluid" style={{ backgroundColor: "#f8f9fa", height: 200, marginTop: 150 }}>
            <footer className="footer-basic" style={{ fontSize: 25, textAlign: "center", marginTop: 100 }}>

                <ul className="list-inline pt-3">
                    <p style={{ fontSize: 14, fontFamily: "KGBF Display,sans-serif" }}>Follow Us on</p>
                    <li className="list-inline-item"><a href="https://www.instagram.com/kbds_id/" target={"_blank"}><FontAwesomeIcon icon={faInstagram} style={{ color: "#d62976" }}></FontAwesomeIcon></a></li>
                    <li className="list-inline-item"><a href="https://www.linkedin.com/in/pt-kb-data-systems-indonesia-6b873b223/" target={"_blank"}><FontAwesomeIcon icon={faLinkedin} style={{ color: "#1DA1F2" }}></FontAwesomeIcon></a></li>
                    <li className="list-inline-item"><a href="https://www.facebook.com/KB-Data-Systems-Indonesia-106688835304194" target={"_blank"}><FontAwesomeIcon icon={faFacebook} style={{ color: "blue" }}></FontAwesomeIcon></a></li>

                </ul>

                <div className="text-center" style={{ fontSize: 14, color: "black", fontFamily: "KGBF Display,sans-serif" }}>
                    <p>Copyright(c) 2022, KB Data Systems Indonesia</p>
                    <p>All Right Reserved.</p>
                </div>


            </footer>
        </div>
    )
}

export default Footer;