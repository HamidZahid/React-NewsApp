import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let { title, description, imageurl, newsurl } = this.props;
    return (
      <div>
        <div className="card">
          <img
            src={
              !imageurl
                ? "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F11f6c193-f0ff-4cd7-bdd4-949af01daf51.jpg?source=next-opengraph&fit=scale-down&width=900"
                : imageurl
            }
            className="card-img-top"
            alt="Logo"
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a
              href={newsurl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-success"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
