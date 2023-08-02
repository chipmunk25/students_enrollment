import axios from 'axios';
import './root';

export const getNationalResultsByType = async data => {
    const type = data.queryKey[1];
    return await axios.get(`/stats/national/${type}`);
};

export const getRegionalResultsByType = async payload => {
    const data = payload.queryKey[1];
    return await axios.get(`/stats/regional/${data.id}/type/${data.type}`);
};

export const getDistrictResultsByType = async payload => {
    const data = payload.queryKey[1];
    return await axios.get(`/stats/districts/${data.id}/type/${data.type}`);
};

export const getConstituencyResultsByType = async payload => {
    const data = payload.queryKey[1];
    return await axios.get(`/stats/constituency/${data.id}/type/${data.type}`);
};
export const getAllConstituencyResultsByType = async payload => {
    const data = payload.queryKey[1];
    return await axios.get(`/stats/all-constituency/type/${data.type}`);
};

export const getTownResultsByType = async payload => {
    const data = payload.queryKey[1];
    return await axios.get(`/stats/towns/${data.id}/type/${data.type}`);
};
