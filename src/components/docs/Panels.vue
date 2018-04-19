<template>
    <div>
        <div class="container">
            <h1 id="panels">Panels</h1>
            <div class="card">
                <p>Panels are used to highlight an area on a page. They display in full width of their container.</p>
                <p>The hero class creates a large panel, suitable for a hero display.</p>

<pre><code class="html">&lt;div class=&quot;panel brand hero&quot;&gt;
    &lt;div class=&quot;container&quot;&gt;
        &lt;h1&gt;Hero Panel&lt;/h1&gt;
        &lt;p&gt;The hero class can be used to create a large panel.&lt;/p&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>

<p>In this example we have created a class <code>.brand</code> to add color to the panel.</p>

<pre><code class="css">.brand {
    background: #4422ff;
    color: #fcfcfc;
}</code></pre>

            </div>
        </div>

        <div class="panel brand hero">
            <div class="container">
                <h1>Hero Panel</h1>
                <p>The hero class can be used to create a large panel.</p>
            </div>
        </div>

        <div class="container">
            <div class="card">
                <p>The <code>.dark</code> class can be used to apply a dark background with light text to a panel. The <code>.lg</code> class enlarges the text similar to <code>.hero</code> but to a lesser extent.</p>
                <pre><code class="html">&lt;div class=&quot;panel dark lg&quot;&gt;
    &lt;div class=&quot;container&quot;&gt;
        &lt;h1&gt;Large Panel&lt;/h1&gt;
        &lt;p&gt;The lg class can be used to create a large panel.&lt;/p&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
            </div>
        </div>

        <div class="panel dark lg">
            <div class="container">
                <h1>Large Panel</h1>
                <p>The lg class can be used to create a large panel.</p>
            </div>
        </div>
        <div class="panel default">
            <div class="container">
                <h1>Default Panel</h1>
                <p>This is a panel without a size class. The default class applies a gray background.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Panels"
};
</script>
