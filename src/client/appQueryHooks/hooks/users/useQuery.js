import { LoginUser, forgotPwd, getAuthUser, getUser, getUsers, logout } from '../../api/users';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { toast } from 'react-toastify';

export const useUserQuery = (payload) =>
    useQuery(['authUser', payload], getAuthUser, {
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });

export const useLogoutQuery = () =>
    useQuery(['logout',], logout, {
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });

export const useForgotPwdQuery = () =>
    useQuery(['forgot'], forgotPwd, {
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });

export const useUsersQuery = () =>
    useQuery(['users'], getUsers, {
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });

export const useSingleUserQuery = id =>
    useQuery(['user', id], getUser, {
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });
