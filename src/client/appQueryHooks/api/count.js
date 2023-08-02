import './root';

import axios from 'axios';

export const GetRegionConstituencies = async payload => {
    const data = payload.queryKey[1];
    return await axios.get(`/count/regions/${data}`);
};

export const GetConstituenciesSubmitted = async ({ pageParam = 0, queryKey }) => {
    const data = queryKey[1];
    const response = await axios.post(`/count/constituencies/${data.id}/type/${data.type}`, {
        page: pageParam,
        size: data.size
    });
    return response.data;
};
export const GetConstituenciesStats = async ({ pageParam = 0, queryKey }) => {
    const data = queryKey[1];
    const response = await axios.post(`/count/constituencies/stats/${data.id}/type/${data.type}`, {
        page: pageParam,
        size: data.size
    });
    return response.data;
};

export const GetRegionalStats = async ({ pageParam = 0, queryKey }) => {
    const data = queryKey[1];
    const response = await axios.post(`/count/regions/${data.id}/type/${data.type}`, {
        page: pageParam,
        size: data.size
    });
    return response.data;
};
