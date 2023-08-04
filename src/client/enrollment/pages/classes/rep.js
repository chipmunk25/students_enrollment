import React from 'react';
import { useStudentsQuery } from '../../../appQueryHooks/hooks/student/useQuery';
import Constant from "@utils/constant";
import FormWizard from '../../../components/forms/Wizard';
import { formatResponse } from '../../../utils/common';
import { useUpdateClassMutation } from '../../../appQueryHooks/hooks/classes/useMutation';
const ClassRep = ({ detail }) => {
    const { data, } = useStudentsQuery()
    const useUpdate = useUpdateClassMutation()
    return (
        <div>
            <div className='mb-4'>
                <span>Class Representation for {detail?.className}</span>
            </div>
            <FormWizard fields={[
                {
                    type: Constant.SELECT,
                    name: "classRepresentative",
                    label: "Class Rep.",
                    required: true,
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
                    classRepresentative: '',
                }}
                validations={{
                    classRepresentative: ["object", "Class Rep"],
                }}
                onSubmit={(values) => {
                    const obj = values
                    obj.id = detail.id
                    obj.classRepresentative = values?.classRepresentative?.value
                    for (const key in obj) {
                        if (typeof obj[key] === 'string') {
                            obj[key] = obj[key].trim();
                        }
                    }
                    console.log(obj);
                    useUpdate.mutate(obj)
                }}
            />
        </div>
    );
};
export default ClassRep;