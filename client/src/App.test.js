import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { LandingPage } from "./components/LandingPage/LandingPage";


const MockLandingPage=()=>{
  return(
    <BrowserRouter>
    <LandingPage/>
    </BrowserRouter>
  )
}

describe("Landing page",()=>{
  it("should render a button whit text 'Ingresar'", async()=>{
    render(<MockLandingPage/>);
    const buttonElement=screen.getByRole('button',{name: /Ingresar/i});
    expect(buttonElement).toBeDefined()
  })
})