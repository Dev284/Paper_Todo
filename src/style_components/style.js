import styled from "styled-components";

export const MainDiv = styled.div`
  font-family: Neucha,sans-serif;
  display: flex;
  align-items: center;
  background-color: rgb(241, 241, 241);
  margin: 0px;
  min-height: 100vh;
  justify-content: center;
`

export const Button = styled.button`
    align-self: center;
    background: transparent;
    -webkit-transition: all 235ms ease-in-out 0s;
    -o-transition: all 235ms ease-in-out 0s;
    transition: all 235ms ease-in-out 0s;
    color: #41403e;
    display: inline;
    outline: none;
    border: 2px solid #41403e;
    border-top-left-radius: 255px 15px;
    border-top-right-radius: 15px 225px;
    border-bottom-right-radius: 225px 15px;
    border-bottom-left-radius: 15px 255px;
    font-size: 1rem;
    margin-left: 10px;
cursor: pointer;
padding: 0px 20px;
&:hover {
  box-shadow: 2px 2px gray;
  cursor: pointer;
  }
`


export const ParentDiv = styled.div`
  box-shadow: 4px 4px 0.5px 0.5px gray;
  background-color: white;
  width: auto;
  padding: 30px 30px;
  border: 2px solid #41403e;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  border-bottom-right-radius: 225px 15px;
  border-bottom-left-radius: 15px 255px;

  &:hover {
    box-shadow: 0px 0px 4px 4px gray;
    cursor: pointer;
  }
`

export const ChildDiv = styled.div`
  display: flex;
  justify-content: center;
  
`

export const StyleUl = styled.ul`
  list-style-type: none;
`

export const StyleLi = styled.li`
  display: list-item;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  border-bottom-right-radius: 225px 15px;
  border-bottom-left-radius: 15px 255px;
  border: 2px solid #41403e;
  box-shadow: 1px 1px gray;
  width: auto;
  cursor: pointer;
  padding: 0.5rem;
  margin: 0.5rem;
  &:hover {
    box-shadow: 3px 3px gray;
    cursor: pointer;
  }
  &:active {
    text-decoration: line-through;
    background-color: #c1c0bd;
  }
`

export const StyleP = styled.p`
  text-align: center;
`

export const StyleInput = styled.input`
    font-family: Neucha,sans-serif;
    display: block;
    background: transparent;
    color: #41403e;
    outline: none;
    border-top-left-radius: 255px 15px;
    border-top-right-radius: 15px 225px;
    border-bottom-right-radius: 225px 15px;
    border-bottom-left-radius: 15px 255px;
    font-size: 1rem;
    padding: 0.5rem;
    border: 2px solid #41403e;
  &:hover {
    box-shadow: 0px 0px 2px 2px gray;
  }
`


export const Styledh1 = styled.h1`
  margin: 10px;
  font-weight: 400;
`

export const StyledSelect = styled.select`
  display: block;
    background: transparent;
    color: #41403e;
    outline: none;
    border-top-left-radius: 255px 15px;
    border-top-right-radius: 15px 225px;
    border-bottom-right-radius: 225px 15px;
    border-bottom-left-radius: 15px 255px;
    font-size: 1rem;
    padding: 0.5rem;
    border: 2px solid #41403e;
  &:hover {
    box-shadow: 0px 0px 2px 2px blue;
    cursor: pointer;
  }
`

export const StyledOption = styled.option`
  padding: 10px;
`

export const StyledLabel = styled.label`
  cursor: pointer;
  padding: 20px 0 10px 100px;
`