import {DomListener} from '@core/DomListener';

class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners || [])
    this.name = options.name
    this.emitter = options.emitter
    this.subscribe = options.subscribe || []
    this.unsubscribers = []
    this.storeSub = null
    this.store = options.store

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

  $dispatch(action) {
    this.store.dispatch(action)
  }

  storeChanged() {

  }

  isWatching(key) {
    return this.subscribe.includes(key)
  }

  $subscribe(fn) {
    this.storeSub = this.store.subscribe(fn)
  }

  prepare() {}

  init() {
    this.initDomListeners()
  }


  destroy() {
    this.removeDomListeners()
    this.unsubscribers.forEach((unsub)=> unsub())
    this.storeSub.unsubscribe()
  }
}

export default ExcelComponent
