import React, { } from 'react';
import Loader from '@shared/Loader';
import { useLoginUser } from '@appQueryHooks/hooks/users/useMutation';
import FormWizard from '../../../components/forms/Wizard';
import Constant from "@utils/constant";
const LoginForm = () => {
    const LoginUser = useLoginUser();
    return (
        <div className="w-full ">
            {LoginUser.isLoading && <Loader />}
            <FormWizard fields={[{
                type: Constant.TEXT,
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
                password: '',
                email: ''
            }} validations={{
                email: "Email",
                password: "Password",
            }}
                onSubmit={(values) => {
                    console.log(values);
                }}
            />
        </div>
    );
};
export default LoginForm;
