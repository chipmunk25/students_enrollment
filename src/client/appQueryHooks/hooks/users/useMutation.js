import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import useAuthStore from '../../../hooks/auth';
import { CreateUser, forgotPwd, LoginUser, ResetPwd, updateUser, updateUserAccess } from '../../api/users';
export const useForgotMutation = () => {
    // const queryClient = useQueryClient();
    return useMutation(forgotPwd, {
        onSuccess: res => {
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
    const { setToken, setUserId } = useAuthStore()
    return useMutation(LoginUser, {
        onSuccess: response => {
            const token = response.data.token
            const userId = response.data.userId
            setToken(token)
            setUserId(userId)
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
