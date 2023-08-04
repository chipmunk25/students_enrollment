import React from 'react';
import Constant from "@utils/constant";
import FormWizard from '../../../components/forms/Wizard';
import { useSaveCourseMutation } from '../../../appQueryHooks/hooks/course/useMutation';
import Spinner from "../../../shared/Spinner"
import moment from "moment"
const Add = () => {
    const useSave = useSaveCourseMutation()
    return (
        <div>
            {useSave.isLoading && <Spinner />}
            <FormWizard fields={[{
                type: Constant.TEXT,
                name: "courseName",
                label: "Enter Course Name",
                placeholder: "Enter Course Name",
                autoFocus: true,
                required: true,
            },
            {
                type: Constant.DATE,
                name: "startDate",
                label: "Start Date",
                required: true,
            },
            {
                type: Constant.NUMBER,
                name: "duration",
                label: "Duration",
                placeholder: "Enter Duration",
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
                    courseName: '',
                    startDate: '',
                    duration: 0
                }}
                validations={{
                    courseName: ["string", "Course Name"],
                    startDate: ["date", "Start Date"],
                    duration: ["number", "Duration"],
                }}
                onSubmit={(values) => {
                    const obj = values
                    obj.startDate = moment(values.startDate)
                    obj.duration = parseInt(values.duration)
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