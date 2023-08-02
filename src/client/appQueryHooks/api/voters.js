import axios from 'axios';
import './root';

export const FindExistingVoters = async record => {
    const data = record.queryKey[1];
    return await axios.post(`/voters/find`, data);
};

export const SaveVoters = async data => await axios.post(`/voters`, data);
export const getVoters = async () => await axios.get(`/voters`);
