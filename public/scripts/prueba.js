class Parsersd {
    constructor() {
        this.tokens = tokens; //Lista de tokens generados por un lexer
        this.currentTokenIndex = 0;
    }

    get currentToken() {
        return this.tokens[this.currentTokenIndex];
    }

    nextToken() {
        this.currentTokenIndex++;
    }

    match(expectedType) {
        if (this.currentToken && this.currentToken.type === expectedType) {
            const token = this.currentToken;
            this.nextToken();
            return token;
        } else {
            throw new Error(`Unexpected token: expected ${expectedType}, got ${this.currentToken?.type}`);
        }
    }

    parseDeclaracion() {
        const node = { type: "Declaracion", children: [] };
        
        if (this.currentToken?.type === "Identificador") {
            node.children.push(this.match("Identificador"));
            this.match("Igual"); // Token "="
            
            if (this.currentToken?.type === "Constante de texto") {
                node.children.push(this.match("Constante de texto"));
            } else if (this.currentToken?.type === "Constante numérica") {
                node.children.push(this.match("Constante numérica"));
            } 
            // else {
                // throw new Error("Declaración de sintaxis invalida");
            // }
        } 
         else {
            throw new Error("Invalid Declaracion syntax");
        }

        return node;
    }

    parseExpresion() {
        const node = { type: "Expresion", children: [] };

        if (this.currentToken?.type === "Identificador") {
            node.children.push(this.match("Identificador"));
            
            if (this.currentToken?.type === "OPERADOR") {
                node.children.push(this.match("OPERADOR"));
                node.children.push(this.parseTermino());
            }
        } else {
            node.children.push(this.parseTermino());
        }

        return node;
    }

    parseTermino() {
        const node = { type: "Termino", children: [] };

        if (this.currentToken?.type === "LPAREN") { // Token "("
            this.match("LPAREN");
            node.children.push(this.parseExpresion());
            this.match("RPAREN"); // Token ")"
        } else if (this.currentToken?.type === "ID") {
            node.children.push(this.match("ID"));
        } else if (this.currentToken?.type === "CONST_TYPE") {
            node.children.push(this.match("CONST_TYPE"));
        } else if (this.currentToken?.type === "CONST_NUM") {
            node.children.push(this.match("CONST_NUM"));
        } else if (this.currentToken?.type === "EPSILON") {
            node.children.push(this.match("EPSILON")); // Caso epsilon
        } else {
            throw new Error("Invalid Termino syntax");
        }

        return node;
    }

    parseSentencia() {
        const node = { type: "Sentencia", children: [] };

        if (this.currentToken?.type === "IF") {
            node.children.push(this.match("IF"));
            this.match("LPAREN");
            node.children.push(this.parseExpresion());
            this.match("RPAREN");
            node.children.push(this.parseSentencia());
        } 
        // Continúa con las demás producciones de Sentencia

        return node;
    }

    parse() {
        return this.parseSentencia(); // Comenzamos desde la regla inicial
    }
}
