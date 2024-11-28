grammar MyLanguage;

program
    : (statement)+
    ;

statement
    : variableDeclaration 
    | printStatement
    | ifStatement
    | whileStatement
    | forStatement
    ;

variableDeclaration
    : Identificador '=' value
    ;

printStatement
    : 'echo' '(' (StringValue | Identificador | ConstanteNumerica) (. (StringValue | Identificador | ConstanteNumerica))? ')' 
    ;

ifStatement
    : 'if' '(' expression ')' (singleStatement | blockStatement) ('elseif' '(' expression ')' (singleStatement | blockStatement))? ('else' (singleStatement | blockStatement))?
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
    : valueDos
    ;

valueDos
    : ( '{' Identificador '}'| StringValue | ConstanteNumerica) (logicOperator ('{' Identificador '}'| StringValue | ConstanteNumerica))+
    ;

value
    : StringValue (valuePlus)*
    | ConstanteNumerica (valuePlus)*
    | Identificador (valuePlus)*
    | Identificador unaryOperator
    ;

valuePlus
    : (Add | Sub | Mul | Div | Mod) ('{' Identificador '}'| StringValue | ConstanteNumerica)
    ;

Add
    : '+'
    ;

Sub
    : '-'
    ;

Mul
    : '*'
    ;

Div
    : '/'
    ;

Mod
    : '%'
    ;

binaryOperator
    : '+' | '-' | '*' | '/' | '=' | '.=' | '.' | '%' | '==' | '!=' | '<' | '>' | '<=' | '>=' | '&&' | '||'
    ;

logicOperator
    : '==' | '!=' | '<' | '>' | '<=' | '>=' | '&&' | '||'
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
    : '"' ([a-zA-Z_0-9]*)? '"'
    ;

LCURLY : '{';
RCURLY : '}';

WS
    : [ \t\r\n]+ -> skip
    ;