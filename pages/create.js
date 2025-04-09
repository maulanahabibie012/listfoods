import axios from "axios";

const CreatePage = (props) => {
console.log(props);

  const handleCreateFood = async () => {
    console.log(props);
    // await axios.post(
    //   `https://api-bootcamp.do.dibimbing.id/api/v1/create-food`,
    //   {
    //     name: "Bebek Geprek Mercon",
    //     description: "Bebek Geprek Sambal Mercon",
    //     imageUrl:
    //       "https://img-global.cpcdn.com/recipes/4f29e3debf3bd281/680x482cq70/ayam-geprek-sambal-matah-foto-resep-utama.jpg",
    //     ingredients: ["bebek", "sambal", "Minyak"],
    //     price: 40000,
    //   },
    //   {
    //     headers: {
    //       apiKey: "w05KkI9AWhKxzvPFtXotUva-",
    //       Authorization:
    //         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q",
    //     },
    //   }
    // );
    // alert("Menu baru berhasil di tambahkan 👌");
  };

  return (
    <button
      onClick={handleCreateFood}
      className="bg-pink-300 p-2 rounded-lg text-white mr-3"
    >
      Create
    </button>
  );
};

export default CreatePage;
