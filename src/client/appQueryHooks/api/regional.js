import axios from 'axios';
import './root';

export const getRegions = async () => await axios.get(`/regions`);
export const getAllConstituencies = async () => await axios.get(`/regions/district/constituencies`);
export const getAllPollingStations = async () => await axios.get(`/regions/pollingstations`);

export const getRegion = async data => {
    const id = data.queryKey[1];
    return await axios.get(`/regions/${id}`);
};

export const getPollingStation = async data => {
    const id = data.queryKey[1];
    return await axios.get(`/regions/district/constituency/town/ps/${id}`);
};

export const getTown = async data => {
    const id = data.queryKey[1];
    return await axios.get(`/regions/district/constituency/town/${id}`);
};

export const getConstituency = async data => {
    const id = data.queryKey[1];
    return await axios.get(`/regions/district/constituency/${id}`);
};

export const getConstituencyPS = async data => {
    const id = data.queryKey[1];
    return await axios.get(`/regions/district/constituency/${id}/ps`);
};

export const getDistrict = async data => {
    const id = data.queryKey[1];
    return await axios.get(`/regions/district/${id}`);
};

export const getDistricts = async data => {
    const regionId = data.queryKey[1];
    return await axios.get(`/regions/${regionId}/districts`);
};

export const CreateDistrict = async data => await axios.post(`/regions/districts`, data);

export const getConstituencies = async data => {
    const districtId = data.queryKey[1];
    return await axios.get(`/regions/district/${districtId}/constituencies`);
};

export const CreateConstituency = async data => await axios.post(`/regions/district/constituency`, data);

export const getTowns = async data => {
    const constituencyId = data.queryKey[1];
    return await axios.get(`/regions/district/constituency/${constituencyId}/towns`);
};

export const CreateTown = async data => await axios.post(`/regions/district/constituency/town`, data);

export const getPollingStations = async data => {
    const townId = data.queryKey[1];
    return await axios.get(`/regions/district/constituency/town/${townId}/ps`);
};

export const CreatePollingStation = async data => await axios.post(`/regions/district/constituency/town/ps`, data);
export const UpdatePollingStation = async data => {
    const { id, ...rest } = data;
    return await axios.patch(`/regions/district/constituency/town/ps/${id}`, rest);
};
export const UpdateTown = async data => {
    const { id, ...rest } = data;
    return await axios.patch(`/regions/district/constituency/town/${id}`, rest);
};
export const UpdateConstituency = async data => {
    const { id, ...rest } = data;
    return await axios.patch(`/regions/district/constituency/${id}`, rest);
};
export const UpdateDistrict = async data => {
    const { id, ...rest } = data;
    return await axios.patch(`/regions/district/${id}`, rest);
};
export const UpdateRegion = async data => {
    const { id, ...rest } = data;
    return await axios.patch(`/regions/${id}`, rest);
};
