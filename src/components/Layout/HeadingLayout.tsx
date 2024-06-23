import * as React from 'react'
import Helmet from 'react-helmet'

import Header from '../../components/Header/Header'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import theme from '../../layouts/Theme'
import Links from './Links'

export interface Props extends Links {
  title: string
}

export default class HeadingLayout extends React.Component<Props> {
  render() {
    return (
      <div>
        {/*<Helmet>*/}
        {/*  <title>{this.props.title}</title>*/}
        {/*  <meta name="viewport" content="width=device-width, initial-scale=1.0" />*/}
        {/*  <meta name="og:title" content="Machinomy – micropayments on Ethereum" />*/}
        {/*  <meta name="og:type" content="website" />*/}
        {/*  <meta name="og:url" content="https://machinomy.com" />*/}
        {/*  <meta name="og:image" content="https://machinomy.com/images/robot_on_pink.png" />*/}
        {/*  <meta name="og:description" content="Micropayments on Ethereum" />*/}
        {/*  <meta name="description" content="Micropayments on Ethereum" />*/}
        {/*  <meta name="keywords" content="micropayments, state channels, ethereum, blockchain" />*/}
        {/*</Helmet>*/}
        <ThemeProvider theme={theme}>
          <div>
            <Header
              twitter={this.props.twitter}
              gitter={this.props.gitter}
              github={this.props.github}
              medium={this.props.medium}
            />
          </div>
        </ThemeProvider>
      </div>
    )
  }
}
