class Dom {
  constructor(selector) {
    // #app
    this.$el = typeof selector === 'string' ?
            document.querySelector(selector) :
            selector
  }

  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html
      return this
    }
    return this.$el.outerHTML
  }

  text(text) {
    if (typeof text==='string') {
      this.$el.textContent = text
      return this
    }
    if (this.$el.tagName.toLowerCase()==='input') {
      return this.$el.value.trim()
    }
    return this.$el.textContent.trim()
  }

  clear() {
    this.html('')
    return this
  }

  append(node) {
    if (node instanceof Dom) {
      node = node.$el
    }

    if (Element.prototype.append) {
      this.$el.append(node)
    } else {
      this.$el.appendChild(node)
    }
  }

  on(eventType, callback) {
    this.$el.addEventListener(eventType, callback)
  }

  off(eventType, callback) {
    this.$el.removeEventListener(eventType, callback)
  }

  closest(selector) {
    return $(this.$el.closest(selector))
  }

  getCoords() {
    return this.$el.getBoundingClientRect()
  }

  get data() {
    return this.$el.dataset
  }

  findAll(selector) {
    return this.$el.querySelectorAll(selector)
  }

  find(selector) {
    return $(this.$el.querySelector(selector))
  }

  addClass(className) {
    this.$el.classList.add(className)
    return this
  }

  attr(name, value) {
    if (value) {
      this.$el.setAttribute(name, value)
      return this
    }
    return this.$el.getAttribute(name)
  }

  removeClass(className) {
    this.$el.classList.remove(className)
    return this
  }

  id(parse) {
    if (parse) {
      const parsed = this.id().split(':')

      return {
        row: +parsed[0],
        col: +parsed[1]
      }
    }
    return this.data.id
  }

  focus() {
    this.$el.focus()
    return this
  }

  css(styles = {}) {
    Object.keys(styles).forEach((key) => {
      this.$el.style[key] = styles[key]
    })
  }

  getStyles(styles = []) {
    return styles.reduce((res, s)=> {
      res[s] = this.$el.style[s]
      return res
    }, {})
  }
}


export function $(selector) {
  return new Dom(selector)
}


$.create = (tagname, classes = '') => {
  const el = document.createElement(tagname)
  if (classes) {
    el.classList.add(classes)
  }
  return $(el)
}
