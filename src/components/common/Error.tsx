import React from 'react';

type ErrorProps = {
    error : string | undefined
}
const Error = ({error} :  ErrorProps)=> {
    return (
        <p
            className="text-xs text-red-500 mt-1"
        >
            {error}
        </p>
    );
};

export default Error;
