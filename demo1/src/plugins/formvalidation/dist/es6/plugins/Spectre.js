import e from"../utils/classSet";import s from"../utils/hasClass";import t from"./Framework";export default class r extends t{constructor(e){super(Object.assign({},{formClass:"fv-plugins-spectre",messageClass:"form-input-hint",rowInvalidClass:"has-error",rowPattern:/^(.*)(col)(-(xs|sm|md|lg))*-[0-9]+(.*)$/,rowSelector:".form-group",rowValidClass:"has-success"},e))}onIconPlaced(t){const r=t.element.getAttribute("type");const o=t.element.parentElement;if("checkbox"===r||"radio"===r){e(t.iconElement,{"fv-plugins-icon-check":true});if(s(o,`form-${r}`)){o.parentElement.insertBefore(t.iconElement,o.nextSibling)}}}}