const themeCheck = document.getElementById('themeButton')
const themeCheckWrapper = document.getElementsByClassName(
  'theme-switch-wrapper'
)
function addOrRemoveDarkTheme(condition) {
  if (condition) {
    document.querySelector('body').classList.add('dark')
    document.getElementById('themeText').innerText = 'Dark mode is on'
  } else {
    document.querySelector('body').classList.remove('dark')
    document.getElementById('themeText').innerText = 'Dark mode is off'
  }
}

function handleThemeChange(event, checked) {
  localStorage.setItem('darkMode', !checked)
  themeCheck.setAttribute('aria-checked', !checked)
  if (checked) {
    themeCheck.setAttribute('aria-label', 'Switch to dark theme')
  } else {
    themeCheck.setAttribute('aria-label', 'Switch to light theme')
  }
  addOrRemoveDarkTheme(!checked)
}

document.addEventListener('DOMContentLoaded', function () {
  themeCheck.setAttribute(
    'aria-checked',
    localStorage.getItem('darkMode') === 'true'
  )
  addOrRemoveDarkTheme(localStorage.getItem('darkMode') === 'true')

  themeCheck.addEventListener('click', function (event) {
    const checked = localStorage.getItem('darkMode') === 'true'
    handleThemeChange(event, checked)
  })
})