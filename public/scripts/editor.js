// const keywords = [
//     "if",
//     "elseif",
//     "else",
//     "while",
//     "for",
//     "break",
//     "echo",
//     "fscan",
//     "return",
//     "this",
// ];

// document.getElementById("codeArea").addEventListener("input", function() {
//     let content = this.textContent;
//     console.log(content);
//     keywords.forEach(keyword => {
//         const regex = new RegExp(`\\b${keyword}\\b`, "g");
//         content = content.replace(regex, `<span class="keyword">${keyword}</span>`);
//     });

//     this.innerHTML = content;
//     // placeCaretAtEnd(this);
// });

// function placeCaretAtEnd(el) {
//     el.focus();
//     const range = document.createRange();
//     range.selectNodeContents(el);
//     range.collapse(false);
//     const sel = window.getSelection();
//     sel.removeAllRanges();
//     sel.addRange(range);
// }
document.getElementById('sin').disabled = true;
// document.getElementById('lex').disabled = true;
document.getElementById('sem').disabled = true;
const regex = /(?<!\/\/.*)\b(if|else|elseif|while|foreach|break|echo|fscan|return|this|as)\b/gi;
const rege = /\/\/.*/g;
function highlightText() {
    const textarea = document.getElementById("codeArea");
    const highlightDiv = document.getElementById("codeText");
    const text = textarea.value;
    document.getElementById('lex').disabled = false;
    document.getElementById('lex').className = "";
    document.getElementById('sin').className = "";
    document.getElementById('sem').className = "";
    document.getElementById('sin').disabled = true;
    document.getElementById('sem').disabled = true;

    // Reemplaza las palabras coincidentes con una versión resaltada
    const highlightedText = text.replace(regex, (match) => `<span class="highlighted-word">${match}</span>`);
    // console.log(highlightedText.replace(rege, (match) => `<span class="comment-word">${match}</span>`))
    const newhighlightedText = highlightedText.replace(rege, (match) => `<span class="comment-word">${match}</span>`);

    // Actualiza el div con el texto resaltado
    // highlightDiv.innerHTML = highlightedText;
    highlightDiv.innerHTML = newhighlightedText;
  }

// const textarea = document.getElementById('codeArea');

// textarea.addEventListener('input', function () {
//   this.style.height = 'auto'; // Restablece la altura para que se ajuste al contenido
//   this.style.height = (this.scrollHeight) + 'px'; // Ajusta la altura según el contenido
// });