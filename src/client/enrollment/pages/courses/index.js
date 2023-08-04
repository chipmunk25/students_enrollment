import React from 'react';
import DataTable from '../../../shared/Datatable';
import ChipButton from "../../../components/ChipButton"
import useCommonStore from '../../../hooks/useCommon';
import { useCoursesQuery } from "../../../appQueryHooks/hooks/course/useQuery"
import { formatResponse } from "../../../utils/common"
import moment from "moment"
import Add from './add';
import Edit from './edit';
import ChipButtonGroup from '../../../components/ChipButtonGroup';
import RegisterStudents from './lists';
import { useNavigate } from 'react-router-dom';
import MobileTable from '../../../shared/MobTable';
const Courses = () => {
    const navigate = useNavigate()
    const { changeModal } = useCommonStore()
    const { data, isLoading } = useCoursesQuery()
    return (
        <div className='w-full'>
            <div className="hidden md:block">
                <DataTable
                    title="Courses"
                    searchTerms={["courseName"]}
                    actionTools={
                        <div className="flex items-center justify-start gap-1 ">
                            <ChipButton primary title="New Course" onClick={() => {
                                const modal = {
                                    show: true,
                                    title: "New Course",
                                    size: "medium",
                                    content: <Add />,
                                }
                                changeModal(modal)
                            }} type="button" />
                        </div>
                    }
                    columns={[
                        {
                            key: "courseName",
                            title: "Course Name",
                        }, {
                            key: "startDate",
                            title: "Start Date",
                            render: (_, { startDate }) => (
                                <span>{moment(startDate).format("LL")}</span>
                            )
                        },
                        {
                            key: "duration",
                            title: "Duration",
                        }, {
                            key: "registeredstudents",
                            title: "Total Registered Students",
                            render: (_, { id, registeredstudents }) => (
                                <div>
                                    {registeredstudents?.length > 0 ? <button onClick={() => {
                                        navigate(`/courses/${id}/registered`)
                                    }} title='Click to View' className='text-blue-500 underline '>{registeredstudents?.length}</button> : <span>{registeredstudents?.length} </span>}
                                </div>

                            )
                        },
                        {
                            key: 'action',
                            title: 'Actions',
                            render: (_, row) => (
                                <div className="flex items-center justify-end gap-2 max-w-48">
                                    <ChipButtonGroup btns={
                                        [
                                            {
                                                title: "Edit", onClick: () => {
                                                    const modal = {
                                                        show: true,
                                                        title: "Edit Course",
                                                        size: "medium",
                                                        content: <Edit detail={row} />,
                                                    };
                                                    changeModal(modal);
                                                }
                                            }, {
                                                title: "Register Students", onClick: () => {
                                                    const modal = {
                                                        show: true,
                                                        title: "Register Students to Course",
                                                        size: "medium",
                                                        content: <RegisterStudents detail={row} />,
                                                    };
                                                    changeModal(modal);
                                                }
                                            },
                                        ]
                                    } />
                                </div>
                            )
                        }
                    ]}
                    rows={formatResponse(data, 'courses', [])}
                />
            </div>
            <div className="w-full md:hidden">
                <MobileTable
                    title="Courses"
                    searchTerms={["courseName"]}
                    actionTools={
                        <div className="flex items-center justify-start gap-1 ">
                            <ChipButton primary title="New Course" onClick={() => {
                                const modal = {
                                    show: true,
                                    title: "New Course",
                                    size: "medium",
                                    content: <Add />,
                                }
                                changeModal(modal)
                            }} type="button" />
                        </div>
                    }
                    columns={[
                        {
                            key: "courseName",
                            title: "Course Name",
                        }, {
                            key: "startDate",
                            title: "Start Date",
                            render: (_, { startDate }) => (
                                <span>{moment(startDate).format("LL")}</span>
                            )
                        },
                        {
                            key: "duration",
                            title: "Duration",
                        }, {
                            key: "registeredstudents",
                            title: "Total Registered Students",
                            render: (_, { id, registeredstudents }) => (
                                <div>
                                    {registeredstudents?.length > 0 ? <button onClick={() => {
                                        navigate(`/courses/${id}/registered`)
                                    }} title='Click to View' className='text-blue-500 underline '>{registeredstudents?.length}</button> : <span>{registeredstudents?.length} </span>}
                                </div>

                            )
                        },
                        {
                            key: 'action',
                            title: 'Actions',
                            render: (_, row) => (
                                <div className="flex items-center justify-end gap-2 max-w-48">
                                    <ChipButtonGroup btns={
                                        [
                                            {
                                                title: "Edit", onClick: () => {
                                                    const modal = {
                                                        show: true,
                                                        title: "Edit Course",
                                                        size: "medium",
                                                        content: <Edit detail={row} />,
                                                    };
                                                    changeModal(modal);
                                                }
                                            }, {
                                                title: "Register Students", onClick: () => {
                                                    const modal = {
                                                        show: true,
                                                        title: "Register Students to Course",
                                                        size: "medium",
                                                        content: <RegisterStudents detail={row} />,
                                                    };
                                                    changeModal(modal);
                                                }
                                            },
                                        ]
                                    } />
                                </div>
                            )
                        }
                    ]}
                    rows={formatResponse(data, 'courses', [])}
                />
            </div>
        </div>
    );
};
export default Courses;