import React, { useCallback, useState } from "react";
import { toast } from "react-toastify";

import { Button, Toastify } from "components/atom";
import { apiClient } from "api";
import {AxiosError, isAxiosError} from "axios";

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
            const body = {
                id: form.id,
                password: form.password,
            }

            try {
                const response = await apiClient.post('/login/validate', body);

                if (response.status == 200) {
                    const { accessToken, refreshToken } = response.data;

                    localStorage.setItem('accessToken', accessToken);
                    localStorage.setItem('refreshToken', refreshToken);
                    localStorage.setItem('userId', form.id);
                    setForm({
                        id: '',
                        password: '',
                    });
                    onClose();
                }
            } catch (error: unknown) {
                console.log(error);
                if (isAxiosError(error)) {
                    if (error.response?.status === 401) {
                        toast.error('비밀번호를 다시 확인해주세요');
                    } else if (error.response?.status === 403) {
                        toast.error('아이디를 다시 확인해주세요');
                    } else {
                        toast.error('로그인 정보를 다시 확인해주세요');
                    }
                }
            }
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
