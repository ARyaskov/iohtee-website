import * as React from 'react'
import { graphql } from 'gatsby'
import HeadingLayout from '../components/Layout/HeadingLayout'

export type Props = {
  children: Function
  data: any
}

export default function Heading(props: Props) {
  let children = props.children
  let links = props.data.site.siteMetadata.links
  let title = props.data.site.siteMetadata.title
  return (
    <HeadingLayout
      title={title}
      twitter={links.twitter}
      gitter={links.gitter}
      github={links.github}
      medium={links.medium}
    >
      {children()}
    </HeadingLayout>
  )
}

export const query = graphql`
  query HeadingLayoutQuery {
    site {
      siteMetadata {
        title
        links {
          twitter
          gitter
          github
          medium
        }
      }
    }
  }
`
