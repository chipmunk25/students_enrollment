import React from 'react';
import DataTable from '../../../shared/Datatable';
import MobileTable from '../../../shared/MobTable';
import ChipButton from "../../../components/ChipButton"
import useCommonStore from '../../../hooks/useCommon';
import { useStudentsQuery } from "../../../appQueryHooks/hooks/student/useQuery"
import { formatResponse } from "../../../utils/common"
import moment from "moment"
import Add from './add';
import Edit from './edit';
import ChipButtonGroup from '../../../components/ChipButtonGroup';
import RegisterStudents from './lists';
import { genders, residencies, statuses, findLabel } from './constant';
import ClassRep from './rep';

const Students = () => {
    const { changeModal } = useCommonStore()
    const { data, isLoading } = useStudentsQuery()
    return (
        <div className='w-full'>
            <div className="hidden md:block">
                <DataTable
                    title="Students"
                    searchTerms={["studentId", "name",]}
                    actionTools={
                        <div className="flex items-center justify-start gap-1 ">
                            <ChipButton primary title="New Student" onClick={() => {
                                const modal = {
                                    show: true,
                                    title: "New Student",
                                    size: "medium",
                                    content: <Add />,
                                }
                                changeModal(modal)
                            }} type="button" />
                        </div>
                    }
                    columns={[
                        {
                            key: "photograph",
                            title: "",
                            render: (_, { photograph }) => (
                                <div className="flex items-center justify-center">
                                    <img className="w-12 h-12 rounded-full" src={photograph} />
                                </div>
                            )
                        }, {
                            key: "studentId",
                            title: "Student ID",
                        }, {
                            key: "name",
                            title: "Student Name",
                        }, {
                            key: "dateOfBirth",
                            title: "Date of Birth",
                            render: (_, { dateOfBirth }) => (
                                <span>{moment(dateOfBirth).format("LL")}</span>
                            )
                        },
                        {
                            key: "gender",
                            title: "Gender",
                            render: (_, { gender }) => (
                                <span>{gender ? findLabel(genders, gender)?.label : ""}</span>
                            )
                        },
                        {
                            key: "residency",
                            title: "Residency",
                            render: (_, { residency }) => (
                                <span>{residency ? findLabel(residencies, residency)?.label : ""}</span>
                            )
                        },
                        {
                            key: "status",
                            title: "Status",
                            render: (_, { status }) => (
                                <span>{status ? findLabel(statuses, status)?.label : ""}</span>
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
                                                        title: "Edit Student",
                                                        size: "medium",
                                                        content: <Edit detail={row} />,
                                                    };
                                                    changeModal(modal);
                                                }
                                            }, {
                                                title: "Class Rep", onClick: () => {
                                                    const modal = {
                                                        show: true,
                                                        title: "Set Student as Class Ref",
                                                        size: "medium",
                                                        content: <ClassRep detail={row} />,
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
                    rows={formatResponse(data, 'students', [])}
                />
            </div>
            <div className="w-full md:hidden">
                <MobileTable
                    title="Students"
                    searchTerms={["studentId", "name",]}
                    actionTools={
                        <div className="flex items-center justify-start gap-1 ">
                            <ChipButton primary title="New Student" onClick={() => {
                                const modal = {
                                    show: true,
                                    title: "New Student",
                                    size: "medium",
                                    content: <Add />,
                                }
                                changeModal(modal)
                            }} type="button" />
                        </div>
                    }
                    columns={[
                        {
                            key: "photograph",
                            title: "Photo",
                            render: (_, { photograph }) => (
                                <div className="flex items-center justify-start">
                                    <img className="w-12 h-12 rounded-full" src={photograph} />
                                </div>
                            )
                        }, {
                            key: "studentId",
                            title: "Student ID",
                        }, {
                            key: "name",
                            title: "Student Name",
                        }, {
                            key: "dateOfBirth",
                            title: "Date of Birth",
                            render: (_, { dateOfBirth }) => (
                                <span>{moment(dateOfBirth).format("LL")}</span>
                            )
                        },
                        {
                            key: "gender",
                            title: "Gender",
                            render: (_, { gender }) => (
                                <span>{gender ? findLabel(genders, gender)?.label : ""}</span>
                            )
                        },
                        {
                            key: "residency",
                            title: "Residency",
                            render: (_, { residency }) => (
                                <span>{residency ? findLabel(residencies, residency)?.label : ""}</span>
                            )
                        },
                        {
                            key: "status",
                            title: "Status",
                            render: (_, { status }) => (
                                <span>{status ? findLabel(statuses, status)?.label : ""}</span>
                            )
                        },
                        {
                            key: 'action',
                            title: 'Actions',
                            render: (_, row) => (
                                <div className="flex items-center justify-start gap-2 max-w-48">
                                    <ChipButtonGroup btns={
                                        [
                                            {
                                                title: "Edit", onClick: () => {
                                                    const modal = {
                                                        show: true,
                                                        title: "Edit Student",
                                                        size: "medium",
                                                        content: <Edit detail={row} />,
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
                    rows={formatResponse(data, 'students', [])}

                />
            </div>
        </div>
    );
};

export default Students;