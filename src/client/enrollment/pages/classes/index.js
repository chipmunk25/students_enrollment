import React from 'react';
import DataTable from '../../../shared/Datatable';
import ChipButton from "../../../components/ChipButton"
import useCommonStore from '../../../hooks/useCommon';
import { useClassesQuery } from "../../../appQueryHooks/hooks/classes/useQuery"
import { formatResponse } from "../../../utils/common"
import Add from './add';
import Edit from './edit';
import ChipButtonGroup from '../../../components/ChipButtonGroup';
import RegisterStudents from './lists';
const Classes = () => {
    const { changeModal } = useCommonStore()
    const { data, isLoading } = useClassesQuery()
    return (
        <div className='w-full'>
            <DataTable
                title="Classes"
                searchTerms={["className"]}
                actionTools={
                    <div className="flex items-center justify-start gap-1 ">
                        <ChipButton primary title="New Class" onClick={() => {
                            const modal = {
                                show: true,
                                title: "New Class",
                                size: "medium",
                                content: <Add />,
                            }
                            changeModal(modal)
                        }} type="button" />
                    </div>
                }
                columns={[
                    {
                        key: "className",
                        title: "Class Name",
                    },
                    {
                        key: "maxClassSize",
                        title: "Max Class Size",
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
                                                    title: "Edit Class",
                                                    size: "medium",
                                                    content: <Edit detail={row} />,
                                                };
                                                changeModal(modal);
                                            }
                                        }, {
                                            title: "Register Students", onClick: () => {
                                                const modal = {
                                                    show: true,
                                                    title: "Register Students to Class",
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
                rows={formatResponse(data, 'classes', [])}
            />
        </div>
    );
};
export default Classes;