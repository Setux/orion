import React from 'react';
import {useForm} from "react-hook-form";
import './LoginPage.scss';
import {connect} from "react-redux";
import * as actions from '../../store/actions/actions';
interface FormData {
    email: string,
    password: string,
    isRemember: boolean
}
interface Props {
    logInTo: (data: FormData) => void
}
const LoginPage = ({logInTo}: Props) => {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const onSubmit = (data: FormData) => logInTo(data)
    return (
        <section className='login'>
            <h2>Sign In</h2>
            <form className='login__form form' onSubmit={handleSubmit(onSubmit)}>
                <label className='form__label label'>
                    <h5 className='label__title'>Email address</h5>
                    <input
                        className='label__input'
                        placeholder="Enter email"
                        {...register('email', {
                            required: true,
                            pattern: /^[^@]+@[^@.]+\.[^@]+$/,
                        })}
                    />
                    {errors.email?.type === 'pattern' &&
                    <span className='error'>Type correct email!</span>}
                    {errors.email?.type === 'required' &&
                    <span className='error'>This field is required.</span>}
                </label>
                <label className='form__label label'>
                    <h5 className='label__title'>Password</h5>
                    <input
                        className='label__input'
                        placeholder="Enter password"
                        {...register('password', {
                            required: true,
                            minLength: 8
                        })}
                    />
                    {errors.password?.type === 'required' &&
                    <span className='error'>This field is required.</span>}
                    <label className='form__label--checkbox'>
                        <input type='checkbox' {...register('isRemember')}/> Remember me
                    </label>
                    </label>
                <input className='form__submit' type="submit" value="Submit" />
            </form>
        </section>
    )
}

export default connect(null, actions)(LoginPage);