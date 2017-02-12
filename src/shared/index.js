const environment = {
    
    /** Assume Application is to be deployed in a Node JS environment */
    isProd() {
        return process != null && process.env.NODE_ENV === 'production';
    }
};

const events = {
    stopEventPropagation(event) {
        event.preventDefault();
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();
    }
};

export {
    environment,
    events
};