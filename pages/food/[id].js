'use client';
import { useRouter } from "next/router";
import axios from "axios";


export const getServerSideProps = async ({ query }) => {
  const resp = await axios.get(
    `https://api-bootcamp.do.dibimbing.id/api/v1/foods/${query.id}`,
    {
      headers: {
        apiKey: "w05KkI9AWhKxzvPFtXotUva-",
      },
    }
  );
  console.log(resp);
  return {
    props: {
      food: resp.data,
    },
  };
};

const FoodDetail = ({ food }) => {
  const router = useRouter();
  const id = router.query.id;

  console.log(id);
  console.log(router.query);
  
  
  const handleUpdate = async () => {
    await axios.post(
      `https://api-bootcamp.do.dibimbing.id/api/v1/update-food/${id}`,
      {
        name: "Bebek Geprek Mercon",
        description: "Bebek Geprek Sambal Mercon",
        imageUrl:
          "https://img-global.cpcdn.com/recipes/4f29e3debf3bd281/680x482cq70/ayam-geprek-sambal-matah-foto-resep-utama.jpg",
        ingredients: ["bebek", "sambal", "Minyak"],
        price: 40000,
      },
      {
        headers: {
          apiKey: "w05KkI9AWhKxzvPFtXotUva-",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q",
        },
      }
    );
    router.reload();
    alert("Berhasil di Ubah!");
  };

  const handleDelete = async () => {
    await axios.delete(
      `https://api-bootcamp.do.dibimbing.id/api/v1/delete-food/${id}`,
      {
        headers: {
          apiKey: "w05KkI9AWhKxzvPFtXotUva-",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q",
        },
      }
    );
    router.push("/");
    alert("Berhasil Dihapus!");
  };

  const handleCreateFood = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      console.log(formData);
      const form = event.target; // ini form-nya
      const foodName = form.elements["foodName"].value;
      const description = form.elements["description"].value;
      const image = form.elements["image"].value; // ambil file dari input file
      const ingredients = form.elements["ingredients"].value;
      const price = form.elements["price"].value; // ambil file dari input file
      console.log(foodName, description, image, ingredients, price);

      if (!foodName || !description || !image || !ingredients || !price) {
        return alert("Semua field harus diisi!");
      }
      console.log(foodName, description, image, ingredients, price);
      const result = await axios.post(
        `https://api-bootcamp.do.dibimbing.id/api/v1/create-food`,
        {
          // payload
          name: foodName,
          description: description,
          imageUrl: image,
          ingredients: ingredients.split(",").map((item) => item.trim()),
          price: Number(price),
        },
        {
          // headers /config
          headers: {
            apiKey: "w05KkI9AWhKxzvPFtXotUva-",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q",
          },
        }
      );
      console.log(result);
      if (result.status === 200) {
        // alert(result.data.message);
        router.push("/");
      }
    } catch (error) {
        console.log(error.response);
    //   if (error.response.data.errors && Array.isArray(error.response.data.errors)) {
    //     const msg = error.response.data.errors
    //       .map((item) => item.message)
    //       .join(", ");
    //     alert(msg);
    //   }
    }
  };

  return (
    <div className="container mx-auto bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center mx-auto mt-10 p-5 bg-white rounded-lg shadow-lg">
        <h1 className="text-center font-bold text-4xl m-9">Detail Makanan</h1>
        <img
          className="w-60 h-60 object-cover rounded-lg"
          src={food.data.imageUrl}
        />
        <h1 className="text-center font-bold text-2xl">{food.data.name}</h1>
        <p className="font-italic">
          <b>Desktipsi:</b> {food.data.description}
        </p>
        <p className="font-italic"> {food.data.ingredients} </p>
        <div className="mt-3 flex justify-between items-center">
          <button
            onClick={handleDelete}
            className="bg-red-600 p-2 rounded-lg text-white cursor-pointer"
          >
            Delete
          </button>
        </div>

        {/* Form tambah detail makanan */}
        <hr className="my-5 w-full border-t border-gray-300" />
        <h1 className="text-center font-bold text-4xl m-9">
          Tambahkan Makanan
        </h1>
        <form onSubmit={handleCreateFood} className="mt-5 w-full max-w-sm">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Nama Makanan
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="foodName"
              type="text"
              placeholder="Nama Makanan"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Deskripsi
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              name="description"
              type="text"
              placeholder="Deskripsi"
            />
          </div>
          {/* upload foto dan bahan-bahan */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="image"
            >
              Foto Makanan
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="image"
              name="image"
              type="text"
              placeholder="URL Foto Makanan"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="ingredients"
            >
              Bahan-bahan
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="ingredients"
              name="ingredients"
              type="text"
              placeholder="Bahan-bahan"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="ingredients"
            >
              Harga
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="price"
              name="price"
              type="number"
              placeholder="Harga"
            />
          </div>
          <div className="mt-3 flex justify-between items-center">
            <button
              type="submit"
              className="bg-green-800 p-2 rounded-lg text-white mr-3 cursor-pointer"
            >
              Submit
            </button>
            {/* <CreatePage data={food.data}/> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default FoodDetail;
