import axios from "axios";

export const sendPostRequest = async (url, requestBody) => {
    let response = null;
    try {
        console.log({url, requestBody});
        response = await axios.post(url, requestBody);

    } catch (e) {
        console.log(`Post Request Failed for ${url} with ${e}`);
        response = e.response;
    }
    return getApiResponse(response);
}


export const sendGetRequest = async (url) => {
    let response = null;
    try {
        console.log(url);
        response = await axios.get(url);

    } catch (e) {
        console.log(`Get Request Failed for ${url} with ${e}`);
        response = e.response;
    }
    return getApiResponse(response);
};


const getApiResponse = (response) => {
    const apiResponse = {success: false, data: "", error: false, errorCode: 0};
    if(!response) {
        return apiResponse;
    }
    if(response.data && response.data.status && response.data.data !== undefined) {
        apiResponse.data = response.data.data;
        apiResponse.success = true;
        return apiResponse;
    }
    apiResponse.error = true;
    apiResponse.errorCode = response.data && response.data.code ? response.data.code: 50000;
    return apiResponse;
}