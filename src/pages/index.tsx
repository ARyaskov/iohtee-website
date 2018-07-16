import * as React from 'react'
import styled from 'react-emotion'

const clocks = require('./indexPage/clocks.svg')
const moneybag = require('./indexPage/moneybag.svg')
const heart = require('./indexPage/heart.svg')
const lamp = require('./indexPage/lamp.svg')

const spankChain = require('./indexPage/spankchain.svg')
const popchest = require('./indexPage/popchest.jpg')
const onder = require('./indexPage/onder.jpg')

const Title = styled('h1')`
  font-family: 'Roboto Slab', 'PT Serif', serif;
  font-weight: bolder;
  font-size: 350%;
  margin: 2rem 0;
`

const Subtitle = styled('p')`
  font-size: larger;
`

const Header = styled('h2')`
  font-family: 'Roboto Slab', 'PT Serif', serif;
  font-weight: bolder;
  font-size: 250%;
`

const Icon = styled('img')`
  width: 120px;
  height: 120px;
`

const Row = styled('div')`
  margin-top: 2rem;
`

const TrustedLogo = styled('img')`
  width: 5rem;
  height: 5rem;
`

const TrustedLink = styled('a')`
  color: inherit;
`

const IndexPage = () => (
  <div>
    <div className="grid-x grid-padding-x">
      <div className="cell large-4">
        &nbsp;
      </div>
      <div className="cell large-6">
        <Title>Micropayments on Ethereum blockchain</Title>
      </div>
      <div className="cell large-2">&nbsp;</div>
    </div>
    <div className="grid-x grid-padding-x">
      <div className="cell medium-4">
        &nbsp;
      </div>
      <div className="cell large-6">
        <Subtitle>Machinomy is a micropayments SDK for Ethereum platform. State channels is a design pattern for instant blockchain transactions. It moves most of the transactions off-chain. As transactions do not touch the blockchain, fees and waiting times are eliminated, in a secure way.</Subtitle>
        <p>It brings a possibility of instant transactions and low value payments. Paid media consumption, like unobtrusive micropayments for video streaming is one application. Another one is tipping for live performers. One could also think about blockchain games, and machine-to-machine transactions.</p>
      </div>
    </div>
    <Row className="grid-x grid-padding-x">
      <div className="cell medium-4 text-right">
        <Header>Features</Header>
      </div>
      <div className="cell medium-6">
        <div className="grid-x align-justify">
          <div className="cell medium-6 text-center">
            <Icon src={clocks} />
            <p>Zero fees</p>
          </div>
          <div className="cell medium-6 text-center">
            <Icon src={moneybag} />
            <p>Immediate payments</p>
          </div>
        </div>
        <div className="grid-x grid-margin-x">
          <div className="cell medium-6 text-center">
            <Icon src={heart} />
            <p>Simple API</p>
          </div>
          <div className="cell medium-6 text-center">
            <Icon src={lamp} />
            <p>Works on devices</p>
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
            <p>Clone machinomy repository</p>
            <p><code>$ git clone https://github.com/machinomy/machinomy</code></p>
          </li>
          <li>
            <p>Build the code</p>
            <p><code>$ cd machinomy && yarn install && yarn bootstrap && yarn build</code></p>
          </li>
          <li>
            <p>Run the client</p>
            <p><code>$ export PROVIDER_URL=https://rinkeby.infura.io</code></p>
            <p><code>$ export MNEMONIC=repair good hover betray buddy deal night wide mean round great tackle</code></p>
            <p><code>$ DEBUG=* node packages/examples/src/client.js</code></p>
          </li>
          <li>
            <p>Go to <a href="//playground.machinomy.com/">Playground Dashboard</a></p>
            <p>Use <code>peanut giggle name tree canoe tube render ketchup survey segment army will</code> mnemonic for Vynos wallet</p>
            <p>Go to Channels tab and close one of the channels</p>
          </li>
          <li>
            <p>Notice transactions on <a href="https://rinkeby.etherscan.io/address/0x84dcbedf1ac6f69947d5a9ae34d9dcdd6ba1da05">Rinkeby Etherscan</a></p>
          </li>
          <li>
            <p>Follow us on <a href="//twitter.com/machinomy">Twitter</a></p>
          </li>
        </ol>
      </div>
    </Row>
    <Row className="grid-x grid-padding-x">
      <div className="cell medium-4 text-right">
        <Header>Trusted By</Header>
      </div>
      <div className="cell medium-2 text-center">
        <TrustedLink href="https://spankchain.com">
          <TrustedLogo src={spankChain} />
          <p>SpankChain</p>
        </TrustedLink>
      </div>
      <div className="cell medium-2 text-center">
        <TrustedLink href="https://popchest.com">
          <TrustedLogo src={popchest} />
          <p>PopChest</p>
        </TrustedLink>
      </div>
      <div className="cell medium-2 text-center">
        <TrustedLink href="https://onder.tech">
          <TrustedLogo src={onder} />
          <p>ØNDER</p>
        </TrustedLink>
      </div>
    </Row>
  </div>
)

export default IndexPage
