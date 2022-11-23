import React, { Component } from 'react'
import defaultImage from './newspng.PNG'

export class NewsItems extends Component {
    render() {
        let { title, decription, imageUrl, readMoreUrl, author, date, source } = this.props;
        return (
            <div className="card" style={{ width: "18rem" }}>
                <img src={imageUrl ? imageUrl : defaultImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex:'1'}}>
                        {source}
                    </span>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{decription}</p>
                    <p className="card-text"><small className="text-muted">By {author ? author : 'Anonymous'} on {new Date(date).toLocaleDateString()}, {new Date(date).toLocaleTimeString()}</small></p>
                    <a href={readMoreUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        )
    }
}

export default NewsItems