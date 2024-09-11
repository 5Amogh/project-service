/**
 * name : projects.js
 * author : prajwal
 * Date : 09-September-2024
 * Description : All projects related api call.
 */

const request = require('request')
const projectServiceUrl = process.env.ELEVATE_PROJECT_SERVICE_URL

// Function to read the user profile based on the given userId
const profileRead = function (userToken, userId = '') {
	return new Promise(async (resolve, reject) => {
		try {
			// Construct the URL for the user service
			let url = `${projectServiceUrl}/${process.env.SERVICE_NAME}${CONSTANTS.endpoints.PROFILE_READ}`
			console.log('<========================console added========================>', url, '\n')
			// Append the userId to the URL if it is provided
			if (userId !== '') {
				url = url + '/' + userId
			}

			// Set the options for the HTTP GET request
			const options = {
				headers: {
					'content-type': 'application/json',
					'x-auth-token': userToken,
				},
			}
			request.get(url, options, userReadCallback)
			let result = {
				success: true,
			}
			// Handle callback fucntion
			function userReadCallback(err, data) {
				if (err) {
					result.success = false
				} else {
					console.log('<========================conosle added========================>', data.body, '\n')
					let response = JSON.parse(data.body)
					console.log('<========================conosle added========================>', response, '\n')
					if (response.status === HTTP_STATUS_CODE.ok.status) {
						result['data'] = response.result
					} else {
						result.success = false
					}
				}
				return resolve(result)
			}
			setTimeout(function () {
				return resolve(
					(result = {
						success: false,
					})
				)
			}, CONSTANTS.common.SERVER_TIME_OUT)
		} catch (error) {
			return reject(error)
		}
	})
}

module.exports = {
	profileRead: profileRead,
}
