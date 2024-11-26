//analyzeInput.mjs
import antlr4 from 'antlr4';
import { MyLanguageLexer } from './MyLanguageLexer.mjs';
import { MyLanguageParser } from './MyLanguageParser.mjs';

class MyErrorListener extends antlr4.error.ErrorListener {
    constructor() {
        super();
        this.errors = [];
    }

    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        this.errors.push(`Line ${line}:${column} - ${msg}`);    
    }

    getErrors() {
        return this.errors;
    }
}

export function inputAnl(input) {
    const chars = new antlr4.InputStream(input);
    const lexer = new MyLanguageLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new MyLanguageParser(tokens);

    const errorListener = new MyErrorListener();
    lexer.removeErrorListeners();
    lexer.addErrorListener(errorListener);
    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);

    parser.program();

    return errorListener.getErrors();
}

