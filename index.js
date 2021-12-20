import hljs from 'highlight.js'

const VueHighlightDirective = Object.create(null)

function highlight(el, binding) {
    const targets = el.querySelectorAll('code')

    for (let i = 0; i < targets.length; i += 1) {
        const target = targets[i]

        if (typeof binding.value === 'string') {
            target.textContent = binding.value
        }
        hljs.highlightElement(target)
    }
}
VueHighlightDirective.install = function install(Vue) {
    Vue.directive('highlight', {
        deep: true,
        bind: function bind(el, binding) {
            highlight(el, binding)
        },
        componentUpdated: function componentUpdated(el, binding) {
            highlight(el, binding)
        }
    })
}

export default VueHighlightDirective

