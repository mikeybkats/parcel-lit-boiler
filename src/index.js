import {html, render} from 'lit-html';

// Define a template(s)
const myData = (data) => html`<p>I like ${data}.</p>`;
const myTemplate = (name) => html`
    <p>Hello ${name}</p>
    <div>
        ${myData("ice cream")}
    </div>
`;

// Render the template to the document
render(myTemplate('World'), document.body);

