import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import { useNavigate } from 'react-router-dom';
import Loader from '@shared/Loader';
// import CustomButton from '@shared/Button';
import { useLoginUser } from '@appQueryHooks/hooks/users/useMutation';
import FormWizard from '../../../components/forms/Wizard';
import Constant from "@utils/constant";
YupPassword(Yup);
const requiredField = () => Yup.string().required('Password is required');
const passwordField = () =>
    requiredField()
        .min(
            8,
            'password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special'
        )
        .minLowercase(1, 'password must contain at least 1 lower case letter')
        .minUppercase(1, 'password must contain at least 1 upper case letter')
        .minNumbers(1, 'password must contain at least 1 number')
        .minSymbols(1, 'password must contain at least 1 special character');
const LoginForm = () => {
    const navigate = useNavigate();
    const LoginUser = useLoginUser();
    const validationSchema = Yup.object().shape({
        email: Yup.string().email().required('Email is required'),
        password: passwordField()
    });
    const formik = useFormik({
        initialValues: {
            password: '',
            email: ''
        },
        validationSchema,
        onSubmit: values => {
            LoginUser.isLoading = true;
            LoginUser.mutate(values);
        }
    });
    const [reveal, setReveal] = useState(false);
    return (
        <div className="w-full ">
            {LoginUser.isLoading && <Loader />}
            <FormWizard fields={[{
                type: Constant.TEXT,
                name: "username",
                label: "User's name",
                placeholder: "Enter Username",
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
            ]} initialValues={{
                password: '',
                email: ''
            }} validations={{
                email: "Email",
                passowrd: "Password",
            }} />
        </div>
    );
};
export default LoginForm;
