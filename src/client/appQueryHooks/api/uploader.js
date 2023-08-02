import axios from 'axios';
import './root';
export const CreateFile = async data => {
    try {
        var form_data = new FormData();
        form_data.append('description', data.description);
        form_data.append('relationType', data.relationType);
        form_data.append('relationId', data.relationId.toString());
        form_data.append('companyName', data.companyName);
        form_data.append('fileType', data.fileType);
        form_data.append('file', data.file);
        return await axios.post(`/uploader/create`, form_data, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
    } catch (error) {
        return await error.response;
    }
};

export const CreateOrUpdateFile = async data => {
    try {
        var form_data = new FormData();
        form_data.append('description', data.description);
        form_data.append('relationType', data.relationType);
        form_data.append('id', data.id ? data.id.toString() : '');
        // form_data.append('companyId', data.companyId.toString());
        form_data.append('relationId', data.relationId.toString());
        // form_data.append('creator', data.creator.toString());
        form_data.append('companyName', data.companyName);
        form_data.append('fileType', data.fileType);
        form_data.append('file', data.file);

        return await axios.post(`/uploader`, form_data, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
    } catch (error) {
        return await error.response;
    }
};

export const getFileDetails = async ({ relationType, relationId, fileType }) => {
    try {
        return await axios.get(`/uploader/single`, {
            params: {
                relationType,
                relationId,
                fileType
            }
        });
    } catch (error) {
        return await error.response;
    }
};

export const getFiles = async ({ relationType, relationId, fileType }) => {
    try {
        return await axios.get(`/uploader`, {
            params: {
                relationType,
                relationId,
                fileType
            }
        });
    } catch (error) {
        return await error.response;
    }
};

export const deleteFile = async data => {
    try {
        return await axios.delete(`/uploader/${data.id}/delete`);
    } catch (error) {
        return await error.response;
    }
};
