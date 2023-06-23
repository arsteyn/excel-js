import {$} from '@core/dom';

export function resizeHandler(event, $root) {
  console.log('start resizing')


  const $resizer = $(event.target)
  const resizeType = $resizer.data.resize
  const $parent = $resizer.closest('[data-type="resizable"]')

  const cords = $parent.getCoords()

  let delta;
  let value;
  const cells = $root.findAll(`[data-col="${$resizer.data.col}"]`);

  document.onmousemove = (e) => {
    switch (resizeType) {
      case 'col':
        delta = e.pageX - cords.right;
        value = (cords.width + delta);

        $parent.css({width: value + 'px'})
        cells.forEach((el)=> el.style.width = value + 'px')

        break;
      case 'row':
        delta = e.pageY - cords.bottom
        value = (cords.height + delta)
        $parent.css({height: value + 'px'})
        break;
    }
  }

  document.onmouseup = (e) => {
    document.onmousemove = null
  }
}
