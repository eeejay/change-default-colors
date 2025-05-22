"use strict";

const BACKGROUND_COLOR = "tan";
const TEXT_COLOR = "brown";
const LINK_COLOR = "darkcyan";
const VISITED_LINK_COLOR = "green";

const CSS = `
:root {
  background-color: ${BACKGROUND_COLOR};
  color: ${TEXT_COLOR};
}

a {
  color: ${LINK_COLOR};
}

a:visited {
  color: ${VISITED_LINK_COLOR};
}
`;

browser.tabs.onUpdated.addListener((tabId, changeInfo, tabInfo) => {
  if (changeInfo["status"] == "loading") {
    browser.tabs.insertCSS({code: CSS, cssOrigin: "user"});
  }
});
