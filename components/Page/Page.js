import React, { useState, useEffect } from 'react'
import Paragraph from '../blocks/Paragraph/Paragraph'
import Heading from '../blocks/Heading/Heading'
import BlockEditor from '../../lib/blockEditor'

export default function Page(props) {
  const blockTypes = {
    'blockParagraph': Paragraph,
    'blockHeading': Heading
  }

  return (
    <div className="page-container">
      <div className="page-title">{props.page.fields.title}</div>
      <div className="blocks-container">
        {props.blocks.map((block, index) => {
          const Block = blockTypes[block.sys.contentType.sys.id]
          return (
            <div className="block-container" key={index}>
              <Block contentType={block.sys.contentType.sys.id} fields={block.fields} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
