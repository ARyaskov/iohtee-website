import React from 'react'
import styled from '@emotion/styled'
import '../components/Layout/index.css'
// COLLECTION: Internet Duotone Line Icons
// LICENSE: CC0 License
// UPLOADER: SVG Repo
// https://www.svgrepo.com/svg/530445/data-analysis
import zeroFeesIcon from './indexPage/zeroFees.svg'
// COLLECTION: Internet Duotone Line Icons
// LICENSE: CC0 License
// UPLOADER: SVG Repo
// https://www.svgrepo.com/svg/530451/dns
import immediateIcon from './indexPage/immediateIcon.svg'
// COLLECTION: Internet Duotone Line Icons
// LICENSE: CC0 License
// UPLOADER: SVG Repo
// https://www.svgrepo.com/svg/530439/api-interface
import apiIcon from './indexPage/api.svg'
// COLLECTION: Internet Duotone Line Icons
// LICENSE: CC0 License
// UPLOADER: SVG Repo
// https://www.svgrepo.com/svg/530441/surveillance-defense
import deviceIcon from './indexPage/device.svg'
import IndexLayout from '../layouts'
const metadata = require("../../gatsby-config.js")

// import spankChain from './indexPage/spankchain.svg';
// import popchest from './indexPage/popchest.jpg';
// import onder from './indexPage/onder.jpg';

const Title = styled.h1`
  font-family: 'Roboto Slab', 'PT Serif', serif;
  font-weight: bolder;
  font-size: 350%;
  margin: 2rem 0;
`

const Subtitle = styled.p`
  font-size: larger;
`

const Header = styled.h2`
  font-family: 'Roboto Slab', 'PT Serif', serif;
  font-weight: bolder;
  font-size: 250%;
`

const Icon = styled.img`
  width: 120px;
  height: 120px;
`

const Row = styled.div`
  margin-top: 2rem;
`

const TrustedLogo = styled.img`
  width: 5rem;
  height: 5rem;
`

const TrustedLink = styled.a`
  color: inherit;
`

const IndexPage: React.FC = () => (
  <IndexLayout data={ { site: metadata }}>
    <div>
      <div className="grid-x grid-padding-x">
        <div className="cell large-4">&nbsp;</div>
        <div className="cell large-6">
          <Title>Zero-fee payments for EVM</Title>
        </div>
        <div className="cell large-2">&nbsp;</div>
      </div>
      <div className="grid-x grid-padding-x">
        <div className="cell medium-4">&nbsp;</div>
        <div className="cell large-6">
          <Subtitle>
            IohTee is a micropayments SDK for EVM-compatible blockchains (Ethereum, Binance Smartchain, Polygon). State channels
            is a design pattern for instant blockchain transactions. It moves most
            of the transactions off-chain. As transactions do not touch the
            blockchain, fees and waiting times are eliminated, in a secure way.
          </Subtitle>
          <p>
            It brings a possibility of instant transactions and low value
            payments. Paid media consumption, like unobtrusive micropayments for
            video streaming is one application. Another one is tipping for live
            performers. One could also think about blockchain games, and
            machine-to-machine transactions.
          </p>
        </div>
      </div>
      <Row className="grid-x grid-padding-x">
        <div className="cell medium-4 text-right">
          <Header>Features</Header>
        </div>
        <div className="cell medium-6">
          <div className="grid-x align-justify">
            <div className="cell medium-6 text-center">
              <Icon src={zeroFeesIcon} alt="Zero fees" />
              <p>Zero fees</p>
            </div>
            <div className="cell medium-6 text-center">
              <Icon src={immediateIcon} alt="Immediate payments" />
              <p>Immediate payments</p>
            </div>
          </div>
          <div className="grid-x grid-margin-x">
            <div className="cell medium-6 text-center">
              <Icon src={apiIcon} alt="Simple API" />
              <p>Simple API</p>
            </div>
            <div className="cell medium-6 text-center">
              <Icon src={deviceIcon} alt="Works on devices" />
              <p>IoT-ready</p>
            </div>
          </div>
        </div>
      </Row>
      <Row className="grid-x grid-padding-x">
        <div className="cell medium-4 text-right">
          <Header>Explore</Header>
        </div>
        <div className="cell medium-6">
          <ol>
            <li>
              <p>Clone IohTee repository</p>
              <p>
                <code>$ git clone https://github.com/ARyaskov/IohTee</code>
              </p>
            </li>
            <li>
              <p>Build the code</p>
              <p>
                <code>
                  $ cd IohTee && yarn && yarn build
                </code>
              </p>
            </li>
            <li>
              <p>Run the client</p>
              <p>
                <code>$ export RPC_URL=https://rpc-amoy.polygon.technology</code>
              </p>
              <p>
                <code>
                  $ export MNEMONIC=tool school decrease elegant fix awful eyebrow immense noble erase dish labor
                </code>
              </p>
              <p>
                <code>$ DEBUG=* node packages/examples/src/client.js</code>
              </p>
            </li>
            <li>
              <p>
                Notice transactions on{' '}
                <a href="https://amoy.polygonscan.com/address/0x96Cd8a0cAC5632c718Fcb520b4886585a8b8f976">
                  Amoy Testnet Polygonscan
                </a>
              </p>
            </li>
            <li>
              <p>
                Follow us on <a href="//twitter.com/machinomy">Twitter</a>
              </p>
            </li>
          </ol>
        </div>
      </Row>
    </div>
  </IndexLayout>
)

export default IndexPage
