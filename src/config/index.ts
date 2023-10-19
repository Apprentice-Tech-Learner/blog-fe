const getENV = (key: string): string => {
    if (process.env[`REACT_APP_${key}`]) { // @ts-ignore
        return process.env[`REACT_APP_${key}`];
    }
    return '';
};

const config = {
    API_URL : getENV('API_URL'),
};

console.log(`Config Loading...`, config);

export default config;
