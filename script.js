hljs.initHighlightingOnLoad();

function copyCode() {
    const code = document.querySelector('.code-container code').textContent;
    const textArea = document.createElement('textarea');
    textArea.value = code;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('コードがコピーされました！');
}