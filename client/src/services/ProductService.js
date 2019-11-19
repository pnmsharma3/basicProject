import axios from 'axios';

export default {
  getAll: async () => {
    let res = await axios.get(`/api/product`);
    return res.data || [];
  },
  addProduct: async (product) => {
    let res = await axios.post(`/api/product`,product);
    return res.data || [];
  }
}