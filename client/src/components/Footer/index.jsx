import "./footer.css";

function Footer(){
    return <footer className="footer">
        <ul className="footer__social">
            <li><a href="" target="_blank">Linkedin</a></li>
        </ul>
        <button className="footer__logo">
            <a href="#"><img src="/img/logo.png" alt="logo org" /></a>
        </button>
        <div className="footer__author">
            <p>Desarrollado por Jeffer Rojas</p>
        </div>
    </footer>
}

export default Footer;