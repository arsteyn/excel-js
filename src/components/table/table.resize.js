import {$} from '@core/dom';

export function resizeHandler(event, $root) {
  return new Promise((resolve) => {
    console.log('start resizing')

    const $resizer = $(event.target)
    const type = $resizer.data.resize
    const $parent = $resizer.closest('[data-type="resizable"]')

    const cords = $parent.getCoords()

    let delta;
    let value;
    const cells = $root.findAll(`[data-col="${$resizer.data.col}"]`);

    document.onmousemove = (e) => {
      if (type === 'col') {
        delta = e.pageX - cords.right;
        value = (cords.width + delta);

        $parent.css({width: value + 'px'})
        cells.forEach((el) => el.style.width = value + 'px')
      } else if (type === 'row') {
        delta = e.pageY - cords.bottom
        value = (cords.height + delta)
        $parent.css({height: value + 'px'})
      }
    }

    document.onmouseup = (e) => {
      document.onmousemove = null
      document.onmouseup = null

      resolve({
        value: value,
        type: type,
        id: $parent.data[type]
      })
    }
  })
}
