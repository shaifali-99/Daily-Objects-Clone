import React from "react";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="./home.jsx">
        <img className="logo" src="logo.jpg" alt="" />
      </a>
      <div class="container">
        <div class="row">
          <div class="header-item item-center">
            <nav class="menu">
              <ul class="menu-main">
                <li class="menu-item-has-children">
                  <Link to={"newarrivalspage"} id="new">
                    NEW ARRIVAL
                  </Link>
                  <div class="sub-menu mega-menu mega-menu-column-4">
                    <div class="list-item">
                      <ul>
                        <li>
                          <a href="" id="subHead">
                            NEW ARRIVAL
                          </a>
                        </li>
                        <li>
                          <a href="#">Desks</a>
                        </li>
                        <li>
                          <a href="#">Charging Solutions</a>
                        </li>
                        <li>
                          <a href="#">Collections</a>
                        </li>
                        <li>
                          <a href="#">Mackbook Sleeves</a>
                        </li>
                        <li>
                          <a href="#">Messenger Bags</a>
                        </li>
                        <li>
                          <a href="#">Eyewear Cases</a>
                        </li>
                        <li>
                          <a href="#">Watchbands</a>
                        </li>
                      </ul>
                    </div>
                    <div class="list-item">
                      <img
                        src="https://images.dailyobjects.com/marche/assets/images/other/recess-collection-dropdown-image-for-new-arrival.jpg?tr=cm-pad_crop,v-2?tr=cm-pad_resize,w-453,dpr-1"
                        alt=""
                      />
                      <img
                        src="https://images.dailyobjects.com/marche/assets/images/other/planner-dropdown-image-for-new-arrival-2-new.jpg?tr=cm-pad_crop,v-2?tr=cm-pad_resize,w-453,dpr-1"
                        alt=""
                      />
                      <img
                        src="https://images.dailyobjects.com/marche/assets/images/other/new-watch-chargers-dropdown-image-for-new-arrival-update.jpg?tr=cm-pad_crop,v-2?tr=cm-pad_resize,w-453,dpr-1"
                        alt=""
                      />
                    </div>
                  </div>
                </li>
                <li class="menu-item-has-children">
                  <Link to="/cases" id="new">
                    CASES & SLEEVES
                  </Link>
                  <div class="sub-menu mega-menu mega-menu-column-4">
                    <div class="list-item">
                      <ul>
                        <li>
                          <a href="" id="subHead">
                            <u>APPLE</u>
                          </a>
                        </li>
                        <li>
                          <a href="">iPhone 13</a>
                        </li>
                        <li>
                          <a href="">iPhone 14</a>
                        </li>
                        <li>
                          <a href="">iPhone 14 Pro</a>
                        </li>
                        <li>
                          <a href="">iPhone 14</a>
                        </li>
                        <li>
                          <a href="">iPhone 11 Pro</a>
                        </li>
                        <li>
                          <a href="">iPhone 11</a>
                        </li>
                        <li>
                          <a id="viewAll" href="">
                            <u>View All Modle+</u>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="list-item">
                      <ul>
                        <li>
                          <a href="" id="subHead">
                            <u>SAMSUNG</u>
                          </a>
                        </li>
                        <li>
                          <a href="">Galaxy Z Fold 4</a>
                        </li>
                        <li>
                          <a href="">Galaxy Z Flip 4</a>
                        </li>
                        <li>
                          <a href="">Galaxy S22 Ultra</a>
                        </li>
                        <li>
                          <a href="">Galaxy Z Fold 3</a>
                        </li>
                        <li>
                          <a href="">Galaxy S20 FE</a>
                        </li>
                        <li>
                          <a href="">Galaxy S21 Ultra</a>
                        </li>
                        <li>
                          <a id="viewAll" href="">
                            <u>View All Modle+</u>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="list-item">
                      <ul>
                        <li>
                          <a href="" id="subHead">
                            <u>ONEPLUS</u>
                          </a>
                        </li>
                        <li>
                          <a href="">OnePlus 10R</a>
                        </li>
                        <li>
                          <a href="">OnePlus Nord</a>
                        </li>
                        <li>
                          <a href="">OnePlus 9R</a>
                        </li>
                        <li>
                          <a href="">OnePlus 9</a>
                        </li>
                        <li>
                          <a href="">OnePlus 8T</a>
                        </li>
                        <li>
                          <a href="">OnePlus 10 Pro</a>
                        </li>
                        <li>
                          <a id="viewAll" href="">
                            <u>View All Modle+</u>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="list-item">
                      <ul>
                        <li>
                          <a href="" id="subHead">
                            <u>ONEPLUS</u>
                          </a>
                        </li>
                        <li>
                          <a href="">Nothing</a>
                        </li>
                        <li>
                          <a href="">Xiaomi</a>
                        </li>
                        <li>
                          <a href="">Oppo</a>
                        </li>
                        <li>
                          <a href="">Google</a>
                        </li>
                        <li>
                          <a id="viewAll" href="">
                            <u>View All Modle+</u>
                          </a>
                        </li>
                      </ul>
                      <div class="list-item">
                        <img
                          src="https://images.dailyobjects.com/marche/assets/images/other/airpods-cases-sleeves-page-dropdown-image.jpg?tr=cm-pad_crop,v-2,w-1000,w-223,h-653,dpr-1"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li class="menu-item-has-children">
                  <a href="#" id="new">
                    ACCESSORIES
                  </a>
                  <div class="sub-menu mega-menu mega-menu-column-4">
                    <div class="list-item">
                      <ul>
                        <li>
                          <a href="#">
                            <b>WATCH ACCESSORIES</b>
                          </a>
                        </li>
                        <br />
                        <li>
                          <a href="#">Apple Watchbands</a>
                        </li>
                        <li>
                          <a href="#">Apple Watch Chargers</a>
                        </li>
                        <li>
                          <a href="#">Universal Watchbands</a>
                        </li>
                      </ul>
                    </div>
                    <div class="list-item">
                      <ul>
                        <li>
                          <a href="#">
                            <b>SCREEN GAURD</b>
                          </a>
                        </li>
                        <br />
                        <li>
                          <a href="#">For Mobile</a>
                        </li>
                        <li>
                          <a href="#">For Apple Watch</a>
                        </li>
                        <li>
                          <a href="#">For MackBook</a>
                        </li>
                        <li>
                          <a href="#">For iPad</a>
                        </li>
                      </ul>
                    </div>
                    <div class="list-item">
                      <ul>
                        <li>
                          <a href="#">
                            <b>STANDS</b>
                          </a>
                        </li>
                        <br />
                        <li>
                          <a href="#">For Apple Watch</a>
                        </li>
                        <li>
                          <a href="#">For Mobile</a>
                        </li>
                        <li>
                          <a href="#">For iPad</a>
                        </li>
                        <li>
                          <a href="#">For Monitor</a>
                        </li>
                        <li>
                          <a href="#">For Laptop</a>
                        </li>
                      </ul>
                    </div>
                    <div class="list-item">
                      <ul>
                        <li>
                          <a href="#">
                            <b>ORGANISERS</b>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <b>PHONE WALLET</b>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <b>KEYCHAIN</b>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <b>DRINKWARE</b>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <b>MASKS</b>
                          </a>
                        </li>
                      </ul>
                      <div class="list-item">
                        <img
                          src="https://images.dailyobjects.com/marche/assets/images/other/accessories-update-1.jpg?tr=cm-pad_crop,v-2,w-1000,w-261,h-380,dpr-1"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li class="menu-item-has-children">
                  <a href="" id="new">
                    SALE
                  </a>
                </li>
                <li class="menu-item-has-children">
                  <a href="" id="new">
                    BAGS & WALLETS
                  </a>
                  <div class="sub-menu mega-menu mega-menu-column-4">
                    <div class="list-item">
                      <ul>
                        <li>
                          <a href="#">
                            <b>WALLETS</b>
                          </a>
                        </li>
                        <li>Women</li>
                        <li>Card</li>
                        <li>Men</li>
                        <li>Mobile</li>
                        <li>Bi-Fold</li>
                      </ul>
                    </div>
                    <div class="list-item">
                      <ul>
                        <li>
                          <a href="#">
                            <b>CROSSBOADY BAG</b><br />
                          </a>
                        </li>
                        <li>Tarp</li>
                        <li>Box</li>
                        <li>Scout</li>
                        <li>Trapeze</li>
                        <li>Orbis</li>
                      </ul>
                    </div>
                    <div class="list-item">
                      <ul>
                        <li>
                          <a href="#">
                            <b>TOTE BAG</b><br />
                          </a>
                        </li>
                        <li>Tarp</li>
                        <li>Buoyant</li>
                        <li>Classic</li>
                        <li>Fatty</li>
                        <li>08:01</li>
                      </ul>
                    </div>
                    <div class="list-item">
                      <ul>
                        <li>
                          <a href="#">
                            <b>MESSENGER</b>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <b>BACKPACKS</b>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <b>DUFFLE BAGS</b>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <b>DRINKWARE</b>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <b>POUCHES</b>
                          </a>
                        </li>
                      </ul>
                      <div class="list-item">
                        <img
                          src="https://images.dailyobjects.com/marche/assets/images/other/bags-and-wallets-dropdown-update-4.jpg?tr=cm-pad_crop,v-2,w-1000,w-243,h-380,dpr-1"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li class="menu-item-has-children">
                  <a href="" id="new">
                    HOME OFFICE
                  </a>
                  <div class="sub-menu mega-menu mega-menu-column-4">
                  <div class="list-item">
                      <ul>
                        <li>
                          <a href="#">
                            <b>STANDS</b>
                          </a>
                        </li>
                        <li>Watch</li>
                        <li>Laptop</li>
                        <li>Mobile</li>
                        <li>iPad</li>
                        <li>Monitor</li>
                      </ul>
                    </div>
                    <div class="list-item">
                      <ul>
                        <li>
                          <a href="#">
                            <b>ORGANISERS</b><br />
                          </a>
                        </li>
                        <li>Tech Kits</li>
                        <li>Cable Organisers</li>
                        <li>Pouches</li>
                        <li>Folio</li>
                        <li>Planner</li>
                      </ul>
                    </div>
                    <div class="list-item">
                      <ul>
                        <li>
                          <a href="#">
                            <b>Desks</b><br />
                          </a>
                        </li>
                        <li>Platform Collection</li>
                        <li>Desk Mat</li>
                        <li>Mouse Pad</li>
                      </ul>
                    </div>
                    <div class="list-item">
                      <ul>
                        <li>
                          <a href="#">
                            <b>STATIONARY</b>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <b>BACKPACKS</b>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <b>DUFFLE BAGS</b>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <b>DRINKWARE</b>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <b>POUCHES</b>
                          </a>
                        </li>
                      </ul>
                      <div class="list-item">
                        <img
                          src="https://images.dailyobjects.com/marche/assets/images/other/home-office-update-stationary-dropdown-up.png?tr=cm-pad_resize,v-2,w-1000,w-125,h-380,dpr-1"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li class="menu-item-has-children">
                  <a href="" id="new">
                    COLLECTIONS
                  </a>
                  <div class="sub-menu mega-menu mega-menu-column-4">
                    <div class="list-item">
                      <ul>
                        <li><b>COLLECTION</b></li>
                        <li>Love Pack</li>
                        <li>Reccess</li>
                        <li>08:01</li>
                        <li>Platform</li>
                        <li>Tarp</li>
                        <li>Fleet</li>
                      </ul>
                    </div>
                    <div class="list-item">
                      <ul>
                      <li><b>STUDIO</b></li>
                        <li>Tarot</li>
                        <li>DreamShape</li>
                        <li>Mela</li>
                        <li>ArcadePxl</li>
                        <li>Zodiac</li>
                        <li>Misfit Millennials</li>

                      </ul>
                    </div>
                    <div class="list-item">
                      <ul>
                      <li><b>COLLABORATION</b></li>
                        <li>DailyObjects x Smartsters</li>
                      </ul>
                      <div class="list-item">
                        <img
                          src="https://images.dailyobjects.com/marche/assets/images/other/new-collection-dropdown-desktop-update-3.jpg?tr=cm-pad_crop,v-2,w-1000,w-140,h-380,dpr-1"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li class="menu-item-has-children">
                  <a href="" id="new">
                    GIFTING
                  </a>
                  <div class="sub-menu mega-menu mega-menu-column-4">
                    <div class="list-item">
                      <ul>
                      <li><b>CORPORATE GIFTING</b></li>
                        <li>Employee Kits</li>
                        <li>Festive Kits</li>
                      </ul>
                    </div>
                    <div class="list-item">
                      <ul>
                      <li><b>HOLIDAY GIFTING BUNDLES</b></li>
                      <li><b>E GIFT CARDS</b></li>
                      </ul>
                    </div>
                    <div class="list-item">
                      <ul>
                      <li><b>GIFTING BY BUDGET</b></li>
                        <li><a href="#">Gift under 1000</a></li>
                        <li><a href="#">Gift under 2500</a></li>
                        <li><a href="#">Gift under 5000</a></li>
                      </ul>
                    </div>
                    <div class="list-item">
                      <ul>
                      <li><b>GIFTS BY PERSONAS</b></li>
                        <li>Gifts For The Techie</li>
                        <li>Gifts For The Organisers</li>
                        <li>Gifts For The Workaholic</li>
                      </ul>
                    </div>
                    <div class="list-item">
                        <img
                          src="https://images.dailyobjects.com/marche/assets/images/other/gifting-page-drop-down-banner-1-update-up.png?tr=cm-pad_resize,v-2,w-1000,w-140,h-380,dpr-1"
                          alt=""
                        />
                      </div>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="navbar__icons">
        <a href="./cart.jsx">
          <FaShoppingCart />
        </a>
        <a href="./account.jsx">
          <FaUser />
        </a>
        <a href="./search.jsx">
          <FaSearch />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
