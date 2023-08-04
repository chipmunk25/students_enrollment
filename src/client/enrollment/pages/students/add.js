import React from 'react';
import Constant from "@utils/constant";
import FormWizard from '../../../components/forms/Wizard';
import Spinner from "../../../shared/Spinner"
import moment from "moment"
import { useSaveStudentMutation } from '../../../appQueryHooks/hooks/student/useMutation';
import { genders, residencies, statuses } from './constant';
const Add = () => {
    const useSave = useSaveStudentMutation()
    return (
        <div>
            {useSave.isLoading && <Spinner />}
            <FormWizard fields={[{
                type: Constant.TEXT,
                name: "studentId",
                label: "Student ID",
                placeholder: "Enter Student ID",
                autoFocus: true,
                required: true,
            },
            {
                type: Constant.TEXT,
                name: "name",
                label: "Name",
                placeholder: "Enter Name",
                required: true,
            }, {
                type: Constant.DATE,
                name: "dateOfBirth",
                label: "Date of Birth",
                required: true,
            }, {
                type: Constant.SELECT,
                name: "gender",
                label: "Gender",
                required: true,
                options: genders
            }, {
                type: Constant.SELECT,
                name: "residency",
                label: "Residency",
                required: true,
                options: residencies
            }, {
                type: Constant.SELECT,
                name: "status",
                label: "Status",
                required: true,
                options: statuses
            },
            {
                type: Constant.IMAGE,
                name: "photograph",
                label: "Photo",
                required: true,
            },
            {
                type: Constant.SUBMIT,
                primary: true,
                title: "Save",
                fluid: true,
            },
            ]}
                initialValues={{
                    studentId: '',
                    name: '',
                    photograph: '',
                    status: '',
                    residency: '',
                    gender: '',
                    dateOfBirth: '',
                }}
                validations={{
                    studentId: ["string", "Student ID"],
                    name: ["string", "Student Name"],
                    photograph: ["image", "Photo"],
                    status: ["object", "Status"],
                    residency: ["object", "Residency"],
                    gender: ["object", "Gender"],
                    dateOfBirth: ["date", "Date of Birth"],
                }}
                onSubmit={(values) => {
                    const obj = values
                    obj.gender = values?.gender?.value
                    obj.status = values?.status?.value
                    obj.residency = values?.residency?.value
                    obj.dateOfBirth = moment(values.dateOfBirth).format("YYYY-MM-DD")
                    for (const key in obj) {
                        if (typeof obj[key] === 'string') {
                            obj[key] = obj[key].trim();
                        }
                    }
                    useSave.mutate(obj)
                }}
            />
        </div>
    );
};
export default Add;