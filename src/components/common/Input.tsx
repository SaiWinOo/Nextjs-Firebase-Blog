import React from 'react';
import Error from "@/components/common/Error";
import Label from "@/components/common/Label";


type InputProps = {
    error?: string;
    label?: string;
    name?: string;
    value?: string;
    type?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    className?: string;
};
const Input = ({error, label,name, value,type,onChange,className, placeholder = ''} : InputProps) => {
    return (
        <div>
            <Label
                label={label}
            />
            <div>
                <input
                    id="id"
                    value={value}
                    type={type}
                    name={name}
                    onChange={onChange}
                    className={"block mt-2 w-full border placeholder:text-[15px] text-[16px] placeholder:text-gray-400 border-gray-200 focus:border-gray-200 focus:ring-2 focus:ring-main focus:ring-offset-1 px-3 py-2 rounded-md transition " + className}
                    placeholder={placeholder}
                />
                <Error error={error}/>
            </div>
        </div>
    );
};

export default Input;
