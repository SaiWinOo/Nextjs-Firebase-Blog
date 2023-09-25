import React from 'react';

type LabelProps = {
    label : string | undefined
}
const Label = ({label} : LabelProps) => {
    return (
        <label
            className="text-[16px] font-medium w-max"
        >
            {label}
        </label>
    );
};

export default Label;
