import React from 'react'; 

const ApplicationBuildDetails = () => (
    <span>v:{__BUILD__.VERSION}  build:{__BUILD__.COMMIT} on {__BUILD__.DATE} </span>
);

export default ApplicationBuildDetails;