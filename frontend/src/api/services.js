import axios from "axios";

export const GetData = async () => {
  try {
    const response = await axios.get(
      "http://localhost:1337/api/landing-pages?populate=deep,6"
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
