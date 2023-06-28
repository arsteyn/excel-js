const CODES = {
  A: 65,
  Z: 90
}

// function toCell(col, row) {
//   return `<div class="cell" contentEditable data-col="${col}" data-row="${row}"></div>`
// }

function toCell(row) {
  return function(_, col) {
    return `<div class="cell" 
                 contentEditable 
                 data-col="${col}" 
                 data-row="${row}"
                 data-id="${row}:${col}"
                 data-type="cell"
            ></div>`
  }
}

function toColumn(col) {
  return `<div class="column" data-type="resizable">
          ${toChar('', col)}
          <div class="col-resize" data-resize="col" data-col="${col}"  data-row="0"></div>
</div>`
}

function createRow(index, content) {
  return `<div class="row" data-type="resizable">
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

export function createTable(rowsCount = 20) {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []

  const cols = new Array(colsCount)
      .fill('')
      // .map(toChar)
      .map((_, col)=> toColumn(col))
      .join('')

  rows.push(createRow(null, cols))

  for (let row = 0; row < rowsCount; row++) {
    const cells = new Array(colsCount)
        .fill('')
        // .map((_, col) => toCell(col, row))
        .map(toCell(row))
        .join('')

    rows.push(createRow(row + 1, cells))
  }

  return rows.join('')
}
