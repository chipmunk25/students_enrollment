import React, { } from 'react';
import Loader from '@shared/Loader';
import { useLoginUser } from '@appQueryHooks/hooks/users/useMutation';
import FormWizard from '../../../components/forms/Wizard';
import Constant from "@utils/constant";
const LoginForm = () => {
    const useUser = useLoginUser();
    return (
        <div className="w-full ">
            {useUser.isLoading && <Loader />}
            <FormWizard fields={[
                {
                    type: Constant.EMAIL,
                    name: "email",
                    label: "Enter Email",
                    placeholder: "Enter Email",
                    autoFocus: true,
                    required: true,
                },
                {
                    type: Constant.PASSWORD,
                    name: "password",
                    label: "Password",
                    placeholder: "Enter Password",
                    required: true,
                },
                {
                    type: Constant.SUBMIT,
                    primary: true,
                    title: "Submit",
                    fluid: true,
                },
            ]} initialValues={{
                password: 'Pass123$1',
                email: 'super@super.com'
            }} validations={{
                email: ["email", "Email"],
                password: ["password", "Password"],
            }}
                onSubmit={(values) => {
                    console.log(values);
                    useUser.mutate(values)
                }}
            />
        </div>
    );
};
export default LoginForm;
