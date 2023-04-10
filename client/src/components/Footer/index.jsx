import "./footer.css";

function Footer(){
    return (
      <footer className="footer">
        <ul className="footer__social">
          <li>
            <a
              href="https://www.linkedin.com/in/jeffer-andres-rojas-herrera-20a735210/"
              target="_blank" rel="noreferrer"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a href="https://github.com/jarher" target="_blank" rel="noreferrer">
              Github
            </a>
          </li>
        </ul>
        <button className="footer__logo">
          <a href="#">
            <img src="/img/logo.png" alt="logo org" />
          </a>
        </button>
        <div className="footer__author">
          <p>Desarrollado por Jeffer Rojas</p>
        </div>
      </footer>
    );
}

export default Footer;