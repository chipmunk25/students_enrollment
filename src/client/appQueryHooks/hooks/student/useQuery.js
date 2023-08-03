import { useQuery } from '@tanstack/react-query';
import { getStudents } from '../../api/student';
export const useStudentsQuery = () =>
    useQuery(['students'], getStudents, {
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });
