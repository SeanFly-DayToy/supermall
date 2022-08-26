import { request } from "./request";

export async function getMainCategory() {
  return request({
    url: '/category'
  })
}

export async function getSubCategory(maitKey) {
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
  return res
}
