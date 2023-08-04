import React from 'react';
import Constant from "@utils/constant";
import FormWizard from '../../../components/forms/Wizard';
import { formatResponse } from '../../../utils/common';
import { useUpdateClassMutation } from '../../../appQueryHooks/hooks/classes/useMutation';
import { useClassesQuery } from '../../../appQueryHooks/hooks/classes/useQuery';
const ClassRep = ({ detail }) => {
    const { data, } = useClassesQuery()
    const useUpdate = useUpdateClassMutation()
    return (
        <div>
            <div className='mb-4'>
                <span>Choose {detail?.name} as Class Rep</span>
            </div>
            <FormWizard fields={[
                {
                    type: Constant.SELECT,
                    name: "id",
                    label: "Class",
                    required: true,
                    options: formatResponse(data, "classes", [])?.map(item => {
                        return {
                            value: item?.id,
                            label: item?.className
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
                    id: '',
                }}
                validations={{
                    id: ["object", "Class"],
                }}
                onSubmit={(values) => {
                    const obj = values
                    obj.classRepresentative = detail.studentId
                    obj.id = values?.id?.value
                    for (const key in obj) {
                        if (typeof obj[key] === 'string') {
                            obj[key] = obj[key].trim();
                        }
                    }
                    console.log(obj)
                    useUpdate.mutate(obj)
                }}
            />
        </div>
    );
};
export default ClassRep;