import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import useCommonStore from '../../../hooks/useCommon';
import { RegisterStudent, UpdateStudent } from '../../api/student';
export const useSaveStudentMutation = () => {
    const queryClient = useQueryClient();
    const { resetModal } = useCommonStore()
    return useMutation(RegisterStudent, {
        onSuccess: res => {
            queryClient.invalidateQueries(['students']);
            toast.success('Student Saved!');
            resetModal()
        },
        onError: error => {
            const errMsg = error.response.data.message;
            toast.error(errMsg);
        }
    });
};
export const useUpdateStudentMutation = () => {
    const queryClient = useQueryClient();
    const { resetModal } = useCommonStore()
    return useMutation(UpdateStudent, {
        onSuccess: res => {
            queryClient.invalidateQueries(['students']);
            toast.success('Student Updated!');
            resetModal()
        },
        onError: error => {
            const errMsg = error.response.data.message;
            toast.error(errMsg);
        }
    });
};