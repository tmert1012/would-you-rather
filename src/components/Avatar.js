import React, { Component } from 'react'
import Sarah from '../icons/sarah-avatar.png'
import Tyler from '../icons/tyler-avatar.png'
import John from '../icons/john-avatar.png'
import {Image} from "react-bootstrap";

class Avatar extends Component {

    render() {
        const { userId, imageType } = this.props

        let avatar
        switch (userId) {
            case 'sarahedo':
                avatar = Sarah
                break
            case 'tylermcginnis':
                avatar = Tyler
                break
            case 'johndoe':
                avatar = John
                break
            default:
                avatar = Tyler
        }

        let component
        switch (imageType) {
            case 'html':
                component = <img alt="avatar" src={avatar} />
                break
            case 'bootstrap':
                component = <Image src={avatar} className='headerImage' roundedCircle />
                break
            default:
                component = <img alt="avatar" src={avatar} />
        }

        return component
    }
}

export default Avatar