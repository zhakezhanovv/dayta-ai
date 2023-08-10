/* 
The use of libraries is not allowed, therefore I crated my own small library for http requests. 
It uses 'httpRequest' build in function.
*/

export interface HttpCreateArgs {
	baseUrl: string
}
export type HttpRequestMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'HEAD' | 'OPTION'
export interface HttpRequestConfig extends RequestInit {
	baseUrl?: string
	method: HttpRequestMethod
}

export const http = {
	create: httpCreate,
	request: httpRequest,
}

function httpCreate(args: HttpCreateArgs) {
	const { baseUrl } = args

	const _get = (url: string, config: Omit<HttpRequestConfig, 'baseUrl' | 'method'> | void) => {
		return httpRequest(url, { method: 'GET', baseUrl, ...config })
	}
	const _post = (url: string, config: Omit<HttpRequestConfig, 'baseUrl' | 'method'> | void) => {
		return httpRequest(url, { method: 'POST', baseUrl, ...config })
	}
	const _put = (url: string, config: Omit<HttpRequestConfig, 'baseUrl' | 'method'> | void) => {
		return httpRequest(url, { method: 'PUT', baseUrl, ...config })
	}
	const _patch = (url: string, config: Omit<HttpRequestConfig, 'baseUrl' | 'method'> | void) => {
		return httpRequest(url, { method: 'PATCH', baseUrl, ...config })
	}
	const _delete = (url: string, config: Omit<HttpRequestConfig, 'baseUrl' | 'method'> | void) => {
		return httpRequest(url, { method: 'DELETE', baseUrl, ...config })
	}

	return {
		get: _get,
		post: _post,
		put: _put,
		patch: _patch,
		delete: _delete,
	}
}

async function httpRequest(url: string, config: HttpRequestConfig | void) {
	const requestUrl = (config?.baseUrl ?? '') + url
	const requestConfig = config ?? {}
	const response = await fetch(requestUrl, requestConfig)
	const data = await response.json()

	return { data, ...response }
}
