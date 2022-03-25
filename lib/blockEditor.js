import Contentful from './contentful'

class BlockEditor {
	async createPage() {
		const newPage = {
			fields: {
				'blocks': {
					'en-US': { blocks: [] }
				}
			}
		}
		let result = await Contentful.addEntry('page', newPage)
		return result.sys.id
	}

	// Get a page entry from its slug
	async getPage(slug) {
		const result = await Contentful.getEntries('page', {
			'fields.slug': slug
		})
		return result
	}
}

export default new BlockEditor()