import axios from 'axios';
import { getToken } from '../../hooks/localStorage';
import './root';
export const CreateClass = async data => {
    const token = getToken()
    return await axios.post(`/classes`, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};
export const getClasses = async () => {
    const token = getToken()
    return await axios.get(`/classes`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}
export const updateClass = async payload => {
    const { id, ...data } = payload
    const token = getToken()
    return await axios.patch(`/classes/${id}`, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};