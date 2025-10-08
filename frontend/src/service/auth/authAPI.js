import { APIConnector } from "../apiConnector";


export const createUser = async (data) => {
    const response = await APIConnector({
        method : "POST",
        url : "auth/register",
        data,
    });

    return response.data;
}

export const login = async (data) => {
    const response = await APIConnector({
        method : "POST",
        url : "auth/login",
        data,
    });

    return response.data;
}

export const getProfile = async (token) => {
    const response = await APIConnector({
        method : "GET",
        url : "auth/profile",
        token
    });
}

export const updateProfile = async (data, token) => {
    const response = await APIConnector({
        method : "PUT",
        url : "auth/profile",
        data,
        token
    });

    return response.data
}

export const createAddress = async (data, token) => {
    const response = await APIConnector({
        method : "POST",
        url : "auth/create-address",
        data,
        token
    });

    return response.data
}

export const updateAddress = async (data, token) => {
    const response = await APIConnector({
        method : "PUT",
        url : "auth/update-address",
        data,
        token
    });

    return response.data
}