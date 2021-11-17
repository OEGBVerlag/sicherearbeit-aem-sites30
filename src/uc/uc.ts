/**
 * @description Enable User Centrics popup from footer link.
 */
window.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('footer a[href="#datenschutzeinstellungen"]')
  el?.addEventListener('click', (e) => {
    e.preventDefault()
    if (window.hasOwnProperty('UC_UI')) {
      window['UC_UI'].showSecondLayer()
    } else {
      // eslint-disable-next-line no-console
      console.warn("UC not loaded, can't open settings")
    }
  })
})
