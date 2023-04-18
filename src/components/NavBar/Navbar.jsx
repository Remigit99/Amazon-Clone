import './Navbar.css';
import Logo from '../../Assets/amz-nav-logo.png';
import { IconContext } from 'react-icons';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { MdArrowDropDown } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';
import { MdOutlineShoppingCart } from 'react-icons/md';

const Navbar = () => {
    return (
        <nav>
            <div className="container nav__container">
                <div className="nav__left">
                    <div className="nav__logo">
                        <img src={Logo} alt="Amazn Logo" />
                    </div>

                    <div className="delivery__location">
                        <h5 className="text-muted">Deliver to</h5>
                        <div className="location">
                            <IconContext.Provider value={{ className: "icons" }}>
                                <HiOutlineLocationMarker />
                            </IconContext.Provider>
                            <h4>Nigeria</h4>
                        </div>
                    </div>
                </div>

                <div className="search__bar">
                    <select name="" id="">
                        <option value="All">All</option>
                        <option value="Arts & Crafts">Arts & Crafts</option>
                        <option value="Automotive">Automotive</option>
                        <option value="Baby">Babby</option>
                        <option value="Books">Books</option>
                        <option value="Computers">Computers</option>
                        <option value="Electronics">Electronics</option>
                        <MdArrowDropDown />
                    </select>

                    <div className="search__box">
                        <input type="text" placeholder='Search Amazon' />

                        <div className="search__icon">
                            <BiSearch />
                        </div>
                    </div>


                </div>

                <div className="nav__right">

                    <div className="currency__country">
                        <span>
                            <h4>EN</h4>
                            <MdArrowDropDown />
                        </span>
                    </div>

                    <div className="account__singin">
                        <h5 className="text-muted">Hello, Sign in</h5>
                        <div className="account__list">
                            <h4>Account & Lists</h4>
                            <MdArrowDropDown />
                        </div>
                    </div>

                    <div className="returns__orders">
                        <h5 className="text-muted">Returns</h5>
                        <h4>& Orders</h4>


                    </div>

                    <div className="cart">
                        <span>
                            <MdOutlineShoppingCart />
                        </span>

                        <span className="cart-counter">0</span>
                    </div>


                </div>

            </div>
        </nav>
    )
}

export default Navbar