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
const Students = () => {
    const { changeModal } = useCommonStore()
    const { data, isLoading } = useCoursesQuery()
    return (
        <div className='w-full'>
            <DataTable
                title="Students"
                searchTerms={["courseName"]}
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
    );
};
export default Students;