export function knobToggleAttr(tag, knob, attr) {
  if (knob) {
    tag.setAttribute(attr, true)
  } else {
    tag.removeAttribute(attr)
  }
}
export function bindEvent(tag, type){
  tag.addEventListener(type, (event) => action(type)(event));
}