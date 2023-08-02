import { useQuery } from '@tanstack/react-query';
import {
    getAllConstituencyResultsByType,
    getConstituencyResultsByType,
    getDistrictResultsByType,
    getNationalResultsByType,
    getRegionalResultsByType,
    getTownResultsByType
} from '../../api/stats';

export const useNationalStatsQuery = type =>
    useQuery(['nationalStats', type], getNationalResultsByType, {
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });

export const useRegionalStatsQuery = payload =>
    useQuery(['regionalStats', payload], getRegionalResultsByType, {
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });

export const useDistrictStatsQuery = payload =>
    useQuery(['districtStats', payload], getDistrictResultsByType, {
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });

export const useConstituencyStatsQuery = payload =>
    useQuery(['constituencyStats', payload], getConstituencyResultsByType, {
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });
export const useAllConstituencyStatsQuery = payload =>
    useQuery(['allConstituencyStats', payload], getAllConstituencyResultsByType, {
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });

export const useTownStatsQuery = payload =>
    useQuery(['townsStats', payload], getTownResultsByType, {
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });
