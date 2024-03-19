import axios from "axios";

export const post = async (path: string, body?: any) => {
  return await axios.post(`/api${path}`, body);
};
