import instagram from "../img/instagram.png";
import whatsap from "../img/whatsap.png";
import github from "../img/github.png";
import linkedin from "../img/linkedin.png";
function NavBarTop() {
  return (
    <>
      <ul className="navUlTop">
        <li className="navLiTop">
          <a href="default.asp" className="NavA">
            <img src={instagram} alt="instagram"></img>
            <p>Instagram</p>
          </a>
        </li>
        <li className="navLiTop">
          <a href="news.asp" className="NavA">
            <img src={whatsap} alt="whatsap"></img>
            <p>Whatsapp</p>
          </a>
        </li>
        <li className="navLiTop">
          <a href="contact.asp" className="NavA">
            <img src={github} alt="github"></img>
            <p>Github</p>
          </a>
        </li>
        <li className="navLiTop">
          <a href="about.asp" className="NavA">
            <img src={linkedin} alt="linkedin"></img>
            <p>Linkedin</p>
          </a>
        </li>
      </ul>
    </>
  );
}
export default NavBarTop;
