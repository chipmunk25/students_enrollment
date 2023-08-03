import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import useCommonStore from '../../../hooks/useCommon';
import { CreateCourse } from '../../api/course';


export const useSaveCourseMutation = () => {
    const queryClient = useQueryClient();
    const { resetModal } = useCommonStore()
    return useMutation(CreateCourse, {
        onSuccess: res => {
            console.log(res);
            queryClient.invalidateQueries(['courses']);
            toast.success('Course Saved!');
            resetModal()
        },
        onError: error => {
            const errMsg = error.response.data.message;
            toast.error(errMsg);
        }
    });
};
export const useUpdateCandidateMutation = () => {
    const queryClient = useQueryClient();
    return useMutation(UpdateCandidate, {
        onSuccess: res => {
            console.log(res);
            queryClient.invalidateQueries(['candidates']);
            toast.success('Saved!');
            queryClient.setQueryData(['modal'], () => {
                return initialData;
            });
        },
        onError: error => {
            const errMsg = error.response.data.message;
            toast.error(errMsg);
        }
    });
};
