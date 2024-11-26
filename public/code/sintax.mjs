import antlr4 from 'antlr4';
import { MyLanguageLexer } from './MyLanguageLexer.mjs';
import { MyLanguageParser } from './MyLanguageParser.mjs';

class MyErrorListener extends antlr4.error.ErrorListener {
    constructor() {
        super();
        this.errors = []; // Variable para almacenar los errores
    }

    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        // Guardamos el error en un formato personalizado
        this.errors.push(`Line ${line}:${column} - ${msg}`);
    }

    getErrors() {
        return this.errors; // Método para obtener los errores
    }
}

// Input del programa
const input = `
$true = "verdadero"
$b = 0
if ( $true ) {
  foreach ( $x as $po ) {
     echo ( $po )
  }
}
else {
  while ( $b < 10 ) {
     echo ( $b )
     $b = $b + 1
  }
}
`;

// Crear lexer y parser
const chars = new antlr4.InputStream(input);
const lexer = new MyLanguageLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new MyLanguageParser(tokens);

// Configurar el error listener personalizado
const errorListener = new MyErrorListener();
parser.removeErrorListeners(); // Remover los listeners predeterminados
parser.addErrorListener(errorListener); // Agregar el listener personalizado

// Parsear la entrada
const tree = parser.program();

// Imprimir los errores almacenados
const errors = errorListener.getErrors();
console.log("Errores:", errors);

// Imprimir el árbol sintáctico
console.log("Árbol:", tree.toStringTree(parser.ruleNames));
