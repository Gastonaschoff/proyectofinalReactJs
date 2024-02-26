import LogoMc from "./LogoMc";
import NavBar from "./NavBar";


const Header = () => {
    return (
        <div className="container  my-2">
            <div className="row ">
                <div className="col-md-2 text-start">
                  <LogoMc tamano={120}/> 
                </div>
                <div className="col-md-11d-flex align-items-center">
                   <NavBar/>
                </div>     
            </div>
        </div>
    )
}

export default Header;