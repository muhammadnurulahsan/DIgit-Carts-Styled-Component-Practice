import "./App.css";
import logo from "./logo.svg";
import "./styles.css";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import StyledButton, {
  FancyButton,
  SubmitButton,
  AnimatedLogo,
  DarkButton,
} from "./Components/Button/Button";

const theme = {
  dark: {
    primary: "#000",
    text: "#fff",
  },
  light: {
    primary: "#fff",
    text: "#000",
  },
  fontFamily: "Segoe UI",
};

const GlobalStyle = createGlobalStyle`
button{
  font-family: ${(props) => props.theme.fontFamily};
}
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        {/* <img src={logo} alt="logo" className="App-logo" /> */}
        <AnimatedLogo src={logo} />
        <div>
          <br />
        </div>
        <StyledButton type="submit">Styled Button</StyledButton>
        <div>
          <br />
        </div>
        <StyledButton variant="outline">Styled Button</StyledButton>
        <div>
          <br />
        </div>
        <FancyButton as="a">Styled Button</FancyButton>
        <div>
          <br />
        </div>
        <SubmitButton>Submit Button</SubmitButton>
        <div>
          <br />
        </div>
        <DarkButton>Dark Button</DarkButton>
      </div>
    </ThemeProvider>
  );
}

export default App;
