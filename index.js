const themeCheck = document.getElementById('theme')
const themeCheckWrapper = document.getElementsByClassName('theme-switch-we')
function addOrRemoveDarkTheme(condition) {
  if (condition) {
    document.querySelector('body').classList.add('dark')
  } else {
    document.querySelector('body').classList.remove('dark')
  }
}

document.addEventListener('DOMContentLoaded', function () {
  themeCheck.checked = localStorage.getItem('darkMode') === 'true'
  addOrRemoveDarkTheme(localStorage.getItem('darkMode') === 'true')

  themeCheck.addEventListener('change', function (event) {
    localStorage.setItem('darkMode', event.currentTarget.checked)
    themeCheck.setAttribute('checked', !themeCheck.checked)
    addOrRemoveDarkTheme(event.currentTarget.checked)
  })
})