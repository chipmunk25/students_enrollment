import axios from 'axios';
import { getToken } from '../../hooks/localStorage';
import './root';
export const CreateUser = async data => {
    return await axios.post(`/users/register`, data);
};
export const updateUser = async data => await axios.patch(`/users/${data.id}`, data);
export const updateUserAccess = async data => await axios.patch(`/users/access/${data.id}`, data);
export const getUser = async data => {
    const id = data.queryKey[1];
    return await axios.get(`/users/${id}`);
};
export const getUsers = async () => await axios.get(`/users`);
export const LoginUser = async data => await axios.post(`/users/auth`, data);
export const ResendConfirmation = async data => await axios.post(`/users/resend-confirmation`, data);
export const VerifyConfirmation = async data => await axios.post(`/users/verify-confirm`, data);
export const ResetPwd = async data => await axios.post(`/users/reset-password`, data);
export const ChgPwd = async data => await axios.post(`/users/chgpwd`, data);
export const logout = async () => {
    window.location.href = '/signin';
    return await axios.get(`/users/logout`);
};
export const getAuthUser = async (data) => {
    const id = data.queryKey[1];
    const token = getToken()
    return await axios.get(`/users/auth/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}
export const getTotp = async () => {
    try {
        return await axios.get(`/users/totp`);
    } catch (error) {
        return await error.response;
    }
};
export const ValidateTOTP = async data => {
    try {
        return await axios.post(`/users/totp`, data);
    } catch (error) {
        return await error.response;
    }
};
export const ConfirmUser = async data =>
    await axios.patch(`/users/${data.id}/confirm-user`, { confirmed: data.confirmed });
export const forgotPwd = async email => await axios.get(`/users/${email}/forgot`);
export const CreateRole = async data => {
    try {
        return await axios.post(`/users/roles`, data);
    } catch (error) {
        return await error.response;
    }
};
export const updateRole = async data => {
    try {
        return await axios.patch(`/users/roles/${data.id}`, data);
    } catch (error) {
        return await error.response;
    }
};
export const getRoles = async () => {
    try {
        return await axios.get(`/users/roles`);
    } catch (error) {
        return await error.response;
    }
};
export const getRole = async data => {
    try {
        return await axios.get(`/users/roles/${data.id}`);
    } catch (error) {
        return await error.response;
    }
};
export const getPermissions = async () => {
    try {
        return await axios.get(`/users/permissions`);
    } catch (error) {
        return await error.response;
    }
};
