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
  border-top: 1px solid #00b2ff;
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
        <Line/>
         This project is the second life of the fabulous <a href="https://github.com/machinomy/machinomy" target={"_blank"}>Machinomy library</a> written in 2016 by Sergey Ukustov and Machinomy Team. <br/>
         Since original repositories are in Public Archive status now, we've relaunched the project with new features and a modern tech stack supported.
      </div>
    </Row>
  )
}

export default Footer
