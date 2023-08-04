import { useQuery } from '@tanstack/react-query';
import { getCourses, getRegisteredCourses, getSingleCourse } from '../../api/course';
export const useCoursesQuery = () =>
    useQuery(['courses'], getCourses, {
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });
export const useRegisteredCoursesQuery = (courseId) =>
    useQuery(['registered-students', courseId], getRegisteredCourses, {
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });

export const useSingleCourseQuery = (courseId) =>
    useQuery(['course', courseId], getSingleCourse, {
        refetchOnMount: false,
        refetchOnWindowFocus: false
    });
