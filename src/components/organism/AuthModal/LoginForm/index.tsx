import React, { useCallback, useState } from "react";
import { Button, Toastify } from "components/atom";

type TLoginForm = {
    onClose: () => void,
}

const LoginForm = ({ onClose }: TLoginForm) => {
    const [form, setForm] = useState({
        id: '',
        password: '',
    });

    const onChange = useCallback(
        (e: { target: { value: any; name: any; }; }) => {
            const {value, name} = e.target;
            setForm({
                ...form,
                [name]: value,
            });
        },
        [form]
    );

    const onSubmit = useCallback(
        async () => {

        },
        [form]
    );

    return (
        <div className='login-form'>
            <input type='text' name='id' required placeholder='아이디를 입력하세요.' onChange={onChange} value={form.id} />
            <input type='password' name='password' required placeholder='비밀번호를 입력하세요.' onChange={onChange} value={form.password} autoComplete='on' />
            <Button text='로그인' onClick={onSubmit} color='teal' />
            <Toastify />
        </div>
    )
}

export default LoginForm;
