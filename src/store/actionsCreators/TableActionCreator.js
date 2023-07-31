import axios from 'axios';
import { constants } from './Constants';

const API_BASE_URL = constants;

const TableActionCreator = {

    getData: async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}users`);
            return response.data;
        } catch (error) {
            throw new Error('Error fetching data from the API');
        }
    },

    updateData: async (editedData) => {
        try {
            const response = await axios.put(`${API_BASE_URL}update/${editedData.id}`, editedData);
            return response.data;
        } catch (error) {
            throw new Error('Error updating data via the API');
        }
    },

    deleteData: async (id) => {
        try {
            const response = await axios.delete(`${API_BASE_URL}delete/${id}`);
            return response.data;
        } catch (error) {
            throw new Error('Error deleting data via the API');
        }
    },
};

export default TableActionCreator;