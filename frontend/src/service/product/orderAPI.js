import { APIConnector } from "../apiConnector";

// 1. create order
export const createOrder = async (data, token) => {
    const response = await APIConnector({
        method : "POST",
        url : "orders",
        data,
        token
    });

    return response.data;
}

// 2. get all orders
export const getOrders = async (token) => {
    const response = await APIConnector({
        method : "GET",
        url : "orders",
        token
    });

    return response.data;
}

// 3. get single order
export const getOrderById = async (id, token) => {
    const response = await APIConnector({
        method : "GET",
        url : `orders/${id}`,
        token
    });

    return response.data;
}

// 4. update order status
export const updateOrderStatus = async (data, id, token) => {
    const response = await APIConnector({
        method : "PUT",
        url : `orders/${id}`,
        data,
        token
    });

    return response.data;
}

// 5. cancel order
export const cancelOrder = async (id, token) => {
    const response = await APIConnector({
        method : "DELETE",
        url : `orders/${id}/cancel`,
        token
    });

    return response.data;
}

// 6. delete order
export const deleteOrder = async (id, token) => {
    const response = await APIConnector({
        method : "DELETE",
        url : `orders/${id}`,
        token
    });

    return response.data;
}