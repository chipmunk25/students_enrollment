import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

let initialData = {
    showModal: false,
    modalTitle: '',
    modalSize: '',
    modalBody: null
};
// const queryClient = useQueryClient();
// export const HideModal = () => {
//     queryClient.setQueryData(['modal'], () => {
//         return initialData;
//     });
// };
const showModal = data => {
    const res = Promise.resolve(data);
    return res;
};
export const useModalQuery = () =>
    useQuery(['modal'], () => Promise.resolve(console.log('Get Modal')), {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        initialData: () => initialData
    });

export const useShowModal = () => {
    const queryClient = useQueryClient();

    return useMutation(showModal, {
        onSuccess: response => {
            queryClient.setQueryData(['modal'], prevData => ({
                ...prevData,
                ...response
            }));
        },
        onError: error => {}
    });
};
