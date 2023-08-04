import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import useCommonStore from '../../../hooks/useCommon';
import { CreateCourse, CreateCourseRegistration, updateCourse } from '../../api/course';


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

export const useUpdateCourseMutation = () => {
    const queryClient = useQueryClient();
    const { resetModal } = useCommonStore()

    return useMutation(updateCourse, {
        onSuccess: res => {
            console.log(res);
            queryClient.invalidateQueries(['courses']);
            toast.success('Course Updated!');
            resetModal()
        },
        onError: error => {
            const errMsg = error.response.data.message;
            toast.error(errMsg);
        }
    });
};

export const useSaveCourseRegistrationMutation = () => {
    const queryClient = useQueryClient();
    const { resetModal } = useCommonStore()

    return useMutation(CreateCourseRegistration, {
        onSuccess: res => {
            console.log(res);
            queryClient.invalidateQueries(['courses']);
            toast.success('Course Updated!');
            resetModal()
        },
        onError: error => {
            const errMsg = error.response.data.message;
            toast.error(errMsg);
        }
    });
};
