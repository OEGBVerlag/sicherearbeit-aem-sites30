import * as React from 'react'
import * as ReactDOM from 'react-dom'
import ExQuoteShareButtons, { QuoteShareButtonsProps } from './ExQuoteShareButtons'

const toJson = (str = ''): QuoteShareButtonsProps => {
  return JSON.parse(str.replace(/&#34;/gm, '"')).data
}

export default class ExQuoteShareButtonsCE extends HTMLElement {
  static get observedAttributes(): string[] {
    return ['data-json']
  }

  public connectedCallback(): void {
    const dataJson = toJson(this.getAttribute('data-json'))
    const el = React.createElement(ExQuoteShareButtons, dataJson)
    ReactDOM.render(el, this)
  }
}

window.customElements.define('ex-quote-share-buttons', ExQuoteShareButtonsCE)
