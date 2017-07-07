import settings from '../settings'


function _handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText)
    }
    return response
}


function _logError(error) {
    console.log(error)
}


function _api_request(endpoint, method, callback, body_obj={}, errorCallback=_logError, token=null) {
    let headers = {
        'Content-Type': 'application/json',
    }
    if (token) {
        headers['Authorization'] = `Rambler: ${token}`
    }
    console.log(headers)

    return fetch(`${settings.backendUrl}${settings.urls[endpoint]}`, {
        method: method,
        headers: headers,
        body: body_obj?JSON.stringify(body_obj):null,
    }).then(response => {
        return _handleErrors(response)
    }).then(response => {
        return response.json()
    }).then(data => {
        callback(data)
    }).catch(error => {
        errorCallback(error)
    })
}


export function api_get(endpoint, callback, errorCallback=_logError, token=null) {
    return _api_request(endpoint, 'get', callback, null, errorCallback, token)
}


export function api_post(endpoint, body_obj, callback, errorCallback=_logError, token=null) {
    return _api_request(endpoint, 'post', callback, body_obj, errorCallback, token)
}
