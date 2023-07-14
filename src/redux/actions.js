import {APPLY_STYLE, CHANGE_STYLES, CHANGE_TEXT, CHANGE_TITLE, TABLE_RESIZE} from '@/redux/types';

// Action Creator
export function tableResize(data) {
  return {
    type: TABLE_RESIZE,
    data: data
  }
}

export function changeText(data) {
  return {
    type: CHANGE_TEXT,
    data: data
  }
}

export function changeStyles(data) {
  return {
    type: CHANGE_STYLES
  }
}

// value, ids
export function applyStyle(data) {
  return {
    type: APPLY_STYLE,
    data
  }
}

export function changeTitle(data) {
  return {
    type: CHANGE_TITLE,
    data
  }
}
