import styled from "styled-components";

export const Button = styled.button`
  border-radius: 50px;
  padding: 10px 25px;
  font-weight: bold;
  cursor: pointer;
  text-transform: capitalize;
  transition: all 0.3s ease 0s;

  border: 1px solid ${ ({border}) => (border ? '#005792' : '#fff' )};
  background: ${ ({bgPrimary}) => (bgPrimary ? '#fff' : '#005792' )};
  color: ${ ({txtPrimary}) => (txtPrimary ? '#005792' : '#fff' )};
  width: ${ ({fullWidth}) => (fullWidth ? '100%' : 'auto')};

  &:hover {
    transform: translateY(-7px);
  }
`;
