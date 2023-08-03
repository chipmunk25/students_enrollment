import { useQuery } from '@tanstack/react-query';
import { getCourses } from '../../api/course';
export const useCoursesQuery = () =>
    useQuery(['courses'], getCourses, {
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });
