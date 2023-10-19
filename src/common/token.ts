const KEYS = {
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    userId: 'userId',
}

export const getTokens = () => {
    const accessToken = localStorage.getItem(KEYS.accessToken) || null;
    const refreshToken = localStorage.getItem(KEYS.refreshToken) || null;

    return { accessToken, refreshToken };
}

export const getUserInfo = () => {
    const userId = localStorage.getItem(KEYS.userId) || 'defaultId';

    return { userId };
}
