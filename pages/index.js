import axios from "axios";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { useState } from "react";

export async function getServerSideProps() {
  const resp = await axios.get(
    `https://api-bootcamp.do.dibimbing.id/api/v1/foods`,
    {
      headers: {
        apiKey: "w05KkI9AWhKxzvPFtXotUva-",
      },
    }
  );

  return {
    props: {
      initialFoods: resp.data,
    },
  };
}

const HomePage = ({ initialFoods }) => {
  const [foods, setFoods] = useState(initialFoods);

  const handleChange = (e) => {
    const searchValue = e.target.value.toLowerCase();
    const filteredFoods = initialFoods.data.filter((food) =>
      food.name.toLowerCase().includes(searchValue)
    );
    setFoods({ data: filteredFoods });
  };

  return (
    <>
      <Navbar />
      <div className="mx-0.5">
        <h1 className="text-center font-bold text-4xl m-9">Daftar Makanan</h1>
        <div className="flex justify-center">
        <input
          onChange={handleChange}
          type="text"
          name="search"
          id="search"
          placeholder="Search..."
          className="border border-gray-300 rounded-lg p-2 mb-4 w-200"
        />
        </div>
        <ul className="grid grid-cols-4 justify-center gap-2">
          {foods?.data?.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </ul>
      </div>
    </>
  );
};

const FoodCard = ({ food }) => {
  console.log(food);

  return (
    <>
      <div className="container mx-auto bg-white rounded-xl shadow-lg p-2 w-76 hover:bg-blue-100">
        <img
          className="w-full h-60 object-cover rounded-lg"
          src={food.imageUrl}
          alt={food.name}
          width="100"
        />
        <h3 className="text-lg font-semibold mt-3">{food.name}</h3>
        <p>{food.id}</p>
        <p className="text-blue-500 text-sm mt-1">{food.description}</p>
        <div className="mt-3 flex justify-between items-center">
          <span className="text-blue-500 font-bold text-lg">${food.price}</span>
          <Link href={`/food/${food.id}`}>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition cursor-pointer">
              Detail Menu
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
