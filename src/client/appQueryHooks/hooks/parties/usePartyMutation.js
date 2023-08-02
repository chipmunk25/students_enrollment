import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { SaveParty, updateParty } from '../../api/party';
const initialData = {
    showModal: false,
    modalTitle: '',
    modalSize: '',
    modalBody: null
};

export const useSavePartyMutation = () => {
    const queryClient = useQueryClient();
    return useMutation(SaveParty, {
        onSuccess: res => {
            console.log(res);
            queryClient.invalidateQueries(['parties']);
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

export const useUpdatePartyMutation = () => {
    const queryClient = useQueryClient();
    return useMutation(updateParty, {
        onSuccess: res => {
            console.log(res);
            queryClient.invalidateQueries(['parties']);
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
