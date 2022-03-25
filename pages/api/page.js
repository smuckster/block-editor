import BlockEditor from '../../lib/blockEditor'

export default async function pageHandler(req, res) {
	if (req.method === 'POST') {
		let result = await BlockEditor.createPage()
		res.status(201).json({message: 'It worked', result: result})
		// if (newId) {
		// 	res.status(200).json({pageId: newId})
		// } else {
		// 	res.status(404).json({ message: 'Page could not be created.'})
		// }
	}
}