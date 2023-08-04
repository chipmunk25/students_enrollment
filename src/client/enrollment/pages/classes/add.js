import React from 'react';
import Constant from "@utils/constant";
import FormWizard from '../../../components/forms/Wizard';
import { useSaveClassMutation } from '../../../appQueryHooks/hooks/classes/useMutation';
import Spinner from "../../../shared/Spinner"
const Add = () => {
    const useSave = useSaveClassMutation()
    return (
        <div>
            {useSave.isLoading && <Spinner />}
            <FormWizard fields={[{
                type: Constant.TEXT,
                name: "className",
                label: "Class",
                placeholder: "Enter Class Name",
                autoFocus: true,
                required: true,
            },
            {
                type: Constant.NUMBER,
                name: "maxClassSize",
                label: "Max Class Size",
                placeholder: "Enter Max Class Size",
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
                    className: '',
                    maxClassSize: 0
                }}
                validations={{
                    className: ["string", "Class Name"],
                    maxClassSize: ["number", "Max Class Size"],
                }}
                onSubmit={(values) => {
                    const obj = values
                    obj.maxClassSize = parseInt(values.maxClassSize)
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
export default Add;