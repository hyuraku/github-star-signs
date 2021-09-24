// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".name {\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  background: rgba(0, 0, 0, 0.025);\n  padding: 1px 2px;\n  font-family: monospace;\n  font-size: 80%;\n}\n\n@media screen and (min-width: 768px) {\n  .NoStarRepo {\n    text-align: center;\n    margin: 2.5% 50%;\n  }\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}