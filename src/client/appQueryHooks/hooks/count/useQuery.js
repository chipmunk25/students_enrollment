import {
    GetConstituenciesStats,
    GetConstituenciesSubmitted,
    GetRegionConstituencies,
    GetRegionalStats
} from '../../api/count';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
export const useRegionConstituenciesCountQuery = payload =>
    useQuery(['regionConsCount', payload], GetRegionConstituencies, {
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });
export const useConstituenciesSubmittedQuery = payload =>
    useQuery(['constituencySubmitted', payload], GetConstituenciesSubmitted, {
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });

export const useConstituenciesSubmittedInfiniteQuery = payload =>
    useInfiniteQuery(['constituencyPSSubmitted', payload], GetConstituenciesSubmitted, {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        getNextPageParam: lastPage => {
            if (lastPage.page + lastPage.size > lastPage.totalPages) {
                return false;
            }
            return lastPage.page + lastPage.size;
        }
    });

export const useConstituenciesStatsInfiniteQuery = payload =>
    useInfiniteQuery(['constituencyPSStats', payload], GetConstituenciesStats, {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        getNextPageParam: lastPage => {
            if (lastPage.page + lastPage.size > lastPage.totalPages) {
                return false;
            }
            return lastPage.page + lastPage.size;
        }
    });

export const useRegionalStatsInfiniteQuery = payload =>
    useInfiniteQuery(['regionalPSStats', payload], GetRegionalStats, {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        getNextPageParam: lastPage => {
            if (lastPage.page + lastPage.size > lastPage.totalPages) {
                return false;
            }
            return lastPage.page + lastPage.size;
        }
    });
