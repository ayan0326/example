import 'whatwg-fetch';
import { API_ROOT } from './env';

const defaultOptions = {
    method: 'GET',
    mode: 'cros',
    // 权限
    credentials: 'include'
}

function checkStatus(response) {
    const { status } = response;
    if(status >= 200 && status < 300) {
        return response;
    }
    const error = new Error();
    error.code = status;
    switch(status) {
        case 400:
            error.message = '请求参数错误';
        case 401:
            error.message = '未授权登陆';
        case 403:

    }
}