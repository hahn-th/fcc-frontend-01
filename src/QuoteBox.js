import react from "react";
import Quote from './Quote';
import { Component } from "react/cjs/react.production.min";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSync,faSpinner } from '@fortawesome/free-solid-svg-icons';

class QuoteBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: 'Test',
            author: 'asdf',
            allQuotes: [],
            loading: true
        }

        this.loadNextQuote = this.loadNextQuote.bind(this);
    }

    render() {

        let button = "";
        if(this.state.loading) {
            button = <button id="new-quote" className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded inline-block">
                        <FontAwesomeIcon icon={faSpinner} size="1x" spin />
                    </button>;
        } else {
            button = <button id="new-quote" className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded inline-block">
                        <FontAwesomeIcon icon={faSync} onClick={this.loadNextQuote}/>
                    </button> 
        }



        return (
            <div id="quote-box" className="bg-white rounded-xl drop-shadow-xl p-3 w-96 text-left"> 
                <div id="text" className="text-xl font-medium text-black">
                    <Quote quote={this.state.quote} />
                </div>
                <div id="author" className="text-slate-500 text-right">
                    {this.state.author}
                </div>
                <hr className="mt-2 mb-2" />
                {button}
                <a href="https://www.twitter.com/intent/tweet" target="_blank" id="tweet-quote" role="button" className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded inline-block ml-1"><FontAwesomeIcon icon={faTwitter}  /></a>
            </div>
        );
    }

    componentDidMount() {
        console.log("compoDidLoad")
        fetch('https://gist.githubusercontent.com/shreyasminocha/7d5dedafc1fe158f82563c1223855177/raw/325d51aca7165b2498971afcff9bed286a52dc0e/quotes.json')
            .then(response => response.json())
            .then((jsonData) => {
                // jsonData is parsed json object received from url
                this.setState({
                    allQuotes: jsonData
                });
                this.setState({
                    loading: false
                })

                this.loadNextQuote();
            })
            .catch((error) => {
                // handle your errors here
                console.error(error)
            })
    }

    loadNextQuote() {
        this.setState({
            loading: true
        });
        const idx = Math.floor(Math.random() * this.state.allQuotes.length);
        this.setState({
            quote: this.state.allQuotes[idx].quote,
            author: this.state.allQuotes[idx].author 
        });
        this.setState({
            loading: false
        });
    }
}


export default QuoteBox;