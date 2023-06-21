import {DomListener} from '@core/DomListener';

class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners || [] )

    this.name = options.name
  }

  toHTML() {
    return this.constructor.name
  }

  init() {
    this.initDomListeners()
  }

  destroy() {
    this.removeDomListeners()
  }
}

export default ExcelComponent
