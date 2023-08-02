import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { AnalyzeResults, DelAiResults, importResults, updateResults } from '../../api/results';
import { CreateUser } from '../../api/users';
const initialData = {
    showModal: false,
    modalTitle: '',
    modalSize: '',
    modalBody: null
};
export const useSaveResultsMutation = () => {
    const queryClient = useQueryClient();
    return useMutation(importResults, {
        onSuccess: res => {
            console.log(res);
            // queryClient.invalidateQueries(['candidates']);
            toast.success('Saved!');
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
export const useAnalyzeResultsMutation = () => {
    const queryClient = useQueryClient();
    return useMutation(AnalyzeResults, {
        onSuccess: res => {
            console.log(res);
            // queryClient.invalidateQueries(['candidates']);
            toast.success('Saved!');
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
export const useUpdateResultsMutation = () => {
    return useMutation(updateResults, {
        onSuccess: res => {
            console.log(res);
            toast.success('Updated!');
            setTimeout(() => {
                window.location.reload(true);
            }, 3000);
        },
        onError: error => {
            const errMsg = error.response.data.message;
            toast.error(errMsg);
        }
    });
};
export const useDeleteAIResultsMutation = () => {
    return useMutation(DelAiResults, {
        onSuccess: res => {
            console.log(res);
            toast.success('Deleted!');
            setTimeout(() => {
                window.location.reload(true);
            }, 3000);
        },
        onError: error => {
            const errMsg = error.response.data.message;
            toast.error(errMsg);
        }
    });
};
