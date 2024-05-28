import { css } from '@emotion/react'
import styled from '@emotion/styled'
import '../Layout/index.css'
import { Link } from 'gatsby-link'
import React from 'react'

const List = styled.ul`
  background: transparent;
  float: left;
  margin: 0 0 0 -1rem;
  list-style-type: none;
`

const Item = styled.li`
  display: table-cell;
  vertical-align: middle;
`

const linkStyle = (props) => css`
  line-height: ${props.theme.topBar.lineHeight};
  height: ${props.theme.topBar.lineHeight};
  padding: 0 1rem;
  color: #fff;
  display: block;

  @media (max-width: ${props.theme.breakpoints.medium}) {
    & {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      line-height: inherit;
      height: inherit;
    }
  }
`

const MenuLink = styled(Link)`
  ${linkStyle}
`

const ExternalLink = styled.a`
  ${linkStyle}
`

export interface Props {
  medium: string
  gitter: string
}

export default class TopBarMenu extends React.Component<Props> {
  render() {
    return (
      <List>
        <Item>
          <ExternalLink href={this.props.gitter}>Community</ExternalLink>
        </Item>
        {/*<Item><MenuLink to="#FIXME">Documentation</MenuLink></Item>*/}
        <Item>
          <MenuLink to="/api">API</MenuLink>
        </Item>
        <Item>
          <ExternalLink href={this.props.medium}>Blog</ExternalLink>
        </Item>
      </List>
    )
  }
}
