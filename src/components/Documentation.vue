<template>
<div>
    <div class="container">
        <h1>Documentation</h1>
        <ul>
            <li><a href="#typography">Typography</a></li>
            <li><a href="#cards">Cards</a></li>
            <li><a href="#navbar">Navbar</a></li>
            <li><a href="#panels">Panels</a></li>
            <li><a href="#layout">Layout</a></li>
            <li><a href="#responsiveness">Responsiveness</a></li>
            <li><a href="#alerts">Alerts</a></li>
            <li><a href="#input">Input</a></li>
        </ul>
    </div>
    <typography></typography>
    <cards></cards>
    <navbar></navbar>
    <panels></panels>
    <layout></layout>
    <responsiveness></responsiveness>
    <alerts></alerts>
    <input-docs></input-docs>
</div>
</template>

<script>
import Cards from "./docs/Cards";
import Panels from "./docs/Panels";
import Layout from "./docs/Layout";
import Typography from "./docs/Typography";
import Alerts from "./docs/Alerts";
import Input from "./docs/Input";
import Responsiveness from "./docs/Responsiveness";
import Navbar from "./docs/Navbar";

export default {
  components: {
    cards: Cards,
    panels: Panels,
    layout: Layout,
    typography: Typography,
    alerts: Alerts,
    inputDocs: Input,
    responsiveness: Responsiveness,
    navbar: Navbar
  },
  // eslint-disable-next-line
  beforeMount() {
    // eslint-disable-next-line
    hljs.initHighlightingOnLoad();
  }
};
</script>
