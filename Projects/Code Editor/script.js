function run(){
    let htmlCode = document.getElementById("html-code").value;
    let cssCode = document.getElementById("css-code").value;
    let jsCode = document.getElementById("js-code").value;
    let outputCode = document.getElementById("output");

    outputCode.contentDocument.body.innerHTML = htmlCode + "<style>"+cssCode+"</style>";
    outputCode.contentWindow.eval(jsCode);
}