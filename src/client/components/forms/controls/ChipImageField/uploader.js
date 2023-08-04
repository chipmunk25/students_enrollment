import React from 'react';
import useThemeStore from '../../../../hooks/useTheme';

const Uploader = ({ label, name, required, setFile, handleImageUpload, file, onChange }) => {
    const theme = useThemeStore()
    return (
        <div className="w-full">
            <div className='flex gap-2'>
                <span className="text-base"> {label}</span>{required && <span className="text-error">*</span>}
            </div>
            <div className="flex flex-col justify-start w-full gap-5">
                {file ? (
                    <div className="w-full px-5 ">
                        <div className="relative flex items-center justify-center w-24">
                            <div className="flex flex-col items-center justify-center w-24 h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 ">
                                <img src={file} alt="photograph" className="w-full h-full" />
                            </div>
                            <span
                                className={`absolute top-0 right-0 w-6 h-6 flex justify-center items-center translate-x-1/2 -translate-y-1/2 
                                     bg-red-600 text-red-100
                                }  rounded-full text-xs `}>
                                <i
                                    onClick={() => {
                                        setFile();
                                        onChange()
                                        // setChangeImage(true);
                                    }}
                                    className={` cursor-pointer fa-solid fa-close`}></i>
                            </span>
                        </div>
                    </div>
                ) : <div className="flex items-center justify-start w-full gap-4 p-3">
                    <div className="flex items-center justify-start">
                        <label

                            htmlFor="photograph"
                            className={`flex items-center justify-start p-2 text-${theme.fontSize} font-semibold rounded-md cursor-pointer bg-grey-200`}>
                            <span className="font-semibold text-md">Choose an Image</span>
                            <input
                                type="file"
                                id={name}
                                name={name}
                                accept="image/*"
                                hidden
                                onChange={e => {
                                    setFile(URL.createObjectURL(e.target.files[0]));
                                    handleImageUpload(e);
                                    // formik.setFieldValue('photograph', e.target.files[0]);
                                }}
                            />
                        </label>
                    </div>
                    <div className="text-xs ">
                        ( Only <span className="text-xs">All image files are allowed</span>)
                    </div>
                </div>}
            </div>
        </div>
    );
};

export default Uploader;
