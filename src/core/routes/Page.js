export class Page {
  constructor(params) {
    this.params = params
  }

  getRoot() {
    console.log(this.params)
    throw new Error('Method "getRoot" should be implemented')
  }

  afterRender() {

  }

  destroy() {

  }
}
