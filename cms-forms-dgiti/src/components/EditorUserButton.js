import React from 'react';
import { EditorText } from './EditorTopBarElements';
import StyleSheet from 'react-style';

class EditorUserButton extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                {this.props.userName}
            </div>
        )
    }
}

const styles = StyleSheet.create({
    primary: {
        background: 'green'
    }
});

export default EditorUserButton;