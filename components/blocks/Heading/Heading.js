import React from 'react'

export default function Heading(props) {
  const HeadingTag = `h${props.fields.type}`

  return (
    <HeadingTag>{props.fields.text}</HeadingTag>
  )
}
