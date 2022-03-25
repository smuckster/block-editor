class Contentful {
	getReadClient() {
		let contentful = require('contentful')
		const client = contentful.createClient({
			space: process.env.CONTENTFUL_SPACE_ID,
			accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
		})
		return client
	}

	getWriteClient() {
		let contentful = require('contentful-management')
		const client = contentful.createClient({
			accessToken: process.env.CONTENTFUL_API_KEY
		})
		return client
	}

	async getEntries(contentType, field = {}) {
		const entries = await this.getReadClient().getEntries({
			content_type: contentType,
			...field
		})

		return entries	
	}

	async getEntry(id) {
		const entry = await this.getReadClient().getEntry(id)

		return entry
	}

	async addEntry(contentType, entry) {
		let result = this.getWriteClient().getSpace(process.env.CONTENTFUL_SPACE_ID)
			.then(space => space.getEnvironment('master'))
			.then(environment => environment.createEntry(contentType, entry))
			.catch(console.error)
		
		return result
	}
}

export default new Contentful()