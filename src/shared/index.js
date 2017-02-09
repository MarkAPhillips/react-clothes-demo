
const environment = {
    
    /** Assume Application is to be deployed in a Node JS environment */
    isProd() {
        return process!=null && process.env.NODE_ENV === 'production';
    }
};

export {environment};