import axios from "axios";

export const getDietTypes = async () => {
  const types = await axios.get(`http://localhost:3001/types`);
  return types.data;
};
