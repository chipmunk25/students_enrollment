import React, { useRef } from 'react';
import { IoPrintOutline } from 'react-icons/io5';
import ChipButton from '../../../components/ChipButton';
import { useReactToPrint } from 'react-to-print';
import PrintContainer from './print';
import { useRegisteredCoursesQuery, useSingleCourseQuery } from '../../../appQueryHooks/hooks/course/useQuery';
import { formatResponse } from '../../../utils/common';
import PrintContent from './content';
import { useParams } from 'react-router-dom';
const Registered = () => {
    const { id } = useParams()
    const { data } = useRegisteredCoursesQuery(id)
    const { data: course } = useSingleCourseQuery(id)
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current
    });
    return (
        <div className='w-full'>
            <div className='flex justify-between w-full'>
                <span>Lists of Students Registered under { }</span>
                <div className='max-w-sm '>
                    <ChipButton onClick={() => handlePrint()}
                        type="button" title="Print" primary position="left" icon={<IoPrintOutline />} />
                </div>
            </div>
            <div>
                <PrintContent students={formatResponse(data, 'students', [])} course={formatResponse(course, 'course', {})} />
                <PrintContainer students={formatResponse(data, 'students', [])} course={formatResponse(course, 'course', {})} componentRef={componentRef} />
            </div>
        </div>
    );
};
export default Registered;