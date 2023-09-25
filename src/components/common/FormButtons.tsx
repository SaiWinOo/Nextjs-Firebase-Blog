import React from 'react';
import Button from "@/components/common/Button";


type FormButtonsProps = {
    onCancel: () => void;
    onSave : () => void;
};

const FormButtons = ({onCancel,onSave}: FormButtonsProps) => {
    return (
        <div className={'grid grid-cols-2 gap-2 mt-4 '}>
            <Button className={'bg-white text-black border '} onClick={onCancel} >
                Cancel
            </Button>
            <Button onClick={onSave} >
                Save
            </Button>
        </div>
    );
};

export default FormButtons;