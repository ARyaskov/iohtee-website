import * as React from 'react'
import { graphql } from 'gatsby'

export interface Props {
  data: any
}

export default class Api extends React.Component<Props> {
  node: any

  constructor(props: Props) {
    super(props)
    this.node = props.data.allMarkdownRemark.edges[0]?.node
  }

  render() {
    return (
      <div>
        <div className="grid-x grid-padding-x">
          <div className="cell medium-6 medium-offset-4">
            <div dangerouslySetInnerHTML={{ __html: this.node?.html }} />
          </div>
        </div>
      </div>
    )
  }
}

export const query = graphql`
  query ApiFilesQuery {
    allMarkdownRemark(limit: 1, filter: { id: { regex: "/machinomy/" } }) {
      edges {
        node {
          frontmatter {
            title
            name
          }
          html
        }
      }
    }
  }
`
