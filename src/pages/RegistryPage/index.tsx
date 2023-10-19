import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, {useEffect, useState} from "react";
import { toast } from "react-toastify";

import { apiClient } from "common/axios";
import { RootState } from "store";
import { setMemberId } from "store/common";
import { Button, Toastify } from "components/atom";
import {isAxiosError} from "axios";

const RegistryPage = (): JSX.Element => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { member_id } = useSelector((state: RootState) => state.auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [contact, setContact] = useState('');

    const [idMessage, setIdMessage] = useState('');
    const [nameMessage, setNameMessage] = useState('');
    const [emailMessage, setEmailMessage] = useState('');
    const [passwordMessage, setPasswordMessage] = useState('');
    const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('');

    const [isId, setIsId] = useState(false);
    const [isName, setIsName] = useState(false);
    const [isEmail, setIsEmail] = useState(false);
    const [isPassword, setIsPassword] = useState(false);
    const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

    const [isIdDuplicateCheck, setIsIdDuplicateCheck] = useState(false);

    const [isActiveFocus, setIsActiveFocus] = useState({
        idActive: false,
        nameActive: false,
        emailActive: false,
        passwordActive: false,
        passwordConfirmActive: false,
        contactActive: false,
    });

    const {
        idActive,
        nameActive,
        emailActive,
        passwordActive,
        passwordConfirmActive,
        contactActive } = isActiveFocus;

    useEffect(() => {
        setIsId(true);
        setIsIdDuplicateCheck(true);
    }, []);

    const handleFocus = (focus: string) => {
        setIsActiveFocus({
            ...isActiveFocus,
            [focus]: true,
        });
    };

    const handleBlur = (focus: string) => {
        setIsActiveFocus({
            ...isActiveFocus,
            [focus]: false,
        });
    };

    const handleId = (e: React.ChangeEvent<HTMLInputElement>) => {
        const regex = /^[a-zA-Z0-9]{4,20}$/;
        const idCurrent = e.target.value;
        dispatch(setMemberId(idCurrent));
        if (!regex.test(idCurrent)) {
            setIdMessage('아이디는 4자 이상 20자 미만의 영어와 숫자로 구성해야합니다');
            setIsId(false);
        } else {
            setIdMessage('');
            setIsId(true);
        }
        setIsIdDuplicateCheck(false);
    }

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const nameCurrent = e.target.value;
        setName(nameCurrent);
        if (nameCurrent.length < 1) {
            setNameMessage('이름을 입력해주세요');
            setIsName(false);
        } else {
            setNameMessage('');
            setIsName(true);
        }
    }

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        const emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        const emailCurrent = e.target.value;
        setEmail(emailCurrent);
        if (!emailRegex.test(emailCurrent)) {
            setEmailMessage('잘못된 이메일 형식입니다.');
            setIsEmail(false);
        } else {
            setEmailMessage('');
            setIsEmail(true);
        }
    }

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d~!@#$%^*+-]{8,16}$/;
        const passwordCurrent = e.target.value;
        setPassword(passwordCurrent);
        if (!passwordRegex.test(passwordCurrent)) {
            setPasswordMessage('숫자 + 영문자 조합으로 8자 이상 입력해주세요!');
            setIsPassword(false);
        } else {
            setPasswordMessage('');
            setIsPassword(true);
        }
    }

    const handlePasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
        const passwordConfirmCurrent = e.target.value;
        setPasswordConfirm(passwordConfirmCurrent);
        if (password === passwordConfirmCurrent) {
            setPasswordConfirmMessage('');
            setIsPasswordConfirm(true);
        } else {
            setPasswordConfirmMessage('비밀번호가 일치하지 않습니다. 다시 확인해주세요!');
            setIsPasswordConfirm(false);
        }
    }

    const handleContact = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContact(e.target.value);
    }

    const onIdDuplicateCheck = async () => {
        try {
            const request = `/login/find/${member_id}`;
            const response = await apiClient.get(request);

            if (response.status === 200) {
                toast.success('사용할 수 있는 아이디 입니다.');
                setIsIdDuplicateCheck(true);
            }
        } catch (error: unknown) {
            if (isAxiosError(error)) {
                if (error.response?.status === 409) {
                    toast.error('이미 사용 중인 아이디입니다.');
                }
            }
        }
    };

    const onRegister = async () => {
        const body = {
            id: member_id,
            password: password,
            name: name,
            email: email,
            contact: contact,
        };

        try {
            const { data } = await apiClient.post('/login/signup', body);
            const { accessToken, refreshToken } = data;

            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
            localStorage.setItem('userId', member_id);
            // localStorage.setItem('userProfileImg', profile_image);
            navigate('/');
        } catch (error: unknown) {
            console.log(error);
        }
    };

    return (
        <div className='registry-container'>
            <h1>환영합니다!</h1>
            <div className='description'>
                기본 회원 정보를 등록해주세요. <span>﹡는 필수항목 입니다.</span>
            </div>
            <div className='input-container'>
                <div className={idActive ? 'focus-wrapper wrapper' : 'wrapper'}>
                    <label>아이디 ﹡</label>
                    <div className='input-wrapper'>
                        <input
                            type='text'
                            placeholder='아이디를 입력하세요'
                            onChange={handleId}
                            value={member_id}
                            maxLength={20}
                            onFocus={() => handleFocus('idActive')}
                            onBlur={() => handleBlur('idActive')}
                        />
                        {isIdDuplicateCheck ? <Button className='checked' disabled color='darkgray' text='완료' /> : <Button className='duplicate' color='teal' text='중복확인' onClick={onIdDuplicateCheck} />}
                    </div>
                    <div className='validation'>{idMessage}</div>
                </div>
                <div className={nameActive ? 'focus-wrapper wrapper' : 'wrapper'}>
                    <label>이름 ﹡</label>
                    <div className='input-wrapper'>
                        <input
                            type='text'
                            placeholder='이름을 입력하세요'
                            onChange={handleName}
                            value={name}
                            maxLength={20}
                            onFocus={() => handleFocus('nameActive')}
                            onBlur={() => handleBlur('nameActive')}
                        />
                    </div>
                    <div className='validation'>{nameMessage}</div>
                </div>
                <div className={emailActive ? 'focus-wrapper wrapper' : 'wrapper'}>
                    <label>이메일 *</label>
                    <div className='input-wrapper'>
                        <input
                            type='text'
                            placeholder='이메일을 입력하세요.'
                            onChange={handleEmail}
                            value={email}
                            maxLength={50}
                            onFocus={() => handleFocus('emailActive')}
                            onBlur={() => handleBlur('emailActive')}
                        />
                    </div>
                    <div className='validation'>{emailMessage}</div>
                </div>
                <div className={passwordActive ? 'focus-wrapper wrapper' : 'wrapper'}>
                    <label>비밀번호 ﹡</label>
                    <div className='input-wrapper'>
                        <input
                            type='password'
                            placeholder='비밀번호를 입력하세요'
                            onChange={handlePassword}
                            value={password}
                            maxLength={16}
                            onFocus={() => handleFocus('passwordActive')}
                            onBlur={() => handleBlur('passwordActive')}
                        />
                    </div>
                    <div className='validation'>{passwordMessage}</div>
                </div>
                <div className={passwordConfirmActive ? 'focus-wrapper wrapper' : 'wrapper'}>
                    <label>비밀번호 확인 ﹡</label>
                    <div className='input-wrapper'>
                        <input
                            type='password'
                            placeholder='비밀번호를 한번 더 입력하세요'
                            onChange={handlePasswordConfirm}
                            value={passwordConfirm}
                            maxLength={16}
                            onFocus={() => handleFocus('passwordConfirmActive')}
                            onBlur={() => handleBlur('passwordConfirmActive')}
                        />
                    </div>
                    <div className='validation'>{passwordConfirmMessage}</div>
                </div>
                <div className={contactActive ? 'focus-wrapper wrapper' : 'wrapper'}>
                    <label>연락처</label>
                    <div className='input-wrapper'>
                        <input
                            type='text'
                            placeholder='연락처를 입력해주세요.'
                            onChange={handleContact}
                            value={contact}
                            onFocus={() => handleFocus('contactActive')}
                            onBlur={() => handleBlur('contactActive')}
                        />
                    </div>
                </div>
            </div>
            <div className='form-bottom'>
                <div className='all-valid'>
                    {!(isName && isId && isPassword && isPasswordConfirm && isEmail) && '모든 필수 항목을 입력해주세요'}
                </div>
                <div className='button-wrapper'>
                    <Button className='cancel' text='취소' color='gray' onClick={() => navigate('/')} />
                    <Button className='next' text='다음' color='teal' disabled={!(isName && isId && isPassword && isPasswordConfirm && isEmail && isIdDuplicateCheck)} onClick={onRegister} />
                </div>
            </div>
            <Toastify />
        </div>
    )
}

export default RegistryPage;
