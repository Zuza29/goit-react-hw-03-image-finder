import { Component } from "react";

export class Button extends Component {
    render() {
        const { callback, text, type, className } = this.props;
        return (
            <>
                <button className={className} type={type} onClick={callback}>{text === 'true' && 'Load more'}</button>
            </>
        )
    }
}