import * as React from 'react'
import '../Layout/index.css'
import TopBar from './TopBar'
import TopBarMenu from './TopBarMenu'
import { IconMenu } from './IconMenu'

export interface Props {
  twitter: string
  gitter: string
  github: string
  medium: string
}

export default class Header extends React.Component<Props> {
  render() {
    let menu = (
      <TopBarMenu medium={this.props.medium} gitter={this.props.gitter} />
    )
    let iconMenu = (
      <IconMenu
        twitter={this.props.twitter}
        gitter={this.props.gitter}
        github={this.props.github}
      />
    )
    return <TopBar menu={menu} iconMenu={iconMenu} />
  }
}
