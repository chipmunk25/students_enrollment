import { useQuery } from '@tanstack/react-query';
import { getCollections, getNational, getNationalConstituencies } from '../../api/national';

export const useNationalQuery = () =>
    useQuery(['national'], getNational, {
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });

export const useCollectionsQuery = () =>
    useQuery(['collections'], getCollections, {
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });

export const useNationalConstituenciesQuery = () =>
    useQuery(['nationalConstituencies'], getNationalConstituencies, {
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });
