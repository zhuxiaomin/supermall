//因为request导出时是函数，没有用default，所以导入时加大括号
import {request} from "./request"

export function getHomeMultidata() {
    return request({
        url: "/home/multidata"
    })
}