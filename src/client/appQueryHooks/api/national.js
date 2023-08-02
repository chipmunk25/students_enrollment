import axios from 'axios';
import './root';

export const getNational = async () => await axios.get(`/national`);
export const getCollections = async () => await axios.get(`/national/collections`);
export const getNationalConstituencies = async () => await axios.get(`/national/constituencies`);
