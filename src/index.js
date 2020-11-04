import React, { useState } from "react";
import ReactDom from "react-dom";
import { ThemeProvider } from "styled-components";
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from "./components/Buttons";
import { GlobalStyle, darkTheme, defaultTheme } from "./utils";
import { SignUpModal, SignInModal } from "./components";
// eslint-disable-next-line
import whatInput from "what-input";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setUseDarkTheme(true)}
      >
        Dark Theme
      </button>
      <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setUseDarkTheme(false)}
      >
        Default Theme
      </button>
      <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setShowModal(!showModal)}
      >
        Toggle Modal
      </button>
      <div
        style={{
          background: useDarkTheme
            ? darkTheme.background
            : defaultTheme.background,
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            margin: "20px 0",
          }}
        >
          <SignUpModal showModal={showModal} setShowModal={setShowModal} />
        </div>
        {/* <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            margin: "20px 0",
          }}
        >
          <SignInModal showModal={showModal} setShowModal={setShowModal} />
        </div> */}
        <ul>
          <li>
            <PrimaryButton>Hello world</PrimaryButton>
          </li>
          <li>
            <SecondaryButton>Hello world</SecondaryButton>
          </li>
          <li>
            <TertiaryButton>Hello world</TertiaryButton>
          </li>
        </ul>
        <ul>
          <li>
            <PrimaryButton modifiers={["warning", "primaryButtonWarning"]}>
              Hello world
            </PrimaryButton>
          </li>
          <li>
            <SecondaryButton modifiers={["warning", "secondaryButtonWarning"]}>
              Hello world
            </SecondaryButton>
          </li>
          <li>
            <TertiaryButton modifiers={["warning", "tertiaryButtonWarning"]}>
              Hello world
            </TertiaryButton>
          </li>
        </ul>
        <ul>
          <li>
            <PrimaryButton modifiers={["error", "primaryButtonError"]}>
              Hello world
            </PrimaryButton>
          </li>
          <li>
            <SecondaryButton modifiers={["error", "secondaryButtonError"]}>
              Hello world
            </SecondaryButton>
          </li>
          <li>
            <TertiaryButton modifiers={["error", "tertiaryButtonError"]}>
              Hello world
            </TertiaryButton>
          </li>
        </ul>
        <ul>
          <li>
            <PrimaryButton modifiers={["success", "primaryButtonSuccess"]}>
              Hello world
            </PrimaryButton>
          </li>
          <li>
            <SecondaryButton modifiers={["success", "secondaryButtonSuccess"]}>
              Hello world
            </SecondaryButton>
          </li>
          <li>
            <TertiaryButton modifiers={["success", "tertiaryButtonSuccess"]}>
              Hello world
            </TertiaryButton>
          </li>
        </ul>
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
