import {toInlineStyles} from '@core/utils';
import {defaultStyles} from '@/constants';
import {parse} from '@core/parse';

const CODES = {
  A: 65,
  Z: 90
}

const DEFAULT_WIDTH = 120;

function getWidth(state, index) {
  return (state[index] || DEFAULT_WIDTH) + 'px'
}

function toCell(state, row) {
  return function(_, col) {
    const id = `${row}:${col}`
    const width = getWidth(state.colState, col)
    const data = state.dataState[id]
    const styles = toInlineStyles({
      ...defaultStyles,
      ...state.stylesState[id]
    })

    return `<div class="cell" 
                 contentEditable 
                 data-col="${col}" S
                 data-row="${row}"
                 data-id="${id}"
                 data-type="cell"
                 data-value="${data || ''}"
                  style="${styles}width: ${width}"
            >${parse(data) || ''}</div>`
  }
}

function toColumn({col, index, width}) {
  return `<div class="column" data-type="resizable" data-col="${index}" style="width: ${width}">
          ${col}
          <div class="col-resize" data-resize="col" data-col="${index}"  data-row="0"></div>
</div>`
}

function createRow(index, content) {
  return `<div class="row" data-type="resizable" data-row="${index}">
                <div class="row-info" >
                   ${index ?? ''}
                   <div class="row-resize" data-resize="row"></div>
                </div>
                <div class="row-data">${content}</div>
             
            </div>`
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}


function withWidthFrom(state) {
  return function(col, index) {
    return {
      col, index, width: getWidth(state.colState, index)
    }
  }
}

export function createTable(rowsCount = 20, state = {}) {
  console.log(state)

  const colsCount = CODES.Z - CODES.A + 1
  const rows = []

  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(withWidthFrom(state))
      .map(toColumn)
      .join('')

  rows.push(createRow(null, cols))
  for (let row = 0; row < rowsCount; row++) {
    const cells = new Array(colsCount)
        .fill('')
    // .map((_, col) => toCell(col, row))
        .map(toCell(state, row))
        .join('')

    rows.push(createRow(row + 1, cells))
  }

  return rows.join('')
}
