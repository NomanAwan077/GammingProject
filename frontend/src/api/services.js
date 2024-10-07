import axios from "axios";
import { API_URL } from "../constant/index";

export const GetData = async (endpoint = "landing-pages") => {
  try {
    const response = await axios.get(`${API_URL}${endpoint}?populate=deep,6`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
