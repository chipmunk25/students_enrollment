import React from 'react';
import DataTable from '../../../shared/Datatable';
import ChipButton from "../../../components/ChipButton"
import useCommonStore from '../../../hooks/useCommon';
import { useClassesQuery } from "../../../appQueryHooks/hooks/classes/useQuery"
import { formatResponse } from "../../../utils/common"
import Add from './add';
import Edit from './edit';
import ChipButtonGroup from '../../../components/ChipButtonGroup';
import ClassRep from './rep';
import Loader from "../../../shared/Loader"
import MobileTable from '../../../shared/MobTable';
const Classes = () => {
    const { changeModal } = useCommonStore()
    const { data, isLoading } = useClassesQuery()
    return (
        <div className='w-full'>
            {isLoading && <Loader />}
            <div className="hidden md:block">
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
                            key: "student",
                            title: "Class Representative",
                            render: (_, { student }) => (
                                <span>{student?.name}</span>
                            )
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
                                                title: "Class Rep", onClick: () => {
                                                    const modal = {
                                                        show: true,
                                                        title: "Class Representative",
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
                    rows={formatResponse(data, 'classes', [])}
                />
            </div>
            <div className="w-full md:hidden">
                <MobileTable
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
                            key: "student",
                            title: "Class Representative",
                            render: (_, { student }) => (
                                <span>{student?.name}</span>
                            )
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
                                                title: "Class Rep", onClick: () => {
                                                    const modal = {
                                                        show: true,
                                                        title: "Class Representative",
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
                    rows={formatResponse(data, 'classes', [])}
                />
            </div>
        </div>
    );
};
export default Classes;