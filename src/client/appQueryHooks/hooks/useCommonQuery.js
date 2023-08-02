import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createMenuItem, getMenus } from '../../api/nav';

let modalData = {
    showModal: false,
    modalTitle: '',
    modalType: '',
    modalSize: ''
};
export const useMenusQuery = () =>
    useQuery(['getMenus'], getMenus, {
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });

export const useCommonState = () => {
    const queryClient = useQueryClient();
    return useMutation(createMenuItem, {
        onSuccess: response => {
            queryClient.invalidateQueries(['authUser']);
        },
        onError: error => {
            const errMsg = error.response.data.message;
            toast.error(errMsg);
        }
    });
};
