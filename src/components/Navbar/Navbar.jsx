import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navList = <>
        <li><NavLink className={({isActive, isPending}) => isActive ? 'text-green-500 bg-green-50 rounded-lg px-3 py-1' : isPending ? '' : ''} to='/'>Home</NavLink></li>
        <li><NavLink className={({isActive, isPending}) => isActive ? 'text-green-500 bg-green-50 rounded-lg px-3 py-1' : isPending ? '' : ''} to='/listedBooks'>Listed Books</NavLink></li>
        <li><NavLink className={({isActive, isPending}) => isActive ? 'text-green-500 bg-green-50 rounded-lg px-3 py-1' : isPending ? '' : ''} to='/pagesToRead'>Pages to Read</NavLink></li>
    </>
    return (
        <div class="navbar mt-5">
            <div class="navbar-start">
                <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabindex="0"
                    class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    {navList}
                </ul>
                </div>
                <p class="cursor-pointer font-bold text-2xl">Book Hub</p>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="gap-7 menu-horizontal px-1 font-semibold text-gray-400">
                {navList}
                </ul>
            </div>
            <div class="navbar-end gap-4">
                <button class="btn bg-[#23BE0A] text-white">Sign In</button>
                <button class="btn bg-[#59C6D2] text-white">Sign Up</button>
            </div>
        </div>
    );
};

export default Navbar;