import { QueryCache, useQuery } from '@tanstack/react-query';
import {
    getAllConstituencies,
    getAllPollingStations,
    getConstituencies,
    getConstituency,
    getConstituencyPS,
    getDistrict,
    getDistricts,
    getPollingStation,
    getPollingStations,
    getRegion,
    getRegions,
    getTown,
    getTowns
} from '../../api/regional';

export const useRegionQuery = () =>
    useQuery(['regions'], getRegions, {
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });
export const useAllConstituenciesQuery = () =>
    useQuery(['allconstituencies'], getAllConstituencies, {
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });

export const useSingleRegionQuery = id =>
    useQuery(['region', id], getRegion, {
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });

export const useDistrictQuery = regionId =>
    useQuery(['districts', regionId], getDistricts, {
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });

export const useSingleDistrictQuery = id =>
    useQuery(['district', id], getDistrict, {
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });

export const useConstituencyQuery = districtId =>
    useQuery(['constituencies', districtId], getConstituencies, {
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });

export const useSingleConstituencyQuery = id =>
    useQuery(['constituency', id], getConstituency, {
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });

export const useConstituencyPSQuery = id =>
    useQuery(['constituency', id], getConstituencyPS, {
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });

export const useTownQuery = constituencyId =>
    useQuery(['towns', constituencyId], getTowns, {
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });

export const useSingleTownQuery = id =>
    useQuery(['town', id], getTown, {
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });

export const usePollingStationQuery = townId =>
    useQuery(['ps', townId], getPollingStations, {
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });

export const useSinglePSQuery = id =>
    useQuery(['singleps', id], getPollingStation, {
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });

export const useAllPollingStationQuery = () =>
    useQuery(['pollingstation'], getAllPollingStations, {
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });
