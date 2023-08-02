import './root';

import axios from 'axios';

export const SaveCandidate = async data => {
    // const { ...rest } = data;
    const formDataPayload = new FormData();
    for (const item in data) {
        formDataPayload.append(item, data[item]);
    }

    //multiple images
    // photo?.forEach(fileContent => {
    //     formDataPayload.append('photo', fileContent);
    // });

    return await axios.post(`/candidates`, formDataPayload, {
        headers: {
            'content-type': 'multipart/form-data'
        }
    });
};
export const UpdateCandidate = async data => {
    const { id, ...rest } = data;
    const formDataPayload = new FormData();
    for (const item in rest) {
        formDataPayload.append(item, rest[item]);
    }
    return await axios.patch(`/candidates/${id}`, formDataPayload, {
        headers: {
            'content-type': 'multipart/form-data'
        }
    });
};
export const getCandidates = async () => await axios.get(`/candidates`);
export const getPartyCandidates = async data => {
    const partyId = data.queryKey[1];
    return await axios.get(`/candidates/party/${partyId}`);
};

export const getConstituencyCandidates = async data => {
    const constituencyId = data.queryKey[1];
    return await axios.get(`/candidates/constituency/${constituencyId}`);
};

export const getNationalCandidates = async () => {
    return await axios.get(`/candidates/national`);
};
