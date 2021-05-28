import styled from "styled-components";
import { Color } from "./Variables";

export const Input = styled.input.attrs({ type: 'text' })`
    margin-bottom: 1rem;
    border-radius: 55px;
    border-width: 0;
    background: ${Color.white};
    padding: 1rem 1.5rem;

    width: ${ ({fullWidth}) => (fullWidth ? '100%' : 'auto')};
    
    /* Placeholder style */
    &::-webkit-input-placeholder, /* Edge */
    &:-ms-input-placeholder, /* Internet Explorer 10-11 */
    &::placeholder {
        color: #838C91;
        font-weight: bold;
    }
`
export const Textarea = styled.textarea`
    margin-bottom: 1rem;
    border-radius: 20px;
    border-width: 0;
    background: ${Color.white};
    padding: 1rem 1.5rem;

    width: ${ ({fullWidth}) => (fullWidth ? '100%' : 'auto')};
`