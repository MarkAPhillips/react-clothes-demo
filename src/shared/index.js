
const environment = {
    isProd() {
        return process.env.NODE_ENV === 'production';
    }
};

export {environment};