import service from '@/utils/request'

// 获取系统验证码
export const getSystemAdmin = (params) => {
  return service({
    url: '/system/admin',
    method: 'get',
    params
  })
}

export const postSystemAdmin = (data) => {
  return service({
    url: '/system/admin',
    method: 'post',
    data
  })
}

export const putSystemAdmin = (data) => {
  return service({
    url: '/system/admin',
    method: 'put',
    data
  })
}

export const deleteSystemAdmin = (params) => {
  return service({
    url: '/system/admin',
    method: 'delete',
    params
  })
}
