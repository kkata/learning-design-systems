import styled from "styled-components";
import { typeScale } from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.helperText};
    padding: 8px;
  `,
  large: () => `
    font-size: ${typeScale.header5};
    padding: 16px 24px;
  `,
  warning: ({ theme }) => `
    background: none;
    color: ${theme.status.warningColor};
    border-color: ${theme.status.warningColor};
    &:hover {
      background-color: ${theme.status.warningColorHover};
      border-color: ${theme.status.warningColorHover};
      color: ${theme.textColorInverted};
    }
    &:active {
      background-color: ${theme.status.warningColorActive};
      border-color: ${theme.status.warningColorActive};
    }
  `,
  primaryButtonWarning: ({ theme }) => `
    background-color: ${theme.status.warningColor};
    color: ${theme.textColorInverted};
  `,
  secondaryButtonWarning: ({ theme }) => `
    border-color: ${theme.status.warningColor};
  `,
  tertiaryButtonWarning: ({ theme }) => `
    border-color: ${theme.tertiaryBorderColor};
  `,
  error: ({ theme }) => `
    background: none;
    color: ${theme.status.errorColor};
    border-color: ${theme.status.errorColor};
    &:hover {
      background-color: ${theme.status.errorColorHover};
      border-color: ${theme.status.errorColorHover};
      color: ${theme.textColorInverted};
    }
    &:active {
      background-color: ${theme.status.errorColorActive};
      border-color: ${theme.status.errorColorActive};
    }
  `,
  primaryButtonError: ({ theme }) => `
    background-color: ${theme.status.errorColor};
    color: ${theme.textColorInverted};
  `,
  secondaryButtonError: ({ theme }) => `
    border-color: ${theme.status.errorColor};
  `,
  tertiaryButtonError: ({ theme }) => `
    border-color: ${theme.tertiaryBorderColor};
  `,
  success: ({ theme }) => `
    background: none;
    color: ${theme.status.successColor};
    border-color: ${theme.status.successColor};
    &:hover {
      background-color: ${theme.status.successColorHover};
      border-color: ${theme.status.successColorHover};
      color: ${theme.textColorInverted};
    }
    &:active {
      background-color: ${theme.status.successColorActive};
      border-color: ${theme.status.successColorActive};
    }
  `,
  primaryButtonSuccess: ({ theme }) => `
    background-color: ${theme.status.successColor};
    color: ${theme.textColorInverted};
  `,
  secondaryButtonSuccess: ({ theme }) => `
    border-color: ${theme.status.successColor};
  `,
  tertiaryButtonSuccess: ({ theme }) => `
    border-color: ${theme.tertiaryBorderColor};
  `,
};

const Button = styled.button`
  padding: 12px 24px;
  font-size: ${typeScale.paragraph};
  min-width: 150px;
  cursor: pointer;
  font-family: ${(props) => props.theme.primaryFont};
  border: 1px solid ${(props) => props.theme.primaryColor};
  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: ${(props) => props.theme.primaryHoverColor};
    color: ${(props) => props.theme.textColorOnPrimary};
    border-color: ${(props) => props.theme.primaryHoverColor};
  }

  &:focus {
    box-shadow: 0px 0px 8px 0px #117eff;
  }

  &:active {
    background-color: ${(props) => props.theme.primaryActiveColor};
    border-color: ${(props) => props.theme.primaryActiveColor};
    color: ${(props) => props.theme.textColorOnPrimary};
  }

  &:disabled {
    cursor: not-allowed;
    background: none;
    color: ${(props) => props.theme.disabled};
    border: none;
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.textColorOnPrimary};

  &:disabled {
    background-color: ${(props) => props.theme.disabled};
    color: ${(props) => props.theme.textOnDisabled};
    border: 1px solid ${(props) => props.theme.disabled};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
export const SecondaryButton = styled(Button)`
  color: ${(props) => props.theme.primaryColor};
  background-color: transparent;

  &:disabled {
    border: 1px solid ${(props) => props.theme.disabled};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
export const TertiaryButton = styled(Button)`
  color: ${(props) => props.theme.primaryColor};
  border-color: ${(props) => props.theme.tertiaryBorderColor};
  background: none;

  &:disabled {
    color: ${(props) => props.theme.disabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
