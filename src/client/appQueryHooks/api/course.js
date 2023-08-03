import axios from 'axios';
import { getToken } from '../../hooks/localStorage';
import './root';
export const CreateCourse = async data => {
    console.log(data)
    const token = getToken()
    return await axios.post(`/courses`, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};
export const getCourses = async () => {
    const token = getToken()
    return await axios.get(`/courses`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}
