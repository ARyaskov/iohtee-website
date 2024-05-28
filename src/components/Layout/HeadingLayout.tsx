import * as React from 'react'
import Helmet from 'react-helmet'

import Header from '../../components/Header/Header'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import theme from '../../layouts/Theme'
import Links from './Links'

export interface Props extends Links {
  title: string
  children: any
}

export default class HeadingLayout extends React.Component<Props> {
  render() {
    return (
      <div>
        <Helmet
          title={this.props.title}
          meta={[
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1.0',
            },
            {
              name: 'og:title',
              content: 'Machinomy – micropayments on Ethereum',
            },
            { name: 'og:type', content: 'website' },
            { name: 'og:url', content: 'https://machinomy.com' },
            {
              name: 'og:image',
              content: 'https://machinomy.com/images/robot_on_pink.png',
            },
            { name: 'og:description', content: 'Micropayments on Ethereum' },
            { name: '', content: '' },
            { name: 'description', content: 'Micropayments on Ethereum' },
            {
              name: 'keywords',
              content: 'micropayments, state channels, ethereum, blockchain',
            },
          ]}
        />
        <ThemeProvider theme={theme}>
          <div>
            <Header
              twitter={this.props.twitter}
              gitter={this.props.gitter}
              github={this.props.github}
              medium={this.props.medium}
            />
            {this.props.children}
          </div>
        </ThemeProvider>
      </div>
    )
  }
}
