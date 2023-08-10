import { envVars } from '../config'
import { http } from './request'

export const baseInstance = http.create({
	baseUrl: envVars.API_URL,
})
