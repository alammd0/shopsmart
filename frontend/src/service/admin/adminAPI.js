import { APIConnector } from "../apiConnector";

export const register = async (data) => {
    const response = await APIConnector({
        method : "POST",
        url : "admin/register",
        data,
    });

    return response.data;
}

export const login = async (data) => {
    const response = await APIConnector({
        method : "POST",
        url : "admin/login",
        data,
    });

    return response.data;
}

export const getProfile = async (token) => {
    const response = await APIConnector({
        method : "GET",
        url : "admin/profile",
        token
    });

    return response.data;
}

export const createCategory = async (data, token) => {
    const response = await APIConnector({
        method : "POST",
        url : "category",
        data,
        token
    });

    return response.data;
}

export const getCategories = async (token) => {
    const response = await APIConnector({
        method : "GET",
        url : "category",
        token
    });

    return response.data;
}