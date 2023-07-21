import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  const navigatetologin = () => {
    navigate('/login')
  };
  const navigatetohome = () => {
    navigate('/')
  };
  const navigatetoabout = () => {
    navigate('/about')
  };
  const navigatetoprofile = () => {
    navigate('/profile')
  };
  const navigatetocertificates = () => {
    navigate('/certificates')
  };
  return (
    <div className="Home">
        <div className="header">
          <h1>NAMASTE</h1>
        </div>
        <div className="navigation1">
          <button className="button1" onClick={navigatetologin}>Login</button>
          <button className="button1" onClick={navigatetohome}>home</button>
          <button className="button1" onClick={navigatetocertificates}>Certificates</button>
          <button className="button1" onClick={navigatetoabout}>about</button>
          <button className="button1" onClick={navigatetoprofile}>Contact</button>
        </div>
        <div className="imagecontainer">
          <div className="image">
            <img id="mainimg" src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif" alt="coding"></img>
          </div>
          <div className="info">
            <span id="start">I am Gaurav Singh Bisht</span>
            <span>I'm a Software Engineer and Data Scientist based in Pune, India.</span>
            <span>I am very comfortable in working with multiple languages like C++, Python and Java.</span>
            <span>I like to solve DSA question and I am good at problem solving.</span>
            <span>I like to analyze, clean and make effective models on data. Hence I like Data Science as a field.</span>
            <span>I am also learning Web Development and have already made various websites( like this one)</span>
            <span id="end">You can know more about me by navigating through the navigation bar above there.</span>
          </div>
        </div>

        <div className="footer">© github.com/alio-programmer 2023-24</div>
        
        
    </div>
  );
}

export default Home;