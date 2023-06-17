import httpInstance from '@/utils/http'

// 获取banner
export function getBannerAPI(params = {}) {
  // 默认为1 商品为2
  const { distributionSite = '1'} = params
  return httpInstance({
    url: '/home/banner',
    params: {
      distributionSite
    }
  })
}

/**
 * @description:获取新鲜好物
 * @param {*}
 * @returns {*}
 */
export function findNewAPI() {
  return httpInstance({
    url: '/home/new'
  })
}

/**
 * @description:获取人气推荐
 * @param {*}
 * @returns {*}
 */
export function findHotAPI() {
  return httpInstance({
    url: '/home/hot'
  })
}

/**
 * @description:获取产品列表
 * @param {*}
 * @returns {*}
 */
export function getGoodsAPI() {
  return httpInstance({
    url: '/home/goods'
  })
}
