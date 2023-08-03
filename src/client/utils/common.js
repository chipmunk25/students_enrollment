export const formatResponse = (response, key, type) =>
    response?.data[key] ? response?.data[key] : type;
