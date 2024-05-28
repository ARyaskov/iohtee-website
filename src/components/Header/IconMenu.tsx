import React from 'react'
import { css, useTheme } from '@emotion/react'
import styled from '@emotion/styled'

import twitterWhite from './twitter-white.svg'
import gitterWhite from './gitter-white.svg'
import githubWhite from './github-white.svg'

export interface Props {
  twitter: string
  gitter: string
  github: string
}

export const IconMenu: React.FC<Props> = ({ twitter, gitter, github }) => {
  const theme: any = useTheme()

  const List = styled.ul`
    background: transparent;
    float: left;
    margin: 0;
    list-style-type: none;
  `

  const Item = styled.li`
    display: table-cell;
    vertical-align: middle;
  `

  const MenuLink = styled.a`
    line-height: ${(props) => theme.topBar.lineHeight};
    height: ${(props) => theme.topBar.lineHeight};
    padding: 0 1rem;
    color: #fff;
    display: block;

    @media (max-width: ${(props) => theme.breakpoints.medium}) {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      line-height: inherit;
      height: inherit;
    }
  `

  const Icon = styled.img`
    margin-top: -5px;
    width: 24px;
    height: 24px;
  `

  return (
    <List className="float-right">
      <Item>
        <MenuLink href={twitter}>
          <Icon src={twitterWhite} alt="Twitter" />
        </MenuLink>
      </Item>
      <Item>
        <MenuLink href={gitter}>
          <Icon src={gitterWhite} alt="Gitter" />
        </MenuLink>
      </Item>
      <Item>
        <MenuLink href={github}>
          <Icon src={githubWhite} alt="GitHub" />
        </MenuLink>
      </Item>
    </List>
  )
}
