import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { home } from "../../actions/home";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";
import whatsapp from "../../assets/whatsapp.svg";
import email from "../../assets/email.svg";
import logo from "../../assets/logo.svg";
import "./footer.scss";

const Footer = () => {
  const dispatch = useDispatch();
  const { slogan, programs, footerSubmenu, contact } = useSelector(
    (state) => state.home
  );

  useEffect(() => {
    dispatch(home());
  }, [dispatch]);

  return (
    <footer>
      <article className="footer-slogan">
        <p className="p-small">
          {slogan.indexOf(".") >= 0 && slogan.split(".")[0]}
        </p>
        <p className="p-large">
          {slogan.indexOf(".") >= 0 && slogan.split(".")[1]}
        </p>
      </article>

      <section>
        <article className="footer-article">
          <img className="logo" src={logo} alt="Logo V_camp" />
          <div className="footer-nav">
            <nav className="footer-nav">
              {React.Children.toArray(
                footerSubmenu.map((submenu) => (
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {submenu}
                  </a>
                ))
              )}
            </nav>
          </div>
        </article>

        <article className="footer-article">
          <h3 className="nav-title">Programas</h3>
          <nav className="footer-nav">
            {React.Children.toArray(
              programs.map((program) => (
                <a
                  href="https://www.google.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  {program}
                </a>
              ))
            )}
          </nav>
        </article>

        <article className="footer-article">
          <h3 className="nav-title">Contactanos</h3>

          <nav className="footer-nav">
            {contact && contact.length > 0 && (
              <>
                <a href="mailto:consultas@vcamp.com">
                  <img src={email} alt="email" /> {contact[0]?.email}
                </a>
                <a href="tel:11567882355">
                  <img src={whatsapp} alt="whatsapp" /> {contact[1]?.telephone}
                </a>
              </>
            )}

            <nav className="social-media">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="social-media-icon"
              >
                <img src={facebook} alt="facebook" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="social-media-icon"
              >
                <img src={instagram} alt="instagram" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="social-media-icon"
              >
                <img src={linkedin} alt="linkedin" />
              </a>
            </nav>
          </nav>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
