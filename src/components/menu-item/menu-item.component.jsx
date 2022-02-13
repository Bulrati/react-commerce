import React from 'react'
import {withRouter} from '../../hooks/withRouter.hook'
import './menu-item.styles.scss'

export const MenuItem = ({title, imageUrl, size, router, linkUrl}) => (
    <div className={`${size} menu-item`} onClick={() => router.navigate(linkUrl)}>
        <div className={'background-image'} style={{
            backgroundImage: `url(${imageUrl})`
        }}/>
        <div className='content'>
            <h1 className={'title'}>{title.toUpperCase()}</h1>
            <span className={'subtitle'}>SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem);