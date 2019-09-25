import React from 'react'
import moment from 'moment'
import CopyToClipboard from 'react-copy-to-clipboard'

import { Link } from 'react-router-dom'
import { LinkSpan } from '../../../common/link_span'

interface Props {
  values: {
    question: string
    category: string
    resolution: Date | null
    spread: string
    funding: string
    outcomeValueOne: string
    outcomeValueTwo: string
    outcomeProbabilityOne: string
    outcomeProbabilityTwo: string
  }
  marketMakerAddress: string | null
}

const ResumeMarketStep = (props: Props) => {
  const { marketMakerAddress, values } = props
  const {
    question,
    category,
    resolution,
    spread,
    funding,
    outcomeValueOne,
    outcomeValueTwo,
    outcomeProbabilityOne,
    outcomeProbabilityTwo,
  } = values

  const resolutionDate = resolution && moment(resolution).format('MM-DD-YYYY')

  const marketMakerURL = `${window.location.protocol}//${window.location.hostname}/view/${marketMakerAddress}`

  return (
    <>
      <h4>Your new market has been created!</h4>
      <h5>You can access it thought this URL, don&apos;t miss it</h5>
      <Link className="nav-item" target="_blank" to={`/view/${marketMakerAddress}`}>
        {marketMakerURL}
      </Link>
      <CopyToClipboard text={marketMakerURL}>
        <LinkSpan>Copy to clipboard</LinkSpan>
      </CopyToClipboard>
      <h5>Details</h5>
      <p>
        Question: <i>{question}</i>
      </p>
      <p>
        Oracle:{' '}
        <i>The market is resolved using realit.io oracle using the dxDAO as final arbitrator.</i>
      </p>
      <p>
        Category: <i>{category}</i>
      </p>
      <p>
        Resolution date: <i>{resolutionDate}</i>
      </p>
      <p>
        Spread/Fee: <i>{spread} %</i>
      </p>
      <p>
        Funding: <i>{funding} DAI</i>
      </p>
      <p>Outcomes:</p>
      <p>
        <i>
          {outcomeValueOne} - {outcomeProbabilityOne} %
        </i>
      </p>
      <p>
        <i>
          {outcomeValueTwo} - {outcomeProbabilityTwo} %
        </i>
      </p>
    </>
  )
}

export { ResumeMarketStep }
