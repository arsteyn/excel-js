export function capitalize(string) {
  if (typeof string != 'string') {
    return ''
  }

  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function range(start, end) {
  if (start > end) {
    [end, start] = [start, end]
  }
  return new Array(end - start + 1)
      .fill('')
      .map((_, index) => start + index)
}

export function storage(key, data = null) {
  if (!data) {
    return JSON.parse(localStorage.getItem(key))
  }

  // debugger
  localStorage.setItem(key, JSON.stringify(data))
}

export function isEqual(a, b) {
  if (typeof a === 'object' && typeof b === 'object') {
    return JSON.stringify(a) === JSON.stringify(b)
  }

  return a === b
}

export function convertCamelToKebab(string) {
  return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
}

export function toInlineStyles(styles = {}) {
  Object.keys(styles)
      .map(key=> `${convertCamelToKebab(key)}: ${styles[key]}`)
      .join(';')
}

export function debounce(fn, wait) {
  let timeout
  return function(...args) {
    const later = ()=> {
      clearTimeout(timeout)
      // eslint-disable-next-line no-invalid-this
      fn.apply(this, args)
      // fn(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}


