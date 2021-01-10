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
    const formattedResponse = {success: false, data: "", error: false, errorCode: 0};
    console.log({response});
    if(!response) {
        return formattedResponse;
    }
    if(response.data && response.data.status && response.data.data !== undefined) {
        formattedResponse.data = response.data.data;
        formattedResponse.success = true;
        return formattedResponse;
    }
    formattedResponse.error = true;
    formattedResponse.errorCode = response.data && response.data.code ? response.data.code: 50000;
    return formattedResponse;
}