// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "footer {\n  font-size: 17px;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  text-align: center;\n  padding: 10px 30px;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  background: #f1f1f1;\n  margin-top: 10px;\n  bottom: 0;\n  margin-bottom: -50px;\n}\n\na {\n  color: #0082c8;\n  text-decoration: none;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}