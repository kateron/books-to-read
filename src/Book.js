import React, {Component} from 'react';

class Book extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="book">
            <div className="book-body">
              <i className="far fa-times-circle book-remove"></i>
              <i className={"book-genre "+this.props.genre}></i>
              <div className="book-title">
                {this.props.title}
              </div>
              <div className="book-synopsis">
                  {this.props.synopsis}
              </div>
              <div className="book-status">
                <button className="status-reading btn btn-primary">Reading</button>
                <button className="status-read-later btn btn-primary ">Read Later</button>
                <button className="status-read btn btn-primary">Read</button>
              </div>
          </div>
        </div>
        );
    }
}

export default Book 