import React from 'react';
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 2
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 3
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 4
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 5
                }
            ]
        }
    }

    render() {
        return (
            <div className={'directory-menu'}>
                {
                    this.state.sections.map(({title, imageUrl, id}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl}/>
                    ))
                }
            </div>
        );
    }
}

export default Directory;