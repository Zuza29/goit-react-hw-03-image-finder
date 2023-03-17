// Same component for 2 buttons -> different callbacks, if has text display text, if doesn't display magnifying glass picture
import css from './Button.module.css';
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