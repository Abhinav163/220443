import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-around">
      <Link to="/users">Top Users</Link>
      <Link to="/trending">Trending Posts</Link>
      <Link to="/feed">Feed</Link>
    </nav>
  );
};

export default Navbar;
