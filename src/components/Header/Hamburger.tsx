import * as React from 'react'
import styled, { StyledProps } from 'styled-components'

export interface Props {
  isActive?: boolean
  paddingX?: string
  paddingY?: string
  layerWidth?: string
  layerHeight?: string
  layerSpacing?: string
  layerColor?: string
  layerBorderRadius?: string
  hoverOpacity?: number
  hoverTransitionDuration?: string
  hoverTransitionTimingFunction?: string
  className?: string
  onClick?: () => void
}

export interface StyleProps {
  paddingX: string
  paddingY: string
  layerWidth: string
  layerHeight: string
  layerSpacing: string
  layerColor: string
  layerBorderRadius: string
  hoverOpacity: number
  hoverTransitionDuration: string
  hoverTransitionTimingFunction: string
}

// hamburger hamburger--collapse
const Button = styled<StyleProps, any>('button')`
  padding: ${props => props.paddingY} ${props => props.paddingX};
  display: inline-block;
  cursor: pointer;

  transition-property: opacity, filter;
  transition-duration: ${props => props.hoverTransitionDuration};
  transition-timing-function: ${props => props.hoverTransitionTimingFunction};

  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;

  &:hover {
    opacity: ${props => props.hoverOpacity};
  }
`

const Box = styled<StyleProps, any>("span")`
  width: ${props => props.layerWidth};
  height: calc(${props => props.layerHeight} * 3 + ${props => props.layerSpacing} * 2);
  display: inline-block;
  position: relative;
`

const Inner = styled<StyleProps, any>("span")`
  display: block;
  top: 50%;
  margin-top: calc(${props => props.layerHeight} / -2);
    
  &, &::before, &::after {
    width: ${props => props.layerWidth};
    height: ${props => props.layerHeight};
    background-color: ${props => props.layerColor};
    border-radius: ${props => props.layerBorderRadius};
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }

  &::before {
    top: calc((${p => p.layerSpacing} + ${p => p.layerHeight}) * -1);
    content: "";
    display: block;
  }

  &::after {
    bottom: calc((${p => p.layerSpacing} + ${p => p.layerHeight}) * -1);
    content: "";
    display: block;
  }
`

const Collapsed = styled(Inner)`
  top: auto;
  bottom: 0;
  transition-duration: 0.13s;
  transition-delay: 0.13s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  
  &::after {
    top: calc((${p => p.layerSpacing} * 2 + ${p => p.layerHeight} * 2) * -1);
    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
                opacity 0.1s linear;
  }
  
  &::before {
    transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
                transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
`

const Active = styled(Inner)`
  transform: translate3d(0, 0, 0) rotate(-45deg);
  transition-delay: 0.22s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  
  &::after {
    top: 0;
    opacity: 0;
    transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
                opacity 0.1s 0.22s linear;
  }
  
  &::before {
    top: 0;
    transform: rotate(-90deg);
    transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
                transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
`

export default class Hamburger extends React.Component<Props> {
  styleProps: StyleProps

  constructor (props: Props) {
    super(props)
    this.styleProps = {
      paddingX: this.props.paddingX || '15px',
      paddingY: this.props.paddingY || '15px',
      layerWidth: this.props.layerWidth || '40px',
      layerHeight: this.props.layerHeight || '4px',
      layerSpacing: this.props.layerSpacing || '6px',
      layerColor: this.props.layerColor || '#000',
      layerBorderRadius: this.props.layerBorderRadius || '4px',
      hoverOpacity: this.props.hoverOpacity || 0.7,
      hoverTransitionDuration: this.props.hoverTransitionDuration || '0.15s',
      hoverTransitionTimingFunction: this.props.hoverTransitionTimingFunction || 'linear'
    }
  }

  render () {
    let inner = this.props.isActive ? <Active {...this.styleProps}/> : <Collapsed {...this.styleProps} />
    return <Button type="button" {...this.styleProps} className={this.props.className} onClick={this.props.onClick}>
      <Box {...this.styleProps}>
        {inner}
      </Box>
    </Button>
  }
}