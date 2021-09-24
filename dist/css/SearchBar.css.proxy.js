// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@media screen and (min-width: 768px) {\n  .ui.form {\n    width: 50%;\n    margin: auto;\n  }\n\n  .ui.form .field {\n    text-align: center;\n  }\n\n  .ui.container {\n    width: 1000px;\n  }\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}