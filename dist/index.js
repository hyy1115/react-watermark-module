'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _watermarkjs = require('watermarkjs');

var _watermarkjs2 = _interopRequireDefault(_watermarkjs);

require('./watermark.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactWatermark = function (_React$Component) {
    _inherits(ReactWatermark, _React$Component);
    
    function ReactWatermark() {
        var _ref;
        
        var _temp, _this, _ret;
        
        _classCallCheck(this, ReactWatermark);
        
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ReactWatermark.__proto__ || Object.getPrototypeOf(ReactWatermark)).call.apply(_ref, [this].concat(args))), _this), _this.watermarkText = function (ID, textData, font, transparent, color, textPosition, textX, textY, imagePath) {
            //文字水印
            var text = _watermarkjs2.default.text;
            var x = function x() {
                return textX;
            };
            var y = function y() {
                return textY;
            };
            var renderText = text.lowerRight(textData, font, color, transparent);
            if (textPosition === 'leftTop') {
                renderText = text.upperLeft(textData, font, color, transparent);
            } else if (textPosition === 'leftBottom') {
                renderText = text.lowerLeft(textData, font, color, transparent);
            } else if (textPosition === 'rightTop') {
                renderText = text.upperRight(textData, font, color, transparent);
            } else if (textPosition === 'rightBottom') {
                renderText = text.lowerRight(textData, font, color, transparent);
            } else if (textPosition === 'center') {
                renderText = text.center(textData, font, color, transparent);
            } else if (!!textPosition.length) {
                renderText = text.atPos(x, y, textData, font, color, transparent);
            }
            (0, _watermarkjs2.default)([imagePath]).image(renderText).then(function (img) {
                var watermarkText = document.querySelector('#' + ID);
                watermarkText.appendChild(img);
            });
        }, _this.watermarkImage = function (ID, transparent, textPosition, textX, textY, logoPath, imagePath) {
            //图片水印
            var image = _watermarkjs2.default.image;
            var x = function x() {
                return textX;
            };
            var y = function y() {
                return textY;
            };
            var renderLogo = image.lowerRight(transparent);
            if (textPosition === 'leftTop') {
                renderLogo = image.upperLeft(transparent);
            } else if (textPosition === 'leftBottom') {
                renderLogo = image.lowerLeft(transparent);
            } else if (textPosition === 'rightTop') {
                renderLogo = image.upperRight(transparent);
            } else if (textPosition === 'rightBottom') {
                renderLogo = image.lowerRight(transparent);
            } else if (textPosition === 'center') {
                renderLogo = image.center(transparent);
            } else if (!!textPosition.length) {
                renderLogo = image.atPos(x, y, transparent);
            }
            (0, _watermarkjs2.default)([imagePath, logoPath]).image(renderLogo).then(function (img) {
                var watermarkText = document.querySelector('#' + ID);
                watermarkText.appendChild(img);
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }
    
    _createClass(ReactWatermark, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _props = this.props,
                _props$ID = _props.ID,
                ID = _props$ID === undefined ? 'watermark' : _props$ID,
                type = _props.type,
                textData = _props.textData,
                _props$font = _props.font,
                font = _props$font === undefined ? '24px Josefin Slab' : _props$font,
                _props$transparent = _props.transparent,
                transparent = _props$transparent === undefined ? 0.5 : _props$transparent,
                _props$color = _props.color,
                color = _props$color === undefined ? '#000' : _props$color,
                _props$textPosition = _props.textPosition,
                textPosition = _props$textPosition === undefined ? 'rightBottom' : _props$textPosition,
                logoPath = _props.logoPath,
                imagePath = _props.imagePath;
            
            var _textPosition = textPosition;
            if (!!textPosition.length) {
                var _textPosition2 = _slicedToArray(textPosition, 2),
                    textX = _textPosition2[0],
                    textY = _textPosition2[1];
            }
            if (imagePath == null) console.warn('imagePath是背景图片，请使用require或import导入');
            if (type === 'text') {
                this.watermarkText(ID, textData, font, transparent, color, _textPosition, textX, textY, imagePath);
            } else if (type === 'logo') {
                if (logoPath == null) console.warn('logoPath是水印的路径，请使用require或import导入');
                this.watermarkImage(ID, transparent, textPosition, textX, textY, logoPath, imagePath);
            } else {
                throw Error('type必须是text、logo之一，也许你忘记设置它了。');
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props$ID2 = this.props.ID,
                ID = _props$ID2 === undefined ? 'watermark' : _props$ID2;
            
            return _react2.default.createElement('div', { id: ID });
        }
    }]);
    
    return ReactWatermark;
}(_react2.default.Component);

exports.default = ReactWatermark;