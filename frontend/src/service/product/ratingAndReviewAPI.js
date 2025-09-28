import { APIConnector } from "../apiConnector";

// 1. submit rating and review
export const submitRatingAndReview = async (data, token) => {
    const response = await APIConnector({
        method : "POST",
        url : "ratings-reviews",
        data,
        token
    });

    return response.data;
}

// 2. get all ratings and reviews
export const getAllRatingsAndReviews = async (token) => {
    const response = await APIConnector({
        method : "GET",
        url : "ratings-reviews",
        token
    });

    return response.data;
}