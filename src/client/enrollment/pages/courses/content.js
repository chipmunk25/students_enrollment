import moment from 'moment';
import React from 'react';
import { genders, residencies, statuses, findLabel } from '../students/constant';
const PrintContent = ({ students, course }) => {
    return (
        <div>
            <div className="w-full p-5">
                <div className='flex justify-center pb-5'><span>Lists of Registered Students under {course?.courseName} </span></div>
                <table className="w-full text-left border">
                    <thead className="bg-gray-200 border-b">
                        <tr>
                            <th className="px-2 border-r">Student ID</th>
                            <th className="px-2 border-r">Name</th>
                            <th className="px-2 border-r">Gender</th>
                            <th className="px-2 border-r">DOB</th>
                            <th className="px-2 border-r">Residency</th>
                            <th className="px-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students?.map(({ student }, idx) => (
                                <tr className="border-b even:bg-gray-50" key={idx}>
                                    <td className="px-2 border-r">{student?.studentId}</td>
                                    <td className="px-2 border-r">{student?.name}</td>
                                    <td className="px-2 border-r"> {student?.gender ? findLabel(genders, student?.gender)?.label : ""}</td>
                                    <td className="px-2 border-r"> {student?.residency ? findLabel(residencies, student?.residency)?.label : ""} </td>
                                    <td className="px-2 border-r">
                                        {student?.dateOfBirth ? moment(student?.dateOfBirth).format('LL') : ''}
                                    </td>
                                    <td className="px-2 border-r">{student?.status ? findLabel(statuses, student?.status)?.label : ""} </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default PrintContent;