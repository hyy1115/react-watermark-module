import React from 'react'
import watermark from 'watermarkjs'
import './watermark.css'

class ReactWatermark extends React.Component {
    componentDidMount() {
        const {
            ID='watermark',
            type,
            textData,
            font='24px Josefin Slab',
            transparent=0.5,
            color='#000',
            textPosition='rightBottom',
            logoPath,
            imagePath
        } = this.props
        let _textPosition = textPosition
        if (!!textPosition.length) {
            var [textX, textY] = textPosition
        }
        if (logoPath == null) console.warn('logoPath是水印的路径，请使用require或import导入')
        if (imagePath == null) console.warn('imagePath是背景图片，请使用require或import导入')
        if (type === 'text') {
            this.watermarkText(ID, textData, font, transparent, color, _textPosition, textX, textY, imagePath)
        } else if (type === 'logo') {
            this.watermarkImage(ID, transparent, textPosition, textX, textY, logoPath, imagePath)
        } else {
            throw Error('type必须是text、logo之一，也许你忘记设置它了。')
        }
    }
    watermarkText = (ID, textData, font, transparent, color, textPosition, textX, textY, imagePath) => {
        //文字水印
        const text = watermark.text
        let x = () => textX
        let y = () => textY
        let renderText = text.lowerRight(textData, font, color, transparent)
        if (textPosition === 'leftTop') {
            renderText = text.upperLeft(textData, font, color, transparent)
        } else if (textPosition === 'leftBottom') {
            renderText = text.lowerLeft(textData, font, color, transparent)
        } else if (textPosition === 'rightTop') {
            renderText = text.upperRight(textData, font, color, transparent)
        } else if (textPosition === 'rightBottom') {
            renderText = text.lowerRight(textData, font, color, transparent)
        } else if (textPosition === 'center') {
            renderText = text.center(textData, font, color, transparent)
        } else if (!!textPosition.length) {
            renderText = text.atPos(x, y, textData, font, color, transparent)
        }
        watermark([imagePath])
        .image(renderText)
        .then((img) => {
            const watermarkText = document.querySelector(`#${ID}`)
            watermarkText.appendChild(img)
        })
    }
    watermarkImage = (ID, transparent, textPosition, textX, textY, logoPath, imagePath) => {
        //图片水印
        const image = watermark.image
        let x = () => textX
        let y = () => textY
        let renderLogo = image.lowerRight(transparent)
        if (textPosition === 'leftTop') {
            renderLogo = image.upperLeft(transparent)
        } else if (textPosition === 'leftBottom') {
            renderLogo = image.lowerLeft(transparent)
        } else if (textPosition === 'rightTop') {
            renderLogo = image.upperRight(transparent)
        } else if (textPosition === 'rightBottom') {
            renderLogo = image.lowerRight(transparent)
        } else if (textPosition === 'center') {
            renderLogo = image.center(transparent)
        } else if (!!textPosition.length) {
            renderLogo = image.atPos(x, y, transparent)
        }
        watermark([imagePath, logoPath])
        .image(renderLogo)
        .then((img) => {
            const watermarkText = document.querySelector(`#${ID}`)
            watermarkText.appendChild(img)
        })
    }
    render() {
        const { ID='watermark' } = this.props
        return <div id={ID} />
    }
}
export default ReactWatermark