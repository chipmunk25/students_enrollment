import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import useThemeStore from '../../../../hooks/useTheme';
import Uploader from './uploader';
import ChipErr from "@components/ChipErr";

const ChipImageField = (
    {
        errorMessage,
        required,
        fluid,
        label,
        name, value, onChange, defaultValue }
) => {
    const [file, setFile] = useState();
    const handleImageUpload = e => {
        const file = e.target.files[0];
        onChange(file)
    };
    useEffect(() => {
        if (typeof defaultValue === 'string') {
            setFile(defaultValue)
        }
    }, [defaultValue])
    const theme = useThemeStore((state) => state);
    return (
        <div className={classNames("relative mx-auto", {
            "max-w-sm": !fluid && theme.size === "small",
            "max-w-md": !fluid && theme.size === "medium",
            "max-w-lg": !fluid && theme.size === "large",
            "max-w-full": fluid,
        })}>
            <Uploader onChange={onChange} required={required} name={name} label={label} setFile={setFile} file={file} handleImageUpload={handleImageUpload} />
            {errorMessage && (
                <ChipErr msg={errorMessage} id={`outline_err_${name}`} />
            )}
        </div>
    );
}
export default ChipImageField;