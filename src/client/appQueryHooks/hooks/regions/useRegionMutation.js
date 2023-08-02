import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import {
    CreateConstituency,
    CreateDistrict,
    CreatePollingStation,
    CreateTown,
    UpdateConstituency,
    UpdateDistrict,
    UpdatePollingStation,
    UpdateRegion,
    UpdateTown
} from '../../api/regional';
const initialData = {
    showModal: false,
    modalTitle: '',
    modalSize: '',
    modalBody: null
};

export const useDistrictMutation = () => {
    const queryClient = useQueryClient();

    return useMutation(CreateDistrict, {
        onSuccess: res => {
            console.log(res);
            queryClient.invalidateQueries(['districts']);
            toast.success('Saved!');
            queryClient.setQueryData(['modal'], () => {
                return initialData;
            });
        },
        onError: error => {
            const errMsg = error.response.data.message;
            toast.error(errMsg);
        }
    });
};
export const useConstituencyMutation = () => {
    const queryClient = useQueryClient();

    return useMutation(CreateConstituency, {
        onSuccess: res => {
            console.log(res);
            queryClient.invalidateQueries(['constituency']);
            toast.success('Saved!');
            queryClient.setQueryData(['modal'], () => {
                return initialData;
            });
        },
        onError: error => {
            const errMsg = error.response.data.message;
            toast.error(errMsg);
        }
    });
};

export const useTownMutation = () => {
    const queryClient = useQueryClient();

    return useMutation(CreateTown, {
        onSuccess: res => {
            console.log(res);
            queryClient.invalidateQueries(['town']);
            toast.success('Saved!');
            queryClient.setQueryData(['modal'], () => {
                return initialData;
            });
        },
        onError: error => {
            const errMsg = error.response.data.message;
            toast.error(errMsg);
        }
    });
};

export const usePollingStationMutation = () => {
    const queryClient = useQueryClient();

    return useMutation(CreatePollingStation, {
        onSuccess: res => {
            console.log(res);
            queryClient.invalidateQueries(['ps']);
            toast.success('Saved!');
            queryClient.setQueryData(['modal'], () => {
                return initialData;
            });
        },
        onError: error => {
            const errMsg = error.response.data.message;
            toast.error(errMsg);
        }
    });
};

export const useUpdatePollingStationMutation = () => {
    const queryClient = useQueryClient();

    return useMutation(UpdatePollingStation, {
        onSuccess: res => {
            console.log(res);
            const { ps } = res.data;
            queryClient.invalidateQueries(['ps', ps.townId]);
            toast.success('Saved!');
            queryClient.setQueryData(['modal'], () => {
                return initialData;
            });
        },
        onError: error => {
            const errMsg = error.response.data.message;
            toast.error(errMsg);
        }
    });
};

export const useUpdateTownMutation = () => {
    const queryClient = useQueryClient();

    return useMutation(UpdateTown, {
        onSuccess: res => {
            console.log(res);
            const { town } = res.data;
            queryClient.invalidateQueries(['towns', town.constituencyId]);
            toast.success('Saved!');
            queryClient.setQueryData(['modal'], () => {
                return initialData;
            });
        },
        onError: error => {
            const errMsg = error.response.data.message;
            toast.error(errMsg);
        }
    });
};

export const useUpdateConstituencyMutation = () => {
    const queryClient = useQueryClient();

    return useMutation(UpdateConstituency, {
        onSuccess: res => {
            console.log(res);
            const { constituency } = res.data;
            queryClient.invalidateQueries(['constituencies', constituency.districtId]);
            toast.success('Saved!');
            queryClient.setQueryData(['modal'], () => {
                return initialData;
            });
        },
        onError: error => {
            const errMsg = error.response.data.message;
            toast.error(errMsg);
        }
    });
};

export const useUpdateDistrictMutation = () => {
    const queryClient = useQueryClient();

    return useMutation(UpdateDistrict, {
        onSuccess: res => {
            console.log(res);
            const { district } = res.data;
            queryClient.invalidateQueries(['districts', district.regionId]);
            toast.success('Saved!');
            queryClient.setQueryData(['modal'], () => {
                return initialData;
            });
        },
        onError: error => {
            const errMsg = error.response.data.message;
            toast.error(errMsg);
        }
    });
};

export const useUpdateRegionMutation = () => {
    const queryClient = useQueryClient();

    return useMutation(UpdateRegion, {
        onSuccess: res => {
            console.log(res);
            queryClient.invalidateQueries(['regions']);
            toast.success('Saved!');
            queryClient.setQueryData(['modal'], () => {
                return initialData;
            });
        },
        onError: error => {
            const errMsg = error.response.data.message;
            toast.error(errMsg);
        }
    });
};
