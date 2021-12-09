import styled from "styled-components";
import EditorUserButton from './EditorUserButton';

export const Nav = styled.nav`
    background: #669933;
    height: 74px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc(100vw - 1000px) / 2;
    z-index: 10;
`
export const EditorText = styled.h1`
    font-family: 'Roboto';
    padding-left: 1rem;
    color: #eee;
    font-weight: 100;
`

export const UserButton = styled(EditorUserButton)`
    background: #669933;
    height: 50px;
    width: 120px;
    border: 2px solid;
    border-radius: 25px;
    border-color: white;

`