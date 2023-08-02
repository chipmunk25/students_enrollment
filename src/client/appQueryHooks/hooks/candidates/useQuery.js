import { getCandidates, getConstituencyCandidates, getNationalCandidates } from '../../api/candidate';

import { useQuery } from '@tanstack/react-query';

export const useCandidatesQuery = () =>
    useQuery(['candidates'], getCandidates, {
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });

export const useNationalCandidatesQuery = () =>
    useQuery(['nationalCandidates'], getNationalCandidates, {
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });

export const useConstituencyCandidatesQuery = payload =>
    useQuery(['constituencyCandidates', payload], getConstituencyCandidates, {
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });
