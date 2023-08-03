import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import useAuthStore from '../../../hooks/auth';
import { CreateUser, forgotPwd, LoginUser, ResetPwd, updateUser, updateUserAccess } from '../../api/users';
export const useForgotMutation = () => {
    // const queryClient = useQueryClient();
    return useMutation(forgotPwd, {
        onSuccess: res => {
            console.log(res);
            toast.success(res.data?.message);
        },
        onError: error => {
            const errMsg = error.response.data.message;
            toast.error(errMsg);
        }
    });
};
export const useResetMutation = () => {
    // const queryClient = useQueryClient();
    return useMutation(ResetPwd, {
        onSuccess: res => {
            toast.success('Password Changed Successfully!');
            if (res.data?.reset) {
                console.log(res.data);
                setTimeout(() => {
                    window.location.href = '/signin';
                }, 2000);
            }
        },
        onError: error => {
            const errMsg = error.response.data.message;
            toast.error(errMsg);
            setTimeout(() => {
                window.location.href = '/signin';
            }, 2000);
        }
    });
};
export const useLoginUser = () => {
    // const queryClient = useQueryClient();
    const { setToken } = useAuthStore()
    return useMutation(LoginUser, {
        onSuccess: response => {
            const token = response.data.token
            setToken(token)
            // queryClient.invalidateQueries(['authUser']);
            window.location.href = `/`;
        },
        onError: error => {
            const errMsg = error.response.data.message;
            toast.error(errMsg);
        }
    });
};
export const useCreateUserMutation = () => {
    const queryClient = useQueryClient();
    return useMutation(CreateUser, {
        onSuccess: res => {
            console.log(res);
            // queryClient.invalidateQueries(['candidates']);
            toast.success('Saved!');
            setTimeout(() => {
                window.location.href = '/users';
            }, 2000);
            // queryClient.setQueryData(['modal'], () => {
            //     return initialData;
            // });
        },
        onError: error => {
            const errMsg = error.response.data.message;
            toast.error(errMsg);
        }
    });
};
export const useUpdateUserMutation = () => {
    return useMutation(updateUser, {
        onSuccess: res => {
            console.log(res);
            toast.success('Updated!');
            setTimeout(() => {
                window.location.href = '/users';
            }, 2000);
        },
        onError: error => {
            const errMsg = error.response.data.message;
            toast.error(errMsg);
        }
    });
};
export const useUpdateUserAccessMutation = () => {
    return useMutation(updateUserAccess, {
        onSuccess: res => {
            console.log(res);
            toast.success('Updated!');
            setTimeout(() => {
                window.location.href = '/users';
            }, 2000);
        },
        onError: error => {
            const errMsg = error.response.data.message;
            toast.error(errMsg);
        }
    });
};
