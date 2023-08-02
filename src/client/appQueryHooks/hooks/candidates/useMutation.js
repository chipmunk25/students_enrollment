import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { SaveCandidate, UpdateCandidate } from '../../api/candidate';
const initialData = {
    showModal: false,
    modalTitle: '',
    modalSize: '',
    modalBody: null
};

export const useSaveCandidateMutation = () => {
    const queryClient = useQueryClient();
    return useMutation(SaveCandidate, {
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
