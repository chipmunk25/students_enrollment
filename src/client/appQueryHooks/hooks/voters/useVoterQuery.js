import { useQuery } from '@tanstack/react-query';
import { FindExistingVoters, getVoters } from '../../api/voters';

export const useRegisteredVotersQuery = data =>
    useQuery(['registeredVoters', data], FindExistingVoters, {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        enabled: false
    });

export const useVotersQuery = () =>
    useQuery(['voters'], getVoters, {
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });
