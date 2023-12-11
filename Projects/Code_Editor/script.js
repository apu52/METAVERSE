

let jsCode = '';
let htmlCode = '';
let cssCode = '';

require.config({ paths: { vs: './node_modules/monaco-editor/min/vs' } });

require(['vs/editor/editor.main'], function () {
    var editor1 = monaco.editor.create(document.getElementById('html-code'),{
        value: [''].join(),
        language: 'html',
        theme: 'vs-dark'
    });
    var editor2 = monaco.editor.create(document.getElementById('css-code'),{
        value: [''].join(),
        language: 'css',
        theme: 'vs-dark'
    });
    var editor3 = monaco.editor.create(document.getElementById('js-code'), {
        value: [''].join('\n'),
        language: 'javascript',
        theme: 'vs-dark'
    });

    // Listen for changes in the editor content and update jsCode
    editor1.onDidChangeModelContent(function(){
        htmlCode = editor1.getValue();
    });
    editor2.onDidChangeModelContent(function(){
        cssCode = editor2.getValue();
    });
    editor3.onDidChangeModelContent(function () {
        jsCode = editor3.getValue();
    });

    // Optional: If you want to run the code immediately after editor setup
    // jsCode = editor.getValue();
    // run(); // You can call run here if you want to execute the code immediately after initialization
});

function run() {
    // let htmlCode = document.getElementById("html-code").value;
    // let cssCode = document.getElementById("css-code").value;
    let outputCode = document.getElementById("output");

    outputCode.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
    outputCode.contentWindow.eval(jsCode);
}
function hideMe() {
    const outputWin = document.getElementById("output-window");
    const code = document.getElementById("code");
    const icon = document.getElementById("icon");

    if (outputWin.classList.contains("hidden")) {
        outputWin.classList.remove("hidden");
        code.classList.add("hidden");
        icon.classList.remove("fa-play");
        icon.classList.add("fa-code");
    } else {
        outputWin.classList.add("hidden");
        code.classList.remove("hidden");
        icon.classList.remove("fa-code");
        icon.classList.add("fa-play");
    }
}
