// import antlr4 from 'antlr4';
// const antlr4 = require('antlr4');
// import { MyLanguageLexer } from './MyLanguageLexer.mjs';
// import { MyLanguageParser } from './MyLanguageParser.mjs';

import { inputAnl } from "../../src/inputAnl.mjs";

function alexico() {
    const code = document.getElementById("codeArea").value;
    const errorArea = document.getElementById("ErrorArea");
    errorArea.value = "";
    const tokenTable = document.getElementById("tokenTable");

    const tablaSimbolos = new TokenTable();
    const errorStack = new ErrorStack();

    // Limpia la tabla antes de compilar
    while (tokenTable.rows.length > 1) {
        tokenTable.deleteRow(1);
    }

    // Simulación de análisis de tokens (básico)
    const lines = code.split("\n");
    const keywords = [
        "if",
        "elseif",
        "else",
        "while",
        "foreach",
        "break",
        "echo",
        "fscan",
        "return",
        "this",
        "as"
    ];

    const operators = [
        "+",
        "-",
        "*",
        "/",
        "%",
        "=",
        "<",
        ">",
        "!",
        "==",
        "!=",
        "&&",
        "||",
        "->",
        "++",
        "--"
    ];

    const groupSigns = [
        "(",
        ")",
        "{",
        "}"
    ];

    const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '*', '/', '=', '$', '%', '&', '!', '"', '|', '<', '>', '(', ')', '[', ']', '{', '}', '.', ',', ' '];

    //'+', '*', '/', '=', '$', '%', '&', '!', '"', '|', '<', '>', '(', ')', '[', ']', '{', '}', ';', '.', ',', ' '];
    //const regex = /\b(\w+)\b/g;
    const regex = /\b(\W{0,2}\w+)\b/g;

    lines.forEach((line, lineIndex) => {

        const tokens = line.split(" ");
        console.log(tokens)

        let isComment = (line.trim()[0] + line.trim()[1]) === "//"
        //console.log(isComment)
        //console.log(line.trim()[0] + line.trim()[1])

        /*
        if(isComment){
            const highlightDiv = document.getElementById("codeText");
            const highlightedText = code.replace(line, (match) => `<span class="comment-word">${match}</span>`);

            // Actualiza el div con el texto resaltado
            highlightDiv.innerHTML = highlightedText;

        }*/


        tokens.forEach((token)=>{
            let tipo;

            if (token[0] === '$' && isNaN(token[1]) && [...token].every(caracter => alfabeto.includes(caracter))) tipo = "Identifier";
            else if (keywords.includes(token)) tipo = "Keyword";
            else if (!isNaN(token)) tipo = "Numeric Constant";
            else if (token[0] === '"' && token[token.length-1] === '"') tipo = "Text Constant"
            else if (operators.includes(token)) tipo = "Operator";
            else if (groupSigns.includes(token)) tipo = "Delimiter";
            else{
                tipo = "Not recognized by the language";
                let error;
                if (!isNaN(token[0]) && ((token.split(".").length-1) > 1 || [...token].some(char => isNaN(char) && char !== '.')))
                    error = "Error: Invalid Numeric Constant. Line: " + (lineIndex + 1) + " Column: " + (line.indexOf(token) + 1)
                else if (token[0] === '"' && token[token.length-1] !== '"')
                    error = "Error: Invalid Text Constant. Line: " + (lineIndex + 1) + " Column: " + (line.indexOf(token) + 1)
                //else if (!isNaN(token[0]) && ((token.split(".").length-1) > 1 || [...token].some(char => isNaN(char) && char !== '.')))
                else if (![...token].every(caracter => alfabeto.includes(caracter)))
                    error = "Error: Not Allowed Character. Line: " + (lineIndex + 1) + " Column: " + (line.indexOf(token) + 1)
                else
                    error = "Error: Invalid Identifier Name. Line: " + (lineIndex + 1) + " Column: " + (line.indexOf(token) + 1)
                if (isComment) error = ""
                errorStack.pushError(error, lineIndex + 1, line.indexOf(token) + 1)
                //console.log(errorId)
            }







            if (token !== '' && !isComment){
                //Añadir al frontend
                const newRow = tokenTable.insertRow();

                let value = ""
                if (tipo === "Identifier"){
                    let id = -1
                    let index = 0
                    let deleted

                    for (let fila of tokenTable.rows) {
                        //console.log("fila")
                        for (let celda of fila.cells) {

                            if (celda.textContent === token){
                                id = index;
                                deleted = fila
                            }
                        }
                        index++
                    }
                    //console.log(id)
                    //console.log(deleted)
                    //console.log(deleted.cells[1].textContent);
                    //console.log(deleted.split(""))
                    if (id !== -1){
                        if (deleted.cells.length>3)
                            value = deleted.cells[3].textContent
                        tokenTable.deleteRow(id)
                    }

                    if (tokens[tokens.indexOf(token) + 1] === "=" ){
                        let valueToken = tokens[tokens.indexOf(token) + 2];
                        if (!isNaN(valueToken) || (valueToken[0] === '"' && valueToken[valueToken.length-1] === '"'))
                            value = valueToken;
                    }


                }

                newRow.insertCell(0).textContent = tipo;
                newRow.insertCell(1).textContent = token;
                newRow.insertCell(2).textContent = `${lineIndex + 1}, ${line.indexOf(token) + 1}`;
                newRow.insertCell(3).textContent = value;

                //Añadir a la TokenTable
                //let virtualTokens =  tablaSimbolos.getTable()
                //console.log(virtualTokens)
                //let previous = virtualTokens.find(obj => obj.token.token === token) || null
                //console.log("previous: " + previous)

                tablaSimbolos.addToken(tipo, token, value, lineIndex + 1, line.indexOf(token) + 1);

                //tablaSimbolos.readToken(1); // Leer el primer token
                //tablaSimbolos.updateToken(1, "Identificador", "y", 1, 6);
                //tablaSimbolos.clear();
            }





        })

    });
    //Imprimir errores si existen
    if(errorStack.stack.length > 0){
        errorArea.value = errorStack.popAllErrors();
    }

    return { tablaSimbolos, errorStack };
}

function asintactico() {
    const code = document.getElementById("codeArea").value;
    const errorArea = document.getElementById("ErrorArea");
    errorArea.value = "";
    //const tokenTable = document.getElementById("tokenTable");

    let { tablaSimbolos, errorStack } = alexico();

    //console.log(tablaSimbolos)

    errorStack = verificarBalanceo(code, errorStack)

    //Implementaci[on G4

    const input = `
    $true = "verdadero"
    $b 0
    if ( $true ) {
      foreach ( $x as $po ) {
         echo  $po . $po
      }
    }
    else {
      while ( $b < 10 ) {
         echo $b
         $b = $b + 1
      }
    }
`;
    const replCode = code.replace(/\/\/.*$/gm, '')
    // console.log(replCode)
    const errorSintax = inputAnl(replCode);

// Crear lexer y parser
    // const chars = new antlr4.InputStream(input);
    // const lexer = new MyLanguageLexer(chars);
    // const tokens = new antlr4.CommonTokenStream(lexer);
    // const parser = new MyLanguageParser(tokens);
// Configurar el error listener personalizado
    // const errorListener = new MyErrorListener(errorStack);
    // parser.removeErrorListeners(); 
    // parser.addErrorListener(errorListener); 

// Parsear la entrada
    // const tree = parser.program();
// Imprimir los errores almacenados
    // errorStack = errorListener.getErrors();
    console.log("Estrada Stack")
    // console.log("Errores:", errorSintax.pop());
    // console.log("Errores:", errorSintax.pop());
    // console.log("Errores:", errorSintax.pop());

    let sintaxErrors = "";
    while (errorSintax.length > 0){

        const error = errorSintax.pop();
        sintaxErrors = "Error:" + error + "\n" +  sintaxErrors;
        //console.log(ErrorStack.errorTypes[error.error])
    }
    console.log(sintaxErrors)
    errorArea.value = sintaxErrors

// Imprimir el árbol sintáctico
    //console.log("Árbol:", tree.toStringTree(parser.ruleNames));


    //Fin G4


    //Imprimir errores si existen
    if(errorStack.stack.length > 0){
        console.log("Mane Stack")
        errorArea.value = errorStack.popAllErrors();
    }


}




function verificarBalanceo(codigo, errorStack) {
    const stack = []; // Pila para almacenar los caracteres de apertura
    const abren = ["(", "{"]; // Caracteres de apertura
    const cierran = [")", "}"]; // Caracteres de cierre

    const lines = codigo.split("\n"); // Separar el código en líneas

    // Recorrer cada línea del código
    for (let lineNumber = 0; lineNumber < lines.length; lineNumber++) {
        const line = lines[lineNumber];

        // Recorrer cada caracter de la línea
        for (let colNumber = 0; colNumber < line.length; colNumber++) {
            const char = line[colNumber];

            if (abren.includes(char)) {
                stack.push({ char, line: lineNumber + 1, column: colNumber + 1 }); // Almacenar la posición de apertura
            } else if (cierran.includes(char)) {
                // Verificar si la pila está vacía antes de hacer pop
                if (stack.length === 0) {
                    errorStack.pushError(`Unbalanced: Found a '${char}' at line ${lineNumber + 1}, column ${colNumber + 1}, but there is no corresponding opening parenthesis.`, lineNumber + 1, colNumber + 1)
                    return errorStack;
                }

                const ultimo = stack.pop();

                // Si el último carácter de apertura no coincide con el carácter de cierre
                if (abren.indexOf(ultimo.char) !== cierran.indexOf(char)) {
                    errorStack.pushError(`Unbalanced: Expected a '${abren[cierran.indexOf(char)]}' at line ${ultimo.line}, column ${ultimo.column}. But found a '${char}' at line ${lineNumber + 1}, column ${colNumber + 1}.`, 0, 0)
                    return errorStack;
                }
            }
        }
    }

    // Si la pila no está vacía, significa que faltan caracteres de cierre
    if (stack.length > 0) {
        const ultimo = stack[stack.length - 1];
        errorStack.pushError(`Unbalanced: Missing a '${cierran[abren.indexOf(ultimo.char)]}' at line ${ultimo.line}, column ${ultimo.column}.`, cierran[abren.indexOf(ultimo.char)], ultimo.column)
        return errorStack;
    }



    return errorStack;
}

window.alexico = alexico;
window.asintactico = asintactico;


















class ErrorStack {

    static errorTypes = [
        //Lexic Errors
        "Caracter no permitido.", //0
        "Nombre de identificador invalido.", //1
        "Constante de texto invalida.", //2
        "Constante numérica invalida." //3
        //Syntactic Errors
        //Semantic Errors
    ];

    constructor() {
        this.stack = [];
    }

    pushError(error, line, column){
        this.stack.push({
            error: error,
            line: line,
            column: column
        });
    }

    popError(){
        const error = this.stack.pop();
        return "Error: " + error.error + " Línea: " + error.line + " Columna: " + error.column;
    }

    popAllErrors(){
        let errors = "";
        while (this.stack.length > 0){

            const error = this.stack.pop();
            errors = error.error + "\n" +  errors;
            //console.log(ErrorStack.errorTypes[error.error])
        }
        console.log(errors)
        return errors
    }

    clearStack() {
        this.stack = [];
    }
}


class TokenTable {
    constructor() {
        this.id = 0; // Contador para asignar IDs únicos
        this.tabla = []; // Lista para almacenar las instancias de tokens
    }

    getTable(){
        return this.tabla;
    }

    // Método para agregar un token a la tabla
    addToken(type, token, value, line, column) {
        const tok = new Token(type, token, value, line, column); // Crear una instancia de Token
        this.tabla.push({
            id: ++this.id,
            token: tok,
        });
        //console.log(`Token agregado: ID=${this.id}, Token=${JSON.stringify(token)}`);
    }

    // Método para actualizar un token por ID
    updateToken(id, newType, newToken, newValue, newLine, newColumn) {
        const entry = this.tabla.find((t) => t.id === id);
        if (entry) {
            const token = entry.token;
            token.type = newType || token.type;
            token.token = newToken || token.token;
            token.value = newValue || token.value;
            token.line = newLine || token.line;
            token.column = newColumn || token.column;
            console.log(`Token actualizado: ${JSON.stringify(entry)}`);
        } else {
            console.log(`Token con ID ${id} no encontrado.`);
        }
    }

    // Método para leer un token por ID
    readToken(id) {
        const entry = this.tabla.find((t) => t.id === id);
        if (entry) {
            console.log(`Token encontrado: ${JSON.stringify(entry)}`);
            return entry;
        } else {
            console.log(`Token con ID ${id} no encontrado.`);
            return null;
        }
    }

    // Método para limpiar la tabla de símbolos
    clear() {
        this.tabla = [];
        this.id = 0;
        console.log("Tabla de símbolos limpiada.");
    }
}

class Token {
    constructor(type, token, value, line, column) {
        this.type = type || "";   // Tipo del token (por ejemplo, "Identificador", "Palabra Clave", etc.)
        this.token = token || ""; // Valor del token (el texto que representa)
        this.value = value || ""; // Valor del token (contenido)
        this.line = line || 0;    // Línea en la que aparece el token
        this.column = column || 0; // Columna en la que aparece el token
    }
}
