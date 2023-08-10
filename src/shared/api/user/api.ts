import { type UserModel } from '.'
import { baseInstance } from '../base'

class UserApi {
	public async getUsers(args: void): Promise<UserModel[]> {
		const req = await baseInstance.get('/users')

		return req.data
	}
}

export const userApi = new UserApi()
