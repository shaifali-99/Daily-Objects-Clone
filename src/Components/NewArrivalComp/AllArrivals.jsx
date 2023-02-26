import NewArrivalNavbar from "./NewArrivalNavbar";
import axios from "axios";
import { useEffect,useState } from "react";
// import Cart from "../../../../src/Pages/cart/Cart";
import Cart from "../../Pages/cart/Cart";
// import SingleItem from "../../../../src/Components/NewArrivalComp/SingleItem";
import SingleItem from "./SingleItem";
const getTheLaptop = () => {
  return axios.get(`http://localhost:8080/NewArrivals`);
};
export default function AllArrivals() {
  const [laptopCover, setLaptopCover] = useState([]);
  useEffect(() => {
    getTheLaptop().then((res) => setLaptopCover(res.data));
  }, []);
  return (
    <div>
      <NewArrivalNavbar />
      <div class="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 " style={{
        
          width: "95%",
          margin: "auto",
          gap: "20px",
        }}>
        {laptopCover?.map((el) => (
          <div class=" mx-auto w-6/8 ">
            <SingleItem key={el.id} {...el} brand={`All`} />
          </div>
        ))}
      </div>
    </div>
  );
}
