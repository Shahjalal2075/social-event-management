import { Link, NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <div className="navbar bg-base-100 text-lg font-semibold my-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <div tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-32">
                        <NavLink activeClassName="active" to={"/weddings"}>Weddings</NavLink>
                        <NavLink activeClassName="active" to={"/birthday"}>Birthday</NavLink>
                        <NavLink activeClassName="active" to={"/anniversary"}>Anniversary</NavLink>
                        <NavLink activeClassName="active" to={"/engagement"}>Engagement</NavLink>
                        <NavLink activeClassName="active" to={"/retirement"}>Retirement</NavLink>
                        <NavLink activeClassName="active" to={"/babyshower"}>Baby Shower</NavLink>
                    </div>
                </div>
                <div className="hidden lg:flex">
                    <Link to={"/"}>
                        <img className="w-40" src="https://i.ibb.co/Ky2Ng10/logo.png" alt="Social Event" />
                    </Link>
                </div>
            </div>
            <div className="navbar-center">
                <div className="lg:flex gap-8 hidden">
                    <NavLink activeClassName="active" to={"/weddings"}>Weddings</NavLink>
                    <NavLink activeClassName="active" to={"/birthday"}>Birthday</NavLink>
                    <NavLink activeClassName="active" to={"/anniversary"}>Anniversary</NavLink>
                    <NavLink activeClassName="active" to={"/engagement"}>Engagement</NavLink>
                    <NavLink activeClassName="active" to={"/retirement"}>Retirement</NavLink>
                    <NavLink activeClassName="active" to={"/babyshower"}>Baby Shower</NavLink>
                </div>
                <div className="lg:hidden ">
                    <Link to={"/"}>
                        <img className="w-28" src="https://i.ibb.co/Ky2Ng10/logo.png" alt="Social Event" />
                    </Link>
                </div>
            </div>
            <div className="navbar-end">
                <div className="flex gap-8">
                    <NavLink to={"/"}>Login</NavLink>
                    <NavLink className="md:flex hidden" to={"/"}>Register</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;