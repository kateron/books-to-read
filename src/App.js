import React, {Component} from 'react';
import NewBookForm from './NewBookForm.js'
import Book from './Book.js'
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      books: [
        {
          id:1,
          genre:'fas fa-quidditch',
          title: 'Harry Potter and the Philosopher\'s Stone',
          synopsis:'Harry Potter\'s life is miserable. His parents are dead and he\'s stuck with his heartless relatives, who force him to live in a tiny closet under the stairs. But his fortune changes when he receives a letter that tells him the truth about himself: he\'s a wizard. A mysterious visitor rescues him from his relatives and takes him to his new home, Hogwarts School of Witchcraft and Wizardry.',

        },{
          id:2,
          genre:'fas fa-dragon',
          title: 'A Game of Thrones',
          synopsis:'Long ago, in a time forgotten, a preternatural event threw the seasons out of balance. In a land where summers can last decades and winters a lifetime, trouble is brewing. The cold is returning, and in the frozen wastes to the north of Winterfell, sinister and supernatural forces are massing beyond the kingdom’s protective Wall. At the center of the conflict lie the Starks of Winterfell, a family as harsh and unyielding as the land they were born to. Sweeping from a land of brutal cold to a distant summertime kingdom of epicurean plenty, here is a tale of lords and ladies, soldiers and sorcerers, assassins and bastards, who come together in a time of grim omens.',
        },{
          id: 3,
          genre:'fas fa-atom',
          title: '1984',
          synopsis: 'Among the seminal texts of the 20th century, Nineteen Eighty-Four is a rare work that grows more haunting as its futuristic purgatory becomes more real. Published in 1949, the book offers political satirist George Orwell\'s nightmarish vision of a totalitarian, bureaucratic world and one poor stiff\'s attempt to find individuality. The brilliance of the novel is Orwell\'s prescience of modern life—the ubiquity of television, the distortion of the language—and his ability to construct such a thorough version of hell. Required reading for students since it was published, it ranks among the most terrifying novels ever written.'
        },
        {
          id: 4,
          genre: 'fas fa-heart',
          title: 'Romeo and Juliet',
          synopsis: 'In Romeo and Juliet, Shakespeare creates a violent world, in which two young people fall in love. It is not simply that their families disapprove; the Montagues and the Capulets are engaged in a blood feud.',
        },
        {
          id:5,
          genre:'fas fa-book',
          title:'The Diary of a Young Girl',
          synopsis:'In 1942, with the Nazis occupying Holland, a thirteen-year-old Jewish girl and her family fled their home in Amsterdam and went into hiding. For the next two years, until their whereabouts were betrayed to the Gestapo, the Franks and another family lived cloistered in the “Secret Annexe” of an old office building. Cut off from the outside world, they faced hunger, boredom, the constant cruelties of living in confined quarters, and the ever-present threat of discovery and death. In her diary Anne Frank recorded vivid impressions of her experiences during this period. By turns thoughtful, moving, and surprisingly humorous, her account offers a fascinating commentary on human courage and frailty and a compelling self-portrait of a sensitive and spirited young woman whose promise was tragically cut short.'
        }
      ]
    }
  }
  addBook = (data) => {
    var newBook = {
      id: Date.now(),
      ...data
    };
    var newBooks = [...this.state.books,newBook];
    this.setState({books: newBooks});
  }

  removeBook = (id) => {
    var books = this.state.books;
    var filtered = books.filter( (book) => {
      return book.id !== id
    });
    this.setState({books:filtered});
  }


  updateBook = (id,data)=>{

  
    var books = this.state.books;
    var index = books.findIndex((book)=>{
      return book.id === id
    });
    var updatedBook = {...books[index],...data};
    // console.log(updatedBook)
    books[index] = updatedBook;
    this.setState({books:books});

  }
  
  render(){
    return(
      <div className="wrap">
        <div className="container">
          <div className="books">
          <NewBookForm addBook={this.addBook}/>
            {
              this.state.books.map(
                (book)=>{
                  var bookProps = {
                    ...book,
                    key: book.id,
                    removeBook: this.removeBook,

                  }
                  return(
                    <Book {...bookProps} removeBook={this.removeBook} updateBook={this.updateBook}/>
                  )
                  
                }
              )
            }
          
          
        </div>
      </div>
    </div>
    
    );
  }
}

export default App;
