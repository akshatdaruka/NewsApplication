import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner'

export class News extends Component {
    constructor() {
        super();
        this.state = {
            article: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        this.updateNews();
    }

    handlePrevClick = async () => {
        this.setState({
          page: this.state.page-1
        })
        this.updateNews();
    }

    handleNextClick = async () => {
        this.setState({
          page: this.state.page+1
        })
        this.updateNews();
    }

    updateNews = async () => {
      let apiKey = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(apiKey);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page,
            article: parsedData.articles,
            loading: false
        });

    }

    render() {
        return (
            <div className='container my-3'>
                <h2>Top News</h2>
                {this.state.loading && <Spinner/>};
                <div className='row'>
                    {!this.state.loading && this.state.article.map((element) => {
                        return <div className='col-md-4' key={element.url}>
                            <NewsItems title={element.title} decription={element.description} imageUrl={element.urlToImage} readMoreUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                        </div>
                    })}
                </div>
                <div className='container d-flex justify-content-between'>
                    <button type="button" disabled={this.state.page <= 1} onClick={this.handlePrevClick} className="btn btn-dark">&larr; Previous</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} onClick={this.handleNextClick} className="btn btn-dark">Next &rarr;</button>
                </div>
            </div>
        )
    }
}
export default News