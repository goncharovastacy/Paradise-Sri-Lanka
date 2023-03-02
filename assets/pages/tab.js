'use strict'

{
    const $ = q => document.querySelector(q)
const $$ = q => Array.from(document.querySelectorAll(q))
const $on = (el, ev, fn) => {
    Array.isArray(el)
        ? el.forEach(o => $on(o, ev, fn))
        : el.addEventListener(ev, fn)
    return el
}

    const init = () => {
        registerTabEvents()
        activateTabByIndex(0)
    }

    const registerTabEvents = () =>
        navItems().forEach((elem, i) =>
            $on(elem, 'click', () => activateTabByIndex(i)),
        )

    const activateTabByIndex = index => {
        removeHighlightFromActiveNavItem()
        highlightNavItemByIndex(index)
        hideAllArticles()
        showArticleByIndex(index)
    }

    const removeHighlightFromActiveNavItem = () =>
        activeNavItems().forEach(elem => elem.classList.remove('active'))

    const highlightNavItemByIndex = index =>
        navItems()[index].classList.add('active')

    const hideAllArticles = () => articles().forEach(hide)

    const showArticleByIndex = index => show(articles()[index])

    const articles = () => $$('.excursions__article')
    const navItems = () => $$('.excursions__titles > div')
    const activeNavItems = () => $$('.excursions__titles > div.active')

    const show = elem => (elem.style.display = 'flex')
    const hide = elem => (elem.style.display = 'none')

    init()
}