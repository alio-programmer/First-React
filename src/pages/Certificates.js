import { useNavigate } from "react-router-dom";
export function Certificates() {

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
        <div>
            <div className="header">
                <h1>Certificates</h1>
            </div>
            <div className="navigation1">
                <button className="button1" onClick={navigatetologin}>Login</button>
                <button className="button1" onClick={navigatetohome}>home</button>
                <button className="button1" onClick={navigatetocertificates}>Certificates</button>
                <button className="button1" onClick={navigatetoabout}>about</button>
                <button className="button1" onClick={navigatetoprofile}>Contact</button>
            </div>
        </div>
    );
}
export default Certificates;