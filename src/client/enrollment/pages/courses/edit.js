import React, { } from 'react';
import Constant from "@utils/constant";
import FormWizard from '../../../components/forms/Wizard';
import { useUpdateCourseMutation } from '../../../appQueryHooks/hooks/course/useMutation';
import Spinner from "../../../shared/Spinner"
import moment from "moment"
const Edit = ({ detail }) => {
    const useUpdate = useUpdateCourseMutation()
    return (
        <div>
            {useUpdate.isLoading && <Spinner />}
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
                title: "Update",
                fluid: true,
            },
            ]}
                edittedValues={{ ...detail, startDate: moment(detail?.startDate).format("YYYY-MM-DD") }}
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
                    obj.id = detail.id
                    obj.startDate = moment(values.startDate).format("YYYY-MM-DD")
                    obj.duration = parseInt(values.duration)
                    for (const key in obj) {
                        if (typeof obj[key] === 'string') {
                            obj[key] = obj[key].trim();
                        }
                    }
                    useUpdate.mutate(obj)
                }}
            />
        </div>
    );
};
export default Edit;