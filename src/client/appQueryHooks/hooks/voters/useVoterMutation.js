import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { SaveVoters } from '../../api/voters';
const initialData = {
    showModal: false,
    modalTitle: '',
    modalSize: '',
    modalBody: null
};

export const useSaveVotersMutation = () => {
    const queryClient = useQueryClient();

    return useMutation(SaveVoters, {
        onSuccess: res => {
            console.log(res);
            queryClient.invalidateQueries(['voters']);
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
