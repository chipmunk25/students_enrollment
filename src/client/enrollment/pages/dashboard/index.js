import React from 'react';
import { Link } from 'react-router-dom';
import { useCoursesQuery } from '../../../appQueryHooks/hooks/course/useQuery';
import { formatResponse } from '../../../utils/common';
import Card from './card';

const colors = ['blue', 'red', 'green']
const Dashboard = () => {
    const { data, isLoading } = useCoursesQuery()

    return (
        <div className='w-full'>
            <span className='text-2xl font-bold'>Dashboard</span>
            <div className='py-3'>
                <div className='pb-2'>
                    <span className='text-lg font-semibold'>Courses and Students Registered</span>
                </div>
                <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {formatResponse(data, 'courses', [])?.map((course, idx) => (
                        <Card color={colors[idx] || 'grey'} key={idx}>
                            <Link to={`/courses/${course?.id}/registered`} className='flex items-center justify-between w-full'>
                                <span className='text-lg font-semibold'>{course?.courseName}</span>
                                <span className='text-4xl font-bold'>{course?.registeredstudents?.length}</span>
                            </Link>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;