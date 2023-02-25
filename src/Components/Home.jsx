import "./Home.css";
import SliderRct from "./Slider";
import SliderRct2 from "./Slider2";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Data = [
  {
    id: 1,
    src: "https://images.dailyobjects.com/marche/assets/images/other/condo-watch-charging-stand-new-arrival-imge.png?tr=cm-pad_resize,v-2,w-942,dpr-1",
    desc: "Available in Black Color",
    name: "Apple Watch Charger",
  },
  {
    id: 2,
    src: "https://images.dailyobjects.com/marche/assets/images/other/group-6681.jpg?tr=cm-pad_crop,v-2,w-942,dpr-1",
    desc: "Available in 6 Colors",
    name: "Peddal Backpack",
  },
  {
    id: 3,
    src: "https://images.dailyobjects.com/marche/assets/images/other/group-6679.jpg?tr=cm-pad_crop,v-2,w-942,dpr-1",
    desc: "Available in 3 Colors",
    name: "Urban Briefcase",
  },
  {
    id: 4,
    src: "https://images.dailyobjects.com/marche/assets/images/other/group-6680.jpg?tr=cm-pad_crop,v-2,w-942,dpr-1",
    desc: "Available in 4 Colors",
    name: "Align Notebook",
  },
  {
    id: 5,
    src: "https://images.dailyobjects.com/marche/assets/images/other/condo-watch-charging-stand-new-arrival-imge.png?tr=cm-pad_resize,v-2,w-942,dpr-1",
    desc: "Available in Black Color",
    name: "Apple Watch Charger",
  },
  {
    id: 6,
    src: "https://images.dailyobjects.com/marche/assets/images/other/group-6678.jpg?tr=cm-pad_crop,v-2,w-942,dpr-1",
    desc: "Available in Black Color",
    name: "Surge 4-in-1 Cable ",
  },
  {
    id: 7,
    src: "https://images.dailyobjects.com/marche/assets/images/other/group-6677.jpg?tr=cm-pad_crop,v-2,w-942,dpr-1",
    desc: "Available in 9 Colors",
    name: "Macbook Cases",
  },
];

const Data2 = [
    {
      id: 1,
      src: "https://images.dailyobjects.com/marche/assets/images/other/cases-ups.jpg?tr=cm-pad_crop,v-2,w-942,dpr-1",
      name: "Cases",
    },
    {
      id: 2,
      src: "https://images.dailyobjects.com/marche/assets/images/other/laptop-sleeve-ups.jpg?tr=cm-pad_crop,v-2,w-942,dpr-1",
      name: "Laptop Sleeves",
    },
    {
      id: 3,
      src: "https://images.dailyobjects.com/marche/assets/images/other/charging-solution-ups.jpg?tr=cm-pad_crop,v-2,w-942,dpr-1",
      name: "Chargin Solution",
    },
    {
      id: 4,
      src: "https://images.dailyobjects.com/marche/assets/images/other/tote-ups.jpg?tr=cm-pad_crop,v-2,w-942,dpr-1",
      name: "Tote Bags",
    },
    {
      id: 5,
      src: "https://images.dailyobjects.com/marche/assets/images/other/crossbody-ups.jpg?tr=cm-pad_crop,v-2,w-942,dpr-1",
      name: "Crossbody Bags",
    },
    {
      id: 6,
      src: "https://images.dailyobjects.com/marche/assets/images/other/backpack-ups.jpg?tr=cm-pad_crop,v-2,w-942,dpr-1",
      name: "Backpack",
    },
    {
      id: 7,
      src: "https://images.dailyobjects.com/marche/assets/images/other/deskmat-ups.jpg?tr=cm-pad_crop,v-2,w-942,dpr-1",
      name: "Desk Mat",
    },
    {
        id:8,
        src:"https://images.dailyobjects.com/marche/assets/images/other/watchbands-ups.jpg?tr=cm-pad_crop,v-2,w-942,dpr-1",
        name:"Watchbands",
    }
  ];

const slider1 = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const slider2 = {
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

const Home = () => {
  return (
    <>
      <div className="topTab1_img">
        <img
          src="https://images.dailyobjects.com/marche/assets/images/other/key-valentines-offer-banners-homepage-desktop.jpg?tr=cm-pad_crop,v-2,w-1440,dpr-1"
          alt=""
        />
      </div>
      <div className="topTab2_img">
        <a href="">
          <img
            src="https://images.dailyobjects.com/marche/assets/images/other/watchbands-desktops.jpg?tr=cm-pad_crop,v-2,w-1440,dpr-1"
            alt=""
          />
        </a>
      </div>
      <div className="silder1">
        <div className="slider1_left">
          <h2>NEW ARRIVALS</h2>
          <p>Check out our newest launches.</p>
          <button>Shop New Arrivals</button>
        </div>
        <div className="slider2_right">
          <Slider {...slider1}>
            {Data.map((item) => (
              <SliderRct name={item.name} src={item.src} desc={item.desc} />
            ))}
          </Slider>
        </div>
        <div className="topTab3_img">
          <a href="">
            <img
              src="https://images.dailyobjects.com/marche/assets/images/homepage/desktop/Desktop-banner_backpacks-updated.jpg?tr=cm-pad_crop,v-2,w-1440,dpr-1"
              alt=""
            />
          </a>
        </div>
        <div className="topTab4_img">
          <a href="">
            <img
              src="https://images.dailyobjects.com/marche/assets/images/other/messenger-bags-desktops.jpg?tr=cm-pad_crop,v-2,w-1440,dpr-1"
              alt=""
            />
          </a>
        </div>
        <div className="middleTab1">
          <h2>STUDIO COLLECTIONS</h2>
          <div className="middleTab1_card">
            <div>
              <a href="">
                <img
                  src="https://images.dailyobjects.com/marche/assets/images/other/dremscape-banner-mob-02.jpg?tr=cm-pad_crop,v-2,w-450,dpr-1"
                  alt=""
                />
              </a>
              <h4>DREAMSCAPE</h4>
              <p>
                A vivid dream journal that lets you carry your daydreaming
                stance into real life.
              </p>
              <a style={{ color: "black" }} href="">
                <u>Shop Now</u>
              </a>
            </div>
            <div>
              <a href="">
                <img
                  src="https://images.dailyobjects.com/marche/assets/images/other/zodiac-collections.jpg?tr=cm-pad_crop,v-2,w-450,dpr-1"
                  alt=""
                />
              </a>
              <h4>ZODIAC</h4>
              <p>
                Zodiac Collection reflects the unique personality of every
                individual out there!
              </p>
              <a style={{ color: "black" }} href="">
                <u>Shop Now</u>
              </a>
            </div>
            <div>
              <a href="">
                <img
                  src="https://images.dailyobjects.com/marche/assets/images/other/pixel-banner-4-02.jpg?tr=cm-pad_crop,v-2,w-450,dpr-1"
                  alt=""
                />
              </a>
              <h4>PIXEL</h4>
              <p>
                A reflection of modern pop-culture with a vintage appeal that
                evokes nostalgia.
              </p>
              <a style={{ color: "black" }} href="">
                <u>Shop Now</u>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="middleTab2">
        <a href="">
          <img
            src="https://images.dailyobjects.com/marche/colllectionPage/zootopia/smartsters-homepages-desktop.jpg?tr=cm-pad_crop,v-2,w-1440,dpr-1"
            alt=""
          />
        </a>
      </div>
      <div className="slider1">
        <div className="slider1_left">
          <h2>SHOP CATEGORIES</h2>
          <p style={{lineHeight:"15px"}}>
            Now browse our selection of carefully curated <br /> products in sorted
            categories.
          </p>
        </div>
        <div className="slider2_right">
          <Slider {...slider2}>
            {Data2.map((item) => (
              <SliderRct2 name={item.name} src={item.src} />
            ))}
          </Slider>
        </div>
      </div>
      <div className="middleTab4">
        <div className="middleTab4_card">
          <div>
            <a href="">
              <img
                src="https://images.dailyobjects.com/marche/assets/images/other/charging-ssolution.jpg?tr=cm-pad_crop,v-2,w-665,dpr-1"
                alt=""
              />
            </a>
            <h4>CHARGING SOLUTIONS</h4>
            <a style={{ color: "black" }} href="">
              <u>Shop Now</u>
            </a>
          </div>
          <div>
            <a href="">
              <img
                src="https://images.dailyobjects.com/marche/assets/images/other/work-eessentials.jpg?tr=cm-pad_crop,v-2,w-665,dpr-1"
                alt=""
              />
            </a>
            <h4>WORK ESSENTIALS</h4>
            <a style={{ color: "black" }} href="">
              <u>Shop Now</u>
            </a>
          </div>
        </div>
      </div>
      <div className="middleTab1">
        <h2>COLLECTIONS</h2>
        <div style={{gap:"20px", padding:"20px"}} className="middleTab1_card">
          <div>
            <a href="">
              <img
                src="https://images.dailyobjects.com/marche/assets/images/other/collection-08-01.jpg?tr=cm-pad_crop,v-2,w-450,dpr-1"
                alt=""
              />
            </a>
            <h4>08:01 COLLECTION</h4>
            <p>
              A collection featured to preserve all brief encounters on your
              everyday journey.
            </p>
            <a style={{ color: "black" }} href="">
              <u>Shop Now</u>
            </a>
          </div>
          <div>
            <a href="">
              <img
                src="https://images.dailyobjects.com/marche/assets/images/other/collection-tarp.jpg?tr=cm-pad_crop,v-2,w-450,dpr-1"
                alt=""
              />
            </a>
            <h4>TARP COLLECTION</h4>
            <p>
              Urban-inspired carriers, made for free-spirited and powerful
              wearers.
            </p>
            <a style={{ color: "black" }} href="">
              <u>Shop Now</u>
            </a>
          </div>
          <div>
            <a href="">
              <img
                src="https://images.dailyobjects.com/marche/assets/images/homepage/slider/collections-Platform-collection-banner-image-homepgae.png?tr=cm-pad_resize,v-2,w-450,dpr-1"
                alt=""
              />
            </a>
            <h4>PLATFORM COLLECTION</h4>
            <p>
              Designed with minimal geometric innovations to add comfort to your
              workspace.
            </p>
            <a style={{ color: "black" }} href="">
              <u>Shop Now</u>
            </a>
          </div>
        </div>
      </div>
      <div className="middleTab5">
        <a href="">
          <img
            src="https://images.dailyobjects.com/marche/assets/images/other/organisers-desktops.jpg?tr=cm-pad_crop,v-2,w-1440,dpr-1"
            alt=""
          />
        </a>
      </div>
      <div style={{marginTop:"40px"}} className="middleTab6">
        <a href="">
          <img
            src="https://images.dailyobjects.com/marche/assets/images/other/corporate-gifting-desktops.jpg?tr=cm-pad_crop,v-2,w-1440,dpr-1"
            alt=""
          />
        </a>
      </div>
      <div className="middleTab7">
        <div style={{ textAlign: "left" }} className="middleTab7_left">
          <h1>OUR STORY</h1>
          <p style={{ fontSize: "22px" }}>
            Founded in 2012, DailyObjects is a design-obsessed lifestyle <br />{" "}
            accessories brand committed to making your everyday carry <br />{" "}
            #lessordinary. <br /> <br /> You can look forward to a
            carefully-crafted range of products, <br /> made from long-lasting
            materials, with designs that stand out <br /> and make your life
            easy. With DailyObjects, let your lifestyle <br /> reflect your
            sensibilities as you go on to make your every day <br />{" "}
            #lessordinary.
          </p>
        </div>
        <div className="middleTab7_right">
          <img
            src="https://images.dailyobjects.com/marche/assets/images/other/Our-Story-updated01.jpg?tr=cm-pad_crop,v-2,w-879,dpr-1"
            alt=""
          />
        </div>
      </div>
      <div
        style={{
          padding: "20px",
          borderBottom: "1px solid rgb(209, 209, 209)",
        }}
        className="bottomTab1"
      >
        <div>
          <h2>FEATURED IN</h2>
        </div>
        <div>
          <img
            src="https://images.dailyobjects.com/marche/icons/press-desktop.png?tr=cm-pad_resize,v-2,w-1440,h-200,dpr-1"
            alt=""
          />
        </div>
      </div>
      <div className="bottomTab2">
        <div>
          <h2>GET EXCLUSIVE ACCESS TO NEW PRODUCTS, DEALS & SURPRISE TREATS</h2>
        </div>
        <div className="bottomTab2_input">
          <input type="email" placeholder="Enter Your Email" />
          <button>SUBSCRIBE</button>
        </div>
      </div>
    </>
  );
};

export default Home;
