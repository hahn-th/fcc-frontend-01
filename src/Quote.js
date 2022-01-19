import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'

class Quote extends React.Component {

    render() {
        return (
            <span>
                <FontAwesomeIcon icon={faQuoteRight} className="mr-2" size="1x" />
                {this.props.quote}
            </span>
        )
    }
}

export default Quote;