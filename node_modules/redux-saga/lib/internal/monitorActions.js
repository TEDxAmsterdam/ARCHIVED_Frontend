'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.effectTriggered = effectTriggered;
exports.effectResolved = effectResolved;
exports.effectRejected = effectRejected;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MONITOR_ACTION = exports.MONITOR_ACTION = 'MONITOR_ACTION';
var EFFECT_TRIGGERED = exports.EFFECT_TRIGGERED = 'EFFECT_TRIGGERED';
var EFFECT_RESOLVED = exports.EFFECT_RESOLVED = 'EFFECT_RESOLVED';
var EFFECT_REJECTED = exports.EFFECT_REJECTED = 'EFFECT_REJECTED';

function effectTriggered(effectId, parentEffectId, label, effect) {
  var _ref;

  return _ref = {}, _defineProperty(_ref, MONITOR_ACTION, true), _defineProperty(_ref, 'type', EFFECT_TRIGGERED), _defineProperty(_ref, 'effectId', effectId), _defineProperty(_ref, 'parentEffectId', parentEffectId), _defineProperty(_ref, 'label', label), _defineProperty(_ref, 'effect', effect), _ref;
}

function effectResolved(effectId, result) {
  var _ref2;

  return _ref2 = {}, _defineProperty(_ref2, MONITOR_ACTION, true), _defineProperty(_ref2, 'type', EFFECT_RESOLVED), _defineProperty(_ref2, 'effectId', effectId), _defineProperty(_ref2, 'result', result), _ref2;
}

function effectRejected(effectId, error) {
  var _ref3;

  return _ref3 = {}, _defineProperty(_ref3, MONITOR_ACTION, true), _defineProperty(_ref3, 'type', EFFECT_REJECTED), _defineProperty(_ref3, 'effectId', effectId), _defineProperty(_ref3, 'error', error), _ref3;
}