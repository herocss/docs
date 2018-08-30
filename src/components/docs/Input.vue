<template>
    <div>
        <div class="container">
            <h1 id="input">Input</h1>
            <div class="card">
                <p>Hero styles inputs.</p>
                <pre><code class="html">&lt;form&gt;
    &lt;div class=&quot;input-group&quot;&gt;
        &lt;label&gt;name&lt;/label&gt;
        &lt;input type=&quot;text&quot; placeholder=&quot;name&quot;&gt;
    &lt;/div&gt;
    &lt;div class=&quot;input-group&quot;&gt;
        &lt;label&gt;email&lt;/label&gt;
        &lt;input type=&quot;email&quot; placeholder=&quot;email address&quot;&gt;
    &lt;/div&gt;
    &lt;div class=&quot;input-group&quot;&gt;
        &lt;button class=&quot;btn btn-success&quot;&gt;submit&lt;/button&gt;
        &lt;button class=&quot;btn btn-danger&quot;&gt;cancel&lt;/button&gt;
    &lt;/div&gt;
&lt;/form&gt;</code></pre>
                    <form>
                        <div class="input-group">
                            <label>name</label>
                            <input type="text" placeholder="name">
                        </div>
                        <div class="input-group">
                            <label>email</label>
                            <input type="email" placeholder="email address">
                        </div>
                        <div class="input-group">
                            <button class="btn btn-success">submit</button>
                            <button class="btn btn-danger">cancel</button>
                        </div>
                    </form>

                    <p>There are a few classes available to style buttons.</p>

<pre><code class="html">&lt;a href=&quot;#&quot; class=&quot;btn btn-default&quot;&gt;link&lt;/a&gt;
&lt;button class=&quot;btn btn-default&quot;&gt;default&lt;/button&gt;
&lt;button class=&quot;btn btn-success&quot;&gt;success&lt;/button&gt;
&lt;button class=&quot;btn btn-primary&quot;&gt;primary&lt;/button&gt;
&lt;button class=&quot;btn btn-warn&quot;&gt;warn&lt;/button&gt;
&lt;button class=&quot;btn btn-danger&quot;&gt;danger&lt;/button&gt;</code></pre>
                <form>
                    <a href="#" class="btn btn-default">link</a>
                    <button class="btn btn-default">default</button>
                    <button class="btn btn-success">success</button>
                    <button class="btn btn-primary">primary</button>
                    <button class="btn btn-warn">warn</button>
                    <button class="btn btn-danger">danger</button>
                </form>
                <br />

                <p>Hero has a class <code>btn-lg</code> that can be used in combination with <code>btn</code> to create a larger button.</p>

                <form>
                    <a href="#" class="btn btn-default btn-lg">link</a>
                    <button class="btn btn-default btn-lg">default</button>
                    <button class="btn btn-success btn-lg">success</button>
                    <button class="btn btn-primary btn-lg">primary</button>
                    <button class="btn btn-warn btn-lg">warn</button>
                    <button class="btn btn-danger btn-lg">danger</button>
                </form>
                <br />

                <div class="panel dark h-column center">
                    <div>
                        <h2>Ghost buttons</h2>
                    </div>
                    <p>Contextual ghost buttons were added in version 0.5.</p>

<pre><code class="dark">&lt;button class=&quot;btn btn-success-ghost&quot;&gt;success&lt;/button&gt;
&lt;button class=&quot;btn btn-primary-ghost&quot;&gt;primary&lt;/button&gt;
&lt;button class=&quot;btn btn-warn-ghost&quot;&gt;warn&lt;/button&gt;
&lt;button class=&quot;btn btn-danger-ghost&quot;&gt;danger&lt;/button&gt;
</code></pre>

                    <div>
                        <button class="btn btn-success-ghost">success</button>
                        <button class="btn btn-primary-ghost">primary</button>
                        <button class="btn btn-warn-ghost">warn</button>
                        <button class="btn btn-danger-ghost">danger</button>
                    </div>
                    <br />
                    <br />
                    <p>The <code>btn-lg</code> class can be combined with the ghost button classes to create large ghost buttons.</p>

<pre><code class="dark">&lt;button class=&quot;btn btn-success-ghost btn-lg&quot;&gt;success&lt;/button&gt;
&lt;button class=&quot;btn btn-primary-ghost btn-lg&quot;&gt;primary&lt;/button&gt;
&lt;button class=&quot;btn btn-warn-ghost btn-lg&quot;&gt;warn&lt;/button&gt;
&lt;button class=&quot;btn btn-danger-ghost btn-lg&quot;&gt;danger&lt;/button&gt;
</code></pre>

                    <div>
                        <button class="btn btn-success-ghost btn-lg">success</button>
                        <button class="btn btn-primary-ghost btn-lg">primary</button>
                        <button class="btn btn-warn-ghost btn-lg">warn</button>
                        <button class="btn btn-danger-ghost btn-lg">danger</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
