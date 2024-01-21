import { FaSearch, FaUser, FaBell } from "react-icons/fa";
import NetflixLogo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="absolute top-0 w-full">
    <div className="flex justify-between text-white p-4">
        <div className="flex items-center">
        <img src={NetflixLogo} alt="Netflix Logo" className="w-32 h-16 mr-4" />

        <ul className="sm:flex gap-4 hidden ">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by language</li>
        </ul>
      </div>

      <div className="flex gap-4 items-center">
        <FaSearch />

        <FaBell />

        <FaUser />

        
      </div>
    </div>
    </div>
  );
};

export default Navbar;
