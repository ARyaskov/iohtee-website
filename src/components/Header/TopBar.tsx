import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Hamburger } from './Hamburger.js'
import '../Layout/index.css'
import styled from '@emotion/styled'
import { css, useTheme } from '@emotion/react'

const Expanded = styled.div`
  background-color: ${(props) => props.theme.palette.primary};
  color: white;
  max-width: none;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${(props) => props.theme.breakpoints.medium}) {
    padding: ${(props) => props.theme.topbarPadding} 0;
  }
`

const LogoLink = styled(Link)`
  height: ${(props) => props.theme.topBar.lineHeight};
  font-family: 'PT Mono', monospace;
  font-size: 16pt;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #fff;
  display: table-cell;
  vertical-align: top;
  width: 1%;
  white-space: nowrap;
  line-height: ${(props) => props.theme.topBar.lineHeight};

  @media (max-width: ${(props) => props.theme.breakpoints.medium}) {
    line-height: inherit;
    height: inherit;
    text-align: left;
  }
`

const AlignedHamburger = styled(Hamburger)`
  position: relative;
  top: 0.4rem;
`

export type Props = {
  menu: React.ReactChild
  iconMenu: React.ReactChild
}

const TopBar: React.FC<Props> = ({ menu, iconMenu }) => {
  const [isOpen, setIsOpen] = useState(false)
  const theme = useTheme()
  const handleHamburgerClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Expanded>
      <div className="grid-x grid-padding-x">
        <div className="medium-4 cell text-right logo small-5">
          <LogoLink to="/">Machinomy</LogoLink>
        </div>
        <div
          className="small-7 cell text-right show-for-small-only"
          onClick={handleHamburgerClick}
        >
          <AlignedHamburger
            isActive={isOpen}
            layerHeight="2px"
            layerWidth="20px"
            paddingX="0"
            paddingY="0"
            layerColor="#fff"
          />
        </div>
        <div className="small-12 cell show-for-small-only" hidden={!isOpen}>
          {menu}
        </div>
        <div className="medium-8 large-6 cell show-for-medium grid-x align-justify">
          <div className="cell auto">{menu}</div>
          <div className="cell auto show-for-large">{iconMenu}</div>
        </div>
        <div className="large-2 cell show-for-large">&nbsp;</div>
      </div>
    </Expanded>
  )
}

export default TopBar
