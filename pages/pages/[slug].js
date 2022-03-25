import React, { useState, useEffect } from 'react'
import Paragraph from '../../components/blocks/Paragraph/Paragraph'
import Heading from '../../components/blocks/Heading/Heading'
import BlockEditor from '../../lib/blockEditor'
import Page from '../../components/Page/Page'

export default function EditingPage(props) {
	const [blocks, setBlocks] = useState(props.blocks)
	
	return (
		<Page page={props.page} blocks={blocks} />
	)
}

export async function getServerSideProps(context) {
	const slug = context.params.slug
	let page = await BlockEditor.getPage(slug)
	let blocks = page.items[0].fields.blocks
	delete page.items[0].fields.blocks

	// Sort blocks by correct order
	blocks.sort((a, b) => {
		if (a.fields.position === b.fields.position) {
		return 0
		}
		return a.fields.position > b.fields.position ? 1 : -1
	})

	return {
		props: {
			page: page.items[0],
			blocks: blocks
		}
	}
}
