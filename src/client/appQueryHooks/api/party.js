import axios from 'axios';
import './root';

export const SaveParty = async data => await axios.post(`/parties`, data);
export const getParties = async () => await axios.get(`/parties`);
export const updateParty = async data => {
    const { id, ...rest } = data;
    return await axios.patch(`/parties/${id}`, rest);
};
