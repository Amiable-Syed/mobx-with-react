
export default async function Actions(){
    const ApiRequest = {
    }
    const ApiEndpoint = "http://s28.ca/sodv2201/instructor/ratings";
    let ApiResponse = await fetch(ApiEndpoint, { method:'POST', body:JSON.stringify(ApiRequest) })
    let ResponseData = await ApiResponse.json();
    return ResponseData
    }
