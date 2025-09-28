import { APIConnector } from "../apiConnector";

// 1. create product
export const createProduct = async (data, token) => {
    const response = await APIConnector({
        method : "POST",
        url : "product",
        data,
        token
    });

    return response.data;
}

// 2. update product
export const updateProduct = async (data, id, token) => {
    const response = await APIConnector({
        method : "PUT",
        url : `product/${id}`,
        data,
        token
    });

    return response.data;
}

// 3. delete product
export const deleteProduct = async (id, token) => {
    const response = await APIConnector({
        method : "DELETE",
        url : `product/${id}`,
        token
    });

    return response.data;
}

// 4. get product by id
export const getProductById = async (id) => {
    const response = await APIConnector({
        method : "GET",
        url : `product/${id}`
    });

    return response.data;
}

// 5. get all products
export const getProducts = async () => {
    const response = await APIConnector({
        method : "GET",
        url : "product"
    });

    return response.data;
}