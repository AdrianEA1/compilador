grammar MyLanguage;

program
    : (statement)+
    ;

statement
    : variableDeclaration 
    | printStatement 
    | ifStatement
    | forStatement
    | whileStatement
    ;

variableDeclaration
    : Identificador '=' expression
    ;

printStatement
    : 'echo' '(' (StringValue | Identificador | ConstanteNumerica) (. (StringValue | Identificador | ConstanteNumerica))? ')'
    ;

ifStatement
    : 'if' '(' expression ')' (singleStatement | blockStatement) ('else' (singleStatement | blockStatement))?
    ;

whileStatement
    : 'while' '(' expression ')' (singleStatement | blockStatement)
    ;

forStatement
    : 'foreach' '(' Identificador 'as' Identificador ')' (singleStatement | blockStatement)
    ;

singleStatement
    : statement // Una sola instrucción
    ;

blockStatement
    : '{' statement* '}' // Bloque de múltiples instrucciones
    ;

expression
    : primary
    | expression binaryOperator expression
    | Identificador unaryOperator
    ;


primary
    : Identificador
    | ConstanteNumerica
    | StringValue
    | '(' expression ')'
    ;

binaryOperator
    : '+' | '-' | '*' | '/' | '=' | '.=' | '.' | '%' | '==' | '!=' | '<' | '>' | '<=' | '>=' | '&&' | '||'
    ;

unaryOperator
    : '++' | '--' | '!'
    ;

Identificador
    : '$' [a-zA-Z_] [a-zA-Z_0-9]*
    ;

ConstanteNumerica
    : [0-9]+ ('.' [0-9]+)?
    ;

StringValue
    : '"' .*? '"'
    ;

LCURLY : '{';
RCURLY : '}';

WS
    : [ \t\r\n]+ -> skip
    ;