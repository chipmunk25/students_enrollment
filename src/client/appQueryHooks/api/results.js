import axios from 'axios';
import './root';
export const importResults = async data => await axios.post(`/results/import`, data);
export const AnalyzeResults = async data => await axios.post(`/results/analyze`, data);
export const getConstituencyResults = async data => {
    const id = data.queryKey[1];
    return await axios.get(`/results/constituency/${id}`);
};
export const getConstituencyResultsByType = async data => {
    const res = data.queryKey[1];
    return await axios.get(`/results/constituency/${res.id}/type/${res.type}`);
};
export const getTownResultsByType = async data => {
    const res = data.queryKey[1];
    return await axios.get(`/results/town/${res.id}/type/${res.type}`);
};
export const getPSResultsByType = async data => {
    const res = data.queryKey[1];
    return await axios.get(`/results/ps/${res.id}/type/${res.type}`);
};
export const getUnconfirmedPSResultsByType = async data => {
    const res = data.queryKey[1];
    return await axios.get(`/results/unconfirmed-ps/${res.id}/type/${res.type}`);
};
export const getSubmissionResultsByType = async data => {
    const res = data.queryKey[1];
    return await axios.get(`/results/unsubmitted/${res.id}/type/${res.type}`);
};
export const updateResults = async data => {
    const { aiid, manualid, ussdid, ...rest } = data;
    return await axios.patch(`/results/ai/${aiid}/manual/${manualid}/ussd/${ussdid}`, rest);
};
export const DelAiResults = async id => {
    return await axios.delete(`/results/ai/${id}`);
};
export const getAiTownResultsByType = async data => {
    const res = data.queryKey[1];
    return await axios.get(`/results/town-ai/${res.id}/type/${res.type}`);
};
export const getConstituencyAiResultsByType = async data => {
    const res = data.queryKey[1];
    return await axios.get(`/results/constituency-ai/${res.id}/type/${res.type}`);
};
