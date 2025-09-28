import { APIConnector } from "../apiConnector";

// 1. add to cart
export const addToCart = async (data, token) => {
    const response = await APIConnector({
        method : "POST",
        url : "cart/add",
        data,
        token
    });

    return response.data;
}

// 2. remove from cart
export const removeFromCart = async (data, token) => {
    const response = await APIConnector({
        method : "DELETE",
        url : "cart/remove",
        data,
        token
    });

    return response.data;
}

// 3. get cart
export const getCart = async (token) => {
    const response = await APIConnector({
        method : "GET",
        url : "cart",
        token
    });

    return response.data;
}   