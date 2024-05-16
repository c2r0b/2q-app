import { ApolloClientElement } from "@apollo-elements/components/apollo-client";
import { client } from "./client";

import "./styles/global.scss";

// icons setup
import { FontAwesomeIcon } from "@riovir/wc-fontawesome";
customElements.define("fa-icon", FontAwesomeIcon);

import "./app";

const clientWrapper = document.getElementById("client") as ApolloClientElement;

clientWrapper.client = client;

customElements
  .whenDefined("main-app")
  .then(() => document.body.removeAttribute("unresolved"));
