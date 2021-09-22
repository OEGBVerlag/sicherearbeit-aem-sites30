import React, { FC } from 'react'

import FacebookLogo from '../../resources/images/sicherearbeit-icon-share-facebook.svg'
import TwitterLogo from '../../resources/images/sicherearbeit-icon-share-twitter.svg'

export type QuoteShareButtonsProps = {
  /**
   * What quote should be shared?
   */
  quote: string

  /**
   * What is the current url?
   */
  url: string
}

/**
 * @description ShareButtons for Quote component
 */
export const ExQuoteShareButtons: FC<QuoteShareButtonsProps> = (props: QuoteShareButtonsProps) => {
  const url = encodeURIComponent(props.url)
  const quote = encodeURIComponent(props.quote)

  const facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${quote}`
  const twitterLink = `https://twitter.com/intent/tweet?url=${url}&text=${quote}%20via&lang=de`

  return (
    <div className="ex-qoute-share-buttons">
      <a href={facebookLink} target="_blank" className="ex-qoute-share-buttons__link" rel="noreferrer noopener">
        <FacebookLogo className="ex-qoute-share-buttons__icon"></FacebookLogo>
      </a>
      <a href={twitterLink} target="_blank" className="ex-qoute-share-buttons__link" rel="noreferrer noopener">
        <TwitterLogo className="ex-qoute-share-buttons__icon"></TwitterLogo>
      </a>
    </div>
  )
}

export default ExQuoteShareButtons
