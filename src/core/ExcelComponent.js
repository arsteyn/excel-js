import {DomListener} from '@core/DomListener';

class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners || [])
    this.name = options.name
    this.emitter = options.emitter
    this.unsubscribers = []

    this.prepare()
  }

  toHTML() {
    return ''
  }

  // Notify listeners about subscription
  $emit(event, ...args) {
    this.emitter.emit(event, ...args)
  }

  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn)
    this.unsubscribers.push(unsub)
  }

  prepare() {}

  init() {
    this.initDomListeners()
  }


  destroy() {
    this.removeDomListeners()
    this.unsubscribers.forEach((unsub)=> unsub())
  }
}

export default ExcelComponent
