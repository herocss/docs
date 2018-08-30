<template>
    <div>
        <div class="container">
            <h1 id="code">Code</h1>
            <div class="card">
                <p>Some basic styling is provided for displaying preformated text, like code.</p>
<pre><code>&lt;pre&gt;&lt;code&gt;
    Preformated text example.
&lt;/code&gt;&lt;/pre&gt;</code></pre>
<pre><code>Preformated text example.
</code></pre>
                <div class="panel dark h-column center">
                    <p>A <code>dark</code> class can be applied to the <code>code</code> element for a dark theme.</p>
                    <pre><code class="dark">&lt;pre&gt;&lt;code class=&quot;dark&quot;&gt;
    Preformated text example.
&lt;/code&gt;&lt;/pre&gt;</code></pre>
                    <pre><code class="dark">Preformated text example.</code></pre>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Code"
};
</script>
