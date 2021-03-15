import React from 'react';
import Title from '../components/Title';

function Display({ fav }) {
    return (
    <pre>
    <code>
        &lt;!doctype html&gt;
        &lt;html lang="en-US"&gt;
        &lt;head&gt;
            &lt;meta charset="utf-8"&gt;                
            &lt;meta name="generator" content="JSFiddle"&gt;
            &lt;/body&gt;
            &lt;meta name="description" content="Displaying your source code on web page."&gt;
            &lt;meta name="author" content="Anna Medvedeva"&gt;
        &lt;/head&gt;
        &lt;body&gt;
            &lt;h1&gt;Displaying your source code on web page&lt;/h1&gt;
            &lt;p1&gt;Do you read, write and speak code? Learn how to share your skills!&lt;/p&gt;
        &lt;/body&gt;
        &lt;/html&gt;
    </code>
</pre> 
    )
} 


function Lawtlin() {
  return (
    <div>
     <Title text="Lawtlin = Law + Kotlin"/>

      <h3>인(Person)</h3>
      <Display fav=""  />

      <br />
      <br />
    </div>
  );
}

export default Lawtlin;