import React from 'react';
import { 
    Nav,
    EditorText,
    UserButton,
} from './EditorTopBarElements'

class EditorTopBar extends React.Component {
    render() {
        return (
            <>
            <Nav>
                <EditorText>{this.props.title}</EditorText>
                <UserButton userName='user1'/>
            </Nav>
            </>
        )
    }
}

export default EditorTopBar;