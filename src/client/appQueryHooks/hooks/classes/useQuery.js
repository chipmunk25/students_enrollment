import { useQuery } from '@tanstack/react-query';
import { getClasses } from '../../api/classes';
export const useClassesQuery = () =>
    useQuery(['classes'], getClasses, {
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });
