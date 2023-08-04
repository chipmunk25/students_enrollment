import axios from 'axios';
import { getToken } from '../../hooks/localStorage';
import './root';
export const CreateCourse = async data => {
    const token = getToken()
    return await axios.post(`/courses`, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};
export const CreateCourseRegistration = async data => {
    const token = getToken()
    return await axios.post(`/courses/course-registration`, data, {
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
export const getRegisteredCourses = async (payload) => {
    const courseId = payload.queryKey[1];
    const token = getToken()
    return await axios.get(`/courses/registered/${courseId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}
export const getSingleCourse = async (payload) => {
    const courseId = payload.queryKey[1];
    const token = getToken()
    return await axios.get(`/courses/${courseId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}
export const updateCourse = async payload => {
    const { id, ...data } = payload
    const token = getToken()
    return await axios.patch(`/courses/${id}`, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};