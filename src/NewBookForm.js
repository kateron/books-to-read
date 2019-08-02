import React, {Component} from 'react';

class NewBookForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            genreInput:'',
            bookTitleInput:'',
            bookSynopsisInput:''
        }
        
    }
    handleGenreInputChange = (e)=>{
        this.setState({genreInput: e.target.value});
    }
    handleBookTitleInputChange = (e)=>{
        this.setState({bookTitleInput: e.target.value});
    }
    handleBookSynopsisInputChange = (e)=>{
        this.setState({bookSynopsisInput: e.target.value});
    }

    handleAddBookClick = (e) =>{
        e.preventDefault();
        var data = {
            genre: this.state.genreInput,
            title: this.state.bookTitleInput,
            synopsis: this.state.bookSynopsisInput
        };
        this.props.addBook(data);
    }

    render(){
        return(
            <div className="book new-book">
                <form className="book-body">
                    <div className="form-group">
                    <label htmlFor="genre-input">Genre</label>
                    <select name="genre-input" id="genre-input" className="form-control" onChange={this.handleGenreInputChange}>
                        <option value="fas fa-dragon">Fantasy</option>
                        <option value="fas fa-atom">Science Fiction</option>
                        <option value="fas fa-heart">Romance</option>
                        <option value="fas fa-book">Non-fiction</option>
                        <option value="fas fa-quidditch">Harry Potter</option>
                    </select>
                    </div>
    
                    <div className="form-group">
                    <label htmlFor="book-title-input">Book Title</label>
                    <input type="text" className="form-control" id="book-title-input" onChange={this.handleBookTitleInputChange}/>
                    </div>
                    
                <div className="form-group">
                    <label htmlFor="book-synopsis-input">Book Synopsis</label>
                    <textarea name="book-synopsis-input" id="book-synopsis-input" className="form-control form-control-sm" cols="30" onChange={this.handleBookSynopsisInputChange} ></textarea>
                </div>
            
                    <button type="submit" className="btn btn-primary" onClick={this.handleAddBookClick}>Add</button>
                </form>
            </div>
        );
    }
}

export default NewBookForm 