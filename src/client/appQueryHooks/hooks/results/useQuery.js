import { useQuery } from '@tanstack/react-query';

import {
    getAiTownResultsByType,
    getConstituencyAiResultsByType,
    getConstituencyResults,
    getConstituencyResultsByType,
    getPSResultsByType,
    getSubmissionResultsByType,
    getTownResultsByType,
    getUnconfirmedPSResultsByType
} from '../../api/results';

export const useConstituencyResultsQuery = id =>
    useQuery(['constituencyResults', id], getConstituencyResults, {
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });

export const useConstituencyResultsByTypeQuery = data =>
    useQuery(['constituencyResultsByType', data], getConstituencyResultsByType, {
        refetchOnMount: false,
        refetchOnWindowFocus: false
        // keepPreviousData: false
    });

export const useTownResultsByTypeQuery = data =>
    useQuery(['townResultsByType', data], getTownResultsByType, {
        refetchOnMount: false,
        refetchOnWindowFocus: false
        // keepPreviousData: false
    });

export const usePSResultsByTypeQuery = data =>
    useQuery(['psResultsByType', data], getPSResultsByType, {
        refetchOnMount: false,
        refetchOnWindowFocus: false
        // keepPreviousData: false
    });

export const useUnconfirmedPSResultsByTypeQuery = data =>
    useQuery(['unconfirmedPsResultsByType', data], getUnconfirmedPSResultsByType, {
        refetchOnMount: false,
        refetchOnWindowFocus: false
        // keepPreviousData: false
    });

export const useSubmissionResultsByTypeQuery = data =>
    useQuery(['submissionResultsByTypeQuery', data], getSubmissionResultsByType, {
        refetchOnMount: false,
        refetchOnWindowFocus: false
        // keepPreviousData: false
    });

export const useAiTownResultsByTypeQuery = data =>
    useQuery(['townAiResultsByType', data], getAiTownResultsByType, {
        refetchOnMount: false,
        refetchOnWindowFocus: false
        // keepPreviousData: false
    });

export const useConstituencyAiResultsByTypeQuery = data =>
    useQuery(['constituencyAiResultsByType', data], getConstituencyAiResultsByType, {
        refetchOnMount: false,
        refetchOnWindowFocus: false
        // keepPreviousData: false
    });
