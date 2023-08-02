import { useQuery } from '@tanstack/react-query';
import { getParties } from '../../api/party';

export const usePartiesQuery = () =>
    useQuery(['parties'], getParties, {
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });
