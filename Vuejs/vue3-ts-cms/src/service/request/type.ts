/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-17 20:01:28
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-17 21:59:34
 */
import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface IORequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface IORequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: IORequestInterceptors<T>
  showLoading?: boolean
}
