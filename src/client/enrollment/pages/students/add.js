import React from 'react';
import Constant from "@utils/constant";
import FormWizard from '../../../components/forms/Wizard';
import Spinner from "../../../shared/Spinner"
import moment from "moment"
import { useSaveStudentMutation } from '../../../appQueryHooks/hooks/student/useMutation';
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
                    console.log(obj);
                    useSave.mutate(obj)
                }}
            />
        </div>
    );
};
const genders = [{ label: "Male", value: "Male", }, { label: "Female", value: "Female", },]
const residencies = [{ label: "on-campus", value: "on_campus", }, { label: "off-campus", value: "off_campus", },]
const statuses = [{ label: "Regular", value: "regular", }, { label: "Foreign", value: "foreign", }, { label: "Fee Paying", value: "fee_paying", }, { label: "Distance", value: "distance", },]
export default Add;