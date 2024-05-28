import React from 'react'
import styled from '@emotion/styled'
import twitterWhite from '../Header/twitter-white.svg'
import gitterWhite from '../Header/gitter-white.svg'
import githubWhite from '../Header/github-white.svg'

const Row = styled.div`
  background: #333333;
  margin-top: 1.5rem;
  padding: 1rem;
  color: white;
`

const Menu = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  li:first-child a {
    padding-left: 0;
  }

  li a {
    color: white;

    img {
      margin-right: 0.5rem;
    }
  }
`

const Line = styled.hr`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #de5080;
  margin: 1em 0;
  padding: 0;
`

const Icon = styled.img`
  margin-top: -5px;
  width: 24px;
  height: 24px;
`

interface Props {
  twitter: string
  gitter: string
  github: string
  medium: string
}

const Footer: React.FC<Props> = ({ twitter, gitter, github }) => {
  return (
    <Row className="grid-x grid-padding-x">
      <div className="cell medium-4">&nbsp;</div>
      <div className="cell large-6">
        <Menu className="menu">
          <li>
            <a href={twitter}>
              <Icon src={twitterWhite} />
              Follow
            </a>
          </li>
          <li>
            <a href={gitter}>
              <Icon src={gitterWhite} />
              Discuss
            </a>
          </li>
          <li>
            <a href={github}>
              <Icon src={githubWhite} />
              Contribute
            </a>
          </li>
        </Menu>
        {/*<Line/> FIXME*/}
        {/*<Menu className="menu">*/}
        {/*<li><a href="/documentation">Documentation</a></li>*/}
        {/*<li><a href="/blog">Blog</a></li>*/}
        {/*</Menu>*/}
      </div>
    </Row>
  )
}

export default Footer
