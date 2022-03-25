import React from 'react'
import styles from './Paragraph.module.scss'

export default function Paragraph(props) {
  return (
	<div className={styles.blockParagraph} dangerouslySetInnerHTML={{__html: props.fields.text}} />
  )
}
