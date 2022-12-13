import React, {Component} from 'react';

class Sort extends Component {
    render() {
        return(
            <div className="dropdown">
                <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Sort by <span className="caret" />
                </button>
                <ul className="dropdown-menu">
                    <li><a role="button">Name ASC</a></li>
                    <li><a role="button">Name DESC</a></li>
                    <li role="separator" className="divider" />
                    <li><a role="button">Level ASC</a></li>
                    <li><a role="button">Level DESC</a></li>
                </ul>
                <span className="label label-success label-medium">NAME - DESC</span>
            </div>
        )
    }
}

export default Sort;
