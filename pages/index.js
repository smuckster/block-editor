import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import BlockEditor from '../lib/blockEditor'
import { useState } from 'react'
import Block from '../components/Block'
import Paragraph from '../components/blocks/Paragraph/Paragraph'
import Heading from '../components/blocks/Heading/Heading'
import Page from '../components/Page/Page'

export default function Home(props) {
  return (
    <div>Welcome home</div>
  )
}
