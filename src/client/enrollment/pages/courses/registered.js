import React, { useRef } from 'react';
import { IoArrowBackCircleOutline, IoPrintOutline } from 'react-icons/io5';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { useReactToPrint } from 'react-to-print';
import PrintContainer from './print';
import { useRegisteredCoursesQuery, useSingleCourseQuery } from '../../../appQueryHooks/hooks/course/useQuery';
import { formatResponse } from '../../../utils/common';
import PrintContent from './content';
import { useNavigate, useParams } from 'react-router-dom';
import { ExportPDFHandler } from '../../../utils/exportPdf';
import ChipButtonGroup from '../../../components/ChipButtonGroup';
const Registered = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const { data } = useRegisteredCoursesQuery(id)
    const { data: course } = useSingleCourseQuery(id)
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current
    });
    return (
        <div className='w-full'>
            <div className='flex flex-col justify-center w-full gap-4 px-5  md:justify-between md:flex-row'>
                <span className='text-2xl font-bold'>Registered Students Lists</span>
                <div className='flex'>
                    <ChipButtonGroup btns={
                        [
                            { icon: <AiOutlineFilePdf />, title: "Export PDF", onClick: () => { ExportPDFHandler(formatResponse(data, 'students', []), `Lists of Registered Students under ${formatResponse(course, 'course', {})?.courseName}`) }, },
                            { icon: <IoPrintOutline />, title: "Print", onClick: () => { handlePrint() }, },
                            { icon: <IoArrowBackCircleOutline />, title: "Back", onClick: () => { navigate(-1) }, },
                        ]
                    } />
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