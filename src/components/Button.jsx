// Same component for 2 buttons -> different callbacks, if has text display text, if doesn't display magnifying glass picture

import { Component } from "react";

export class Button extends Component {
    render() {
        const { callback, text, type } = this.props;
        return (
            <>
                <button type={type} onClick={callback}>{text === 'true' && 'Load more'}</button>
            </>
        )
    }
}