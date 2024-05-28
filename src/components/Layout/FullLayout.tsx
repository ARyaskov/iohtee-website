import * as React from 'react'

import Footer from '../../components/Footer/Footer'
import './index.css'
import Links from './Links'
import HeadingLayout from './HeadingLayout'

export interface Props extends Links {
  title: string
}

export default class FullLayout extends React.Component<Props> {
  render() {
    return (
      <HeadingLayout
        title={this.props.title}
        twitter={this.props.twitter}
        gitter={this.props.gitter}
        github={this.props.github}
        medium={this.props.medium}
      >
        {this.props.children}
        <Footer
          twitter={this.props.twitter}
          gitter={this.props.gitter}
          github={this.props.github}
          medium={this.props.medium}
        />
      </HeadingLayout>
    )
  }
}
