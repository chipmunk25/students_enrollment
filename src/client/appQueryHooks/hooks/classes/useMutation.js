import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import useCommonStore from '../../../hooks/useCommon';
import { CreateClass, updateClass } from '../../api/classes';
export const useSaveClassMutation = () => {
    const queryClient = useQueryClient();
    const { resetModal } = useCommonStore()
    return useMutation(CreateClass, {
        onSuccess: res => {
            console.log(res);
            queryClient.invalidateQueries(['classes']);
            toast.success('Class Saved!');
            resetModal()
        },
        onError: error => {
            const errMsg = error.response.data.message;
            toast.error(errMsg);
        }
    });
};
export const useUpdateClassMutation = () => {
    const queryClient = useQueryClient();
    const { resetModal } = useCommonStore()
    return useMutation(updateClass, {
        onSuccess: res => {
            console.log(res);
            queryClient.invalidateQueries(['classes']);
            toast.success('Class Updated!');
            resetModal()
        },
        onError: error => {
            const errMsg = error.response.data.message;
            toast.error(errMsg);
        }
    });
};
