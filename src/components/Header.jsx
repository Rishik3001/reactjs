import { GiArtificialHive } from "react-icons/gi";

const Header = () => {
    return(
        <header className=" py-3 px-2">
            <div className="logo">
            <GiArtificialHive />
            </div>
           <div className="navbar">
           <ul className="navbar-links">
                <li><a href="#" className="nav-link px-2 ">Home</a></li>
                <li><a href="#" className="nav-link px-2 ">Discover</a></li>
                <li><a href="#" className="nav-link px-2 ">Brands</a></li>
                <li><a href="#" className="nav-link px-2 ">Creators</a></li>
            </ul>

            <div className="">
                <button type="button" className="btn" style={{fontWeight: "600", fontSize: "16px"}}>Login</button>
                <button type="button" className="btn" style={{fontWeight: "600", fontSize: "16px"}}>Sign-up</button>
            </div>
           </div>
        </header>
    );
}
export default Header;