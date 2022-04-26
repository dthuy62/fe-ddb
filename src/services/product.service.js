import axios from "axios";

const API_URL = "http://192.168.1.2:3000";


const ProductService = (tram) => {
  return {
    getAll: () => {
      return axios.get(`${API_URL}/${tram}/products`);
    },
    deleteProduct: (id) => {
      return axios.delete(`${API_URL}/${tram}/product/${id}`);
    },
    createProduct: (data) => {
      return axios.post(`${API_URL}/${tram}/products`, data);
    },
    editProduct: (data, id) => {
      return axios.put(`${API_URL}/${tram}/product/${id}`, data);
    }
  }
}


export default ProductService;