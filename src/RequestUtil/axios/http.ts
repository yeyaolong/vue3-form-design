import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.BASE_URL,
    timeout: 3000
});


// 添加请求拦截器
axiosInstance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axiosInstance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default class http {
    /**
     * 
     * @param {String} method 接口类型 GET, PATCH, DELETE
     * @param {String} url 接口地址
     * @param {any} data 数据
     * @param {Boolean} isJSON true 请求参数是JSON格式的 false  formData
     * @returns 
     */
    static request(method, url, data, isJSON) {
        let header = {};

        try {
            header = {
                'Content-Type': isJSON ? 'application/json' : 'application/x-www-form-urlencoded',
                Accept: isJSON ? 'application/json' : '*/*'
            }

            let param = {
                url,
                method,
                data: method === 'GET' ? null : data,
                params: method === 'GET' ? data : null,
                headers: header,
            }
    
            return axiosInstance.request(param).then((res) => {
                return res.data;
            });
        } catch(error) {
            console.error('接口请求出错', error);
            throw error;
        }
    }
    /**
     * 判断请求是否成功
     * @param res 
     */
    isSuccess(res) {
        if (res.data.code === 401) {
            console.error('请重新登录');
            return false;
        }

        const status = res.status;

        if (status !== 200) {
            return false;
        }

        const result = res.data;

        return result && (result.code === 0 || result.code === -1);
    }

    /**
     * 请求异常处理
     */
    static requestException(res) {
        const error: any = {
            status: -1
        }

        error.status = res.status
        const result = res.data

        if (result && result.code !== 401) {
        
        } else if (result.code === 401) {

        }
        return error
    }

    static get(url, data, isJson = false) {
        return this.request('GET', url, data, isJson);
    }

    static put(url, data, isJson) {
        return this.request('PUT', url, data, isJson);
    }

    static post(url, data, isJson = false) {
        return this.request('POST', url, data, isJson);
    }

    static patch(url, data, isJson = false) {
        return this.request('PATCH', url, data, isJson);
    }

    static delete(url, data, isJson = false) {
        return this.request('DELETE', url, data, isJson);
    }
}