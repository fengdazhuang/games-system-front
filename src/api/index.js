/**
 * api管理
 */

import request from "../utils/request";
export default {
    login(params) {
        return request({
            url: "/admin/login",
            method: "post",
            data: params,
            mock: false,
        });
    },
    getValidateCode(params) {
        return request({
            url: "/admin/getCodeImage",
            method: "get",
            data: params,
            mock: false,
        });
    }
}