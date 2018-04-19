<template>
<div>
    <div class="container">
        <h1>Getting started</h1>
        <div class="card">
            <h2>Install hero</h2>
            <p>There are a few ways to install hero.</p>
            <h3>NPM:</h3>
            <pre><code>npm install herocss</code></pre>
            <h3>Download from the repository:</h3>
            <a href="https://github.com/ajb32x/hero/tree/master/dist">https://github.com/ajb32x/hero/tree/master/dist</a>
            <h2>Code</h2>
            <p>A few things need to be set in your page for hero to work properly</p>
            <h3>Set doctype to HTML5</h3>
            <pre><code class="html">&lt;!DOCTYPE html&gt;</code></pre>
            <h3>Set the viewport meta tag to be responsive</h3>
            <pre><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;</code></pre>
            <h3><strong>Recommended:</strong> Include Roboto font from Google fonts</h3>
            <pre><code class="html">&lt;link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700" rel="stylesheet"&gt;</code></pre>
            <h2>Example</h2>
            <p>Here's an example of a basic page using hero.</p>
            <pre><code class="html">&lt;!DOCTYPE html&gt;
&lt;html&gt;

&lt;head&gt;
    &lt;meta charset=&quot;utf-8&quot; /&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot;&gt;
    &lt;link href=&quot;https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700&quot; rel=&quot;stylesheet&quot;&gt;
    &lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; media=&quot;screen&quot; href=&quot;hero.min.css&quot; /&gt;
    &lt;script src=&quot;hero.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;div class=&quot;panel hero&quot;&gt;
        &lt;div class=&quot;container&quot;&gt;
            &lt;h1&gt;My app&lt;/h1&gt;
            &lt;p&gt;A very cool tagline might go here.&lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/body&gt;

&lt;/html&gt;</code></pre>
        </div>
    </div>
</div>
</template>

<script>
export default {
  // eslint-disable-next-line
  beforeMount() {
    // eslint-disable-next-line
    hljs.initHighlightingOnLoad();
  }
};
</script>
