import React, {Component} from 'react';

class Book extends Component{
    constructor(props){
        super(props);
        this.state = {
          updatingTitle: false,
          titleInput: props.title,
          updatingGenre: false,
          genreInput: props.genre,
        }
    }
    handleRemovebookClick = () =>{
      var id = this.props.id;
      this.props.removeBook(id);
    }
    handleTitleDoubleClick = ()=>{
      this.setState({updatingTitle:true});
    }
    handleGenreDoubleClick = ()=>{
      this.setState({updatingGenre:true});
    }
    handleTitleInputBlur = () => {
      var id = this.props.id;
      var data = {
        title: this.state.titleInput
      };
      this.props.updateBook(id,data);
      this.setState({updatingTitle:false}
      
        );
    }

    handleGenreInputOnChange = (e) => {
      var id = this.props.id;
      var data = {
        genre: e.target.value
      };
      // console.log(data);

      this.props.updateBook(id,data);
      this.setState({updatingGenre:false});
    }

    handleTitleInputChange=  (e) => {
      this.setState({titleInput:e.target.value});
    }

    // handleGenreInputChange =(e) => {
    //   this.setState({genreInput: e.target.value})
    // }
    
    render(){
        return(
            <div className="book">
            <div className="book-body">
              <i className="far fa-times-circle book-remove" onClick={this.handleRemovebookClick}></i>
              {
                this.state.updatingGenre ? (
                  <select name="genre-input" value={this.state.genreInput} id="genre-input" className="form-control" onChange={this.handleGenreInputOnChange} >
                    <option value="fas fa-dragon">Fantasy</option>
                    <option value="fas fa-atom">Science Fiction </option>
                    <option value="fas fa-heart">Romance</option>
                    <option value="fas fa-book">Non-fiction</option>
                    <option value="fas fa-quidditch">Harry Potter</option>
                  </select>
                ) : (<i className={"book-genre "+ this.props.genre} onDoubleClick={this.handleGenreDoubleClick}></i>)
              }
              <div className="book-title" onDoubleClick={this.handleTitleDoubleClick}>
                {
                  this.state.updatingTitle ? 
                  ( 
                    <input value={this.state.titleInput} type="text" className="form-control" id="book-title-input" onChange={this.handleTitleInputChange} autoFocus onBlur={this.handleTitleInputBlur}/>

                  ) : this.props.title
                }
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