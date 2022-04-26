import axios from "axios";

const API_URL = 'http://192.168.1.2:3000';

const StaffService = (tram) => {
  return {
    getAll: () => {
      return axios.get(`${API_URL}/${tram}/staffs`);
    },
    deleteStaff: (id) => {
      return axios.delete(`${API_URL}/${tram}/staff/${id}`);
    },
    addStaff: (data) => {
      return axios.post(`${API_URL}/${tram}/staffs/`, data);
    },
    editStaff: (data, id) => {
      return axios.put(`${API_URL}/${tram}/staff/${id}`, data);
    }
  }
}

export default StaffService;