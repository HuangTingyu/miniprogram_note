/*
 * @Author: sakurahuang
 * @Description: 
 * @Date: 2025-03-27 20:27:55
 */
// 异步接口转同步
export default function promisify(fn) {
	return (args = {}) => {
		new Promise((resolve, reject) => {
			fn(
				Object.assign(args, {
					success: resolve,
					fail: reject
				})
			)
		})
	}
}