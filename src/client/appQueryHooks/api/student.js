import './root';
import axios from 'axios';
import { getToken } from '../../hooks/localStorage';
export const RegisterStudent = async data => {
    const token = getToken()
    const formDataPayload = new FormData();
    for (const item in data) {
        formDataPayload.append(item, data[item]);
    }
    return await axios.post(`/students/register`, formDataPayload, {
        headers: {
            Authorization: `Bearer ${token}`,
            'content-type': 'multipart/form-data'
        }
    });
};
export const UpdateStudent = async payload => {
    const { studentId, ...data } = payload
    const token = getToken()
    const formDataPayload = new FormData();
    for (const item in data) {
        formDataPayload.append(item, data[item]);
    }
    return await axios.patch(`/students/${studentId}`, formDataPayload, {
        headers: {
            Authorization: `Bearer ${token}`,
            'content-type': 'multipart/form-data'
        }
    });
};
export const getStudents = async () => {
    const token = getToken()
    return await axios.get(`/students`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}