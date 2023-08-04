import React from 'react';
import Constant from "@utils/constant";
import FormWizard from '../../../components/forms/Wizard';
import { formatResponse } from '../../../utils/common';
import { useStudentsQuery } from '../../../appQueryHooks/hooks/student/useQuery';
import { useSaveCourseRegistrationMutation } from '../../../appQueryHooks/hooks/course/useMutation';
const RegisterStudents = ({ detail }) => {
    const { data, } = useStudentsQuery()
    const useCourse = useSaveCourseRegistrationMutation()
    return (
        <div>
            <div className='mb-4'>
                <span>Class Representation for {detail?.className}</span>
            </div>
            <FormWizard fields={[
                {
                    type: Constant.MULTI,
                    name: "studentId",
                    label: "Students",
                    required: true,
                    isMulti: true,
                    options: formatResponse(data, "students", [])?.map(item => {
                        return {
                            value: item?.studentId,
                            label: item?.name
                        }
                    })
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
                }}
                validations={{
                    studentId: ["array", "Students"],
                }}
                onSubmit={(values) => {
                    const obj = {}
                    obj.studentIds = values?.studentId?.map(item => {
                        return { studentId: item?.value, courseId: detail?.id }
                    })
                    for (const key in obj) {
                        if (typeof obj[key] === 'string') {
                            obj[key] = obj[key].trim();
                        }
                    }
                    console.log(obj);
                    useCourse.mutate(obj)
                }}
            />
        </div>
    );
};
export default RegisterStudents;