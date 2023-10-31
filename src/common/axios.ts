import axios from "axios";

import { getTokens, getUserInfo } from "common/token";
import config from "config";

export const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

const requestConfig = (config: any) => {
    const { accessToken } = getTokens();
    const { userId } = getUserInfo();

    if (accessToken) config.headers['Authorization'] = `Bearer ${accessToken}`;

    return config;
}

const createTokenRefresh = async () => {
    try {
        const userInfo = getUserInfo();
        const user_id = userInfo.userId;
        if (!user_id) throw { status: 400, message: 'Invalid UserId' };

        const tokens = getTokens();
        const { refreshToken } = tokens;

        if (!refreshToken) throw { status: 400, message: 'Invalid RefreshToken' };

        const response = await axios.post(
            `${process.env.REACT_APP_API_URL}/login/refresh`,
            {
                user_id: user_id,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${refreshToken}`,
                },
                timeout: 30000,
            },
        );

        if (response.status == 200) {
            const { accessToken, refreshToken } = response.data;

            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
            localStorage.setItem('userId', user_id);
        }

        await window.location.reload();
    } catch (error) { // refresh token 으로 access token 획득 실패시 로그아웃 후 메인화면으로
        await window.location.reload();
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('userId');
        return undefined;
    }
};

apiClient.interceptors.request.use(requestConfig);
apiClient.interceptors.response.use(
    async (response) => {
        return response;
    },
    async (error) => {
        const { config, response } = error;
        if (response.status === 403 && response.data?.message === 'Expired JWT Token') {
            const accessToken = await createTokenRefresh();
        } else {
            return error;
        }
    },
);
