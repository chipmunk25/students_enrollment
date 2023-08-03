import React from 'react';
import DataTable from '../../../shared/Datatable';
import ChipButton from "../../../components/ChipButton"
import useCommonStore from '../../../hooks/useCommon';
import { useCoursesQuery } from "../../../appQueryHooks/hooks/course/useQuery"
import { formatResponse } from "../../../utils/common"
import moment from "moment"
import Add from './add';
const Courses = () => {
    const { changeModal } = useCommonStore()
    const { data, isLoading } = useCoursesQuery()
    return (
        <div className='w-full'>
            <DataTable
                title="Courses"
                searchTerms={["courseName"]}
                actionTools={
                    <div className="flex items-center justify-start gap-1 ">
                        <ChipButton primary title="New Course" onClick={() => {
                            const addModal = {
                                show: true,
                                title: "New Course",
                                size: "medium",
                                content: <Add />,
                            }
                            changeModal(addModal)
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
                        render: ({ startDate }) => (
                            <span>{moment(startDate).format("LL")}</span>
                        )
                    },
                    {
                        key: "duration",
                        title: "Duration",
                    },
                ]}
                rows={formatResponse(data, 'courses', [])}
            />
        </div>
    );
};
export default Courses;