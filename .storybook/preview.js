import { addParameters, addDecorator } from "@storybook/react";
import { withContexts } from "@storybook/addon-contexts/react";
import { contexts } from "./contexts";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";

addParameters({
  backgrounds: {
    default: "Default theme",
    values: [
      { name: "Default theme", value: "#ffffff" },
      { name: "Dark theme", value: "#050449" },
    ],
  },
});

addDecorator(withContexts(contexts));
addDecorator(withKnobs);
addDecorator(withA11y);
