import * as React from 'react'
import { graphql } from 'gatsby'
import FullLayout from '../components/Layout/FullLayout'

export type Props = {
  children: any
  data: any
}

export default function IndexLayout(props: Props) {
  let links = props.data.site.siteMetadata.links
  let title = props.data.site.siteMetadata.title
  return (
    <FullLayout
      title={title}
      twitter={links.twitter}
      gitter={links.gitter}
      github={links.github}
      medium={links.medium}
    >
      {props.children}
    </FullLayout>
  )
}

export const query = graphql`
  query IndexLayoutQuery {
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
