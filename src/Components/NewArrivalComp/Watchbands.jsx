import SingleItem from "./SingleItem";
import NewArrivalNavbar from "./NewArrivalNavbar";
import axios from "axios";
import { useEffect,useState } from "react";
// import SIngleItemMap from "../Laptop Macbook Sleeves/GroupSingle/SIngleItemMap";
// import SIngleItemMap from "../Laptop Macbook Sleeves/GroupSingle/SIngleItemMap";
const getTheLaptop = () => {
  return axios.get(`http://localhost:8080/watchbands`);
};
export default function Watchbands() {
  const [laptopCover, setLaptopCover] = useState([]);
  useEffect(() => {
    getTheLaptop().then((res) => setLaptopCover(res.data));
  }, []);

  console.log(laptopCover)

  return (
    <div>
      <NewArrivalNavbar />
      <div  class="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 " style={{
         
          width: "95%",
          margin: "auto",
          gap: "20px",
        }}>
        {laptopCover?.map((el) => (
          <div class=" mx-auto w-6/8">
            <SingleItem key={el.id} {...el} brand={`watchbands`} />
          </div>
        ))}
      </div>
    </div>
  );
}