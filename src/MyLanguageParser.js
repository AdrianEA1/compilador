// Generated from MyLanguage.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import MyLanguageListener from './MyLanguageListener.js';
const serializedATN = [4,1,33,166,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,1,0,4,0,34,8,0,11,0,12,0,35,1,1,1,1,1,1,1,
1,1,1,3,1,43,8,1,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,3,3,54,8,3,1,3,1,3,
1,4,1,4,1,4,1,4,1,4,1,4,3,4,64,8,4,1,4,1,4,1,4,3,4,69,8,4,3,4,71,8,4,1,5,
1,5,1,5,1,5,1,5,1,5,3,5,79,8,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,
6,1,6,3,6,93,8,6,1,7,1,7,1,8,1,8,5,8,99,8,8,10,8,12,8,102,9,8,1,8,1,8,1,
9,1,9,1,10,1,10,1,10,1,10,1,10,3,10,113,8,10,1,10,1,10,1,10,1,10,1,10,1,
10,3,10,121,8,10,4,10,123,8,10,11,10,12,10,124,1,11,1,11,5,11,129,8,11,10,
11,12,11,132,9,11,1,11,1,11,5,11,136,8,11,10,11,12,11,139,9,11,1,11,1,11,
5,11,143,8,11,10,11,12,11,146,9,11,1,11,1,11,3,11,150,8,11,1,12,1,12,1,12,
1,12,1,12,1,12,3,12,158,8,12,1,13,1,13,1,14,1,14,1,15,1,15,1,15,0,0,16,0,
2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,0,5,1,0,28,30,1,0,23,27,3,0,1,1,
10,19,23,27,1,0,12,19,1,0,20,22,174,0,33,1,0,0,0,2,42,1,0,0,0,4,44,1,0,0,
0,6,48,1,0,0,0,8,57,1,0,0,0,10,72,1,0,0,0,12,80,1,0,0,0,14,94,1,0,0,0,16,
96,1,0,0,0,18,105,1,0,0,0,20,112,1,0,0,0,22,149,1,0,0,0,24,151,1,0,0,0,26,
159,1,0,0,0,28,161,1,0,0,0,30,163,1,0,0,0,32,34,3,2,1,0,33,32,1,0,0,0,34,
35,1,0,0,0,35,33,1,0,0,0,35,36,1,0,0,0,36,1,1,0,0,0,37,43,3,4,2,0,38,43,
3,6,3,0,39,43,3,8,4,0,40,43,3,10,5,0,41,43,3,12,6,0,42,37,1,0,0,0,42,38,
1,0,0,0,42,39,1,0,0,0,42,40,1,0,0,0,42,41,1,0,0,0,43,3,1,0,0,0,44,45,5,28,
0,0,45,46,5,1,0,0,46,47,3,22,11,0,47,5,1,0,0,0,48,49,5,2,0,0,49,50,5,3,0,
0,50,53,7,0,0,0,51,52,9,0,0,0,52,54,7,0,0,0,53,51,1,0,0,0,53,54,1,0,0,0,
54,55,1,0,0,0,55,56,5,4,0,0,56,7,1,0,0,0,57,58,5,5,0,0,58,59,5,3,0,0,59,
60,3,18,9,0,60,63,5,4,0,0,61,64,3,14,7,0,62,64,3,16,8,0,63,61,1,0,0,0,63,
62,1,0,0,0,64,70,1,0,0,0,65,68,5,6,0,0,66,69,3,14,7,0,67,69,3,16,8,0,68,
66,1,0,0,0,68,67,1,0,0,0,69,71,1,0,0,0,70,65,1,0,0,0,70,71,1,0,0,0,71,9,
1,0,0,0,72,73,5,7,0,0,73,74,5,3,0,0,74,75,3,18,9,0,75,78,5,4,0,0,76,79,3,
14,7,0,77,79,3,16,8,0,78,76,1,0,0,0,78,77,1,0,0,0,79,11,1,0,0,0,80,81,5,
8,0,0,81,82,5,3,0,0,82,83,5,31,0,0,83,84,5,28,0,0,84,85,5,32,0,0,85,86,5,
9,0,0,86,87,5,31,0,0,87,88,5,28,0,0,88,89,5,32,0,0,89,92,5,4,0,0,90,93,3,
14,7,0,91,93,3,16,8,0,92,90,1,0,0,0,92,91,1,0,0,0,93,13,1,0,0,0,94,95,3,
2,1,0,95,15,1,0,0,0,96,100,5,31,0,0,97,99,3,2,1,0,98,97,1,0,0,0,99,102,1,
0,0,0,100,98,1,0,0,0,100,101,1,0,0,0,101,103,1,0,0,0,102,100,1,0,0,0,103,
104,5,32,0,0,104,17,1,0,0,0,105,106,3,20,10,0,106,19,1,0,0,0,107,108,5,31,
0,0,108,109,5,28,0,0,109,113,5,32,0,0,110,113,5,30,0,0,111,113,5,29,0,0,
112,107,1,0,0,0,112,110,1,0,0,0,112,111,1,0,0,0,113,122,1,0,0,0,114,120,
3,28,14,0,115,116,5,31,0,0,116,117,5,28,0,0,117,121,5,32,0,0,118,121,5,30,
0,0,119,121,5,29,0,0,120,115,1,0,0,0,120,118,1,0,0,0,120,119,1,0,0,0,121,
123,1,0,0,0,122,114,1,0,0,0,123,124,1,0,0,0,124,122,1,0,0,0,124,125,1,0,
0,0,125,21,1,0,0,0,126,130,5,30,0,0,127,129,3,24,12,0,128,127,1,0,0,0,129,
132,1,0,0,0,130,128,1,0,0,0,130,131,1,0,0,0,131,150,1,0,0,0,132,130,1,0,
0,0,133,137,5,29,0,0,134,136,3,24,12,0,135,134,1,0,0,0,136,139,1,0,0,0,137,
135,1,0,0,0,137,138,1,0,0,0,138,150,1,0,0,0,139,137,1,0,0,0,140,144,5,28,
0,0,141,143,3,24,12,0,142,141,1,0,0,0,143,146,1,0,0,0,144,142,1,0,0,0,144,
145,1,0,0,0,145,150,1,0,0,0,146,144,1,0,0,0,147,148,5,28,0,0,148,150,3,30,
15,0,149,126,1,0,0,0,149,133,1,0,0,0,149,140,1,0,0,0,149,147,1,0,0,0,150,
23,1,0,0,0,151,157,7,1,0,0,152,153,5,31,0,0,153,154,5,28,0,0,154,158,5,32,
0,0,155,158,5,30,0,0,156,158,5,29,0,0,157,152,1,0,0,0,157,155,1,0,0,0,157,
156,1,0,0,0,158,25,1,0,0,0,159,160,7,2,0,0,160,27,1,0,0,0,161,162,7,3,0,
0,162,29,1,0,0,0,163,164,7,4,0,0,164,31,1,0,0,0,17,35,42,53,63,68,70,78,
92,100,112,120,124,130,137,144,149,157];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MyLanguageParser extends antlr4.Parser {

    static grammarFileName = "MyLanguage.g4";
    static literalNames = [ null, "'='", "'echo'", "'('", "')'", "'if'", 
                            "'else'", "'while'", "'foreach'", "'as'", "'.='", 
                            "'.'", "'=='", "'!='", "'<'", "'>'", "'<='", 
                            "'>='", "'&&'", "'||'", "'++'", "'--'", "'!'", 
                            "'+'", "'-'", "'*'", "'/'", "'%'", null, null, 
                            null, "'{'", "'}'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, "Add", 
                             "Sub", "Mul", "Div", "Mod", "Identificador", 
                             "ConstanteNumerica", "StringValue", "LCURLY", 
                             "RCURLY", "WS" ];
    static ruleNames = [ "program", "statement", "variableDeclaration", 
                         "printStatement", "ifStatement", "whileStatement", 
                         "forStatement", "singleStatement", "blockStatement", 
                         "expression", "valueDos", "value", "valuePlus", 
                         "binaryOperator", "logicOperator", "unaryOperator" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MyLanguageParser.ruleNames;
        this.literalNames = MyLanguageParser.literalNames;
        this.symbolicNames = MyLanguageParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MyLanguageParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 32;
	            this.statement();
	            this.state = 35; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 268435876) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MyLanguageParser.RULE_statement);
	    try {
	        this.state = 42;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 28:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 37;
	            this.variableDeclaration();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 38;
	            this.printStatement();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 39;
	            this.ifStatement();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 40;
	            this.whileStatement();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 41;
	            this.forStatement();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variableDeclaration() {
	    let localctx = new VariableDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MyLanguageParser.RULE_variableDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.match(MyLanguageParser.Identificador);
	        this.state = 45;
	        this.match(MyLanguageParser.T__0);
	        this.state = 46;
	        this.value();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	printStatement() {
	    let localctx = new PrintStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MyLanguageParser.RULE_printStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this.match(MyLanguageParser.T__1);
	        this.state = 49;
	        this.match(MyLanguageParser.T__2);
	        this.state = 50;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1879048192) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 53;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        if(la_===1) {
	            this.state = 51;
	            this.matchWildcard();
	            this.state = 52;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1879048192) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }

	        }
	        this.state = 55;
	        this.match(MyLanguageParser.T__3);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifStatement() {
	    let localctx = new IfStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MyLanguageParser.RULE_ifStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this.match(MyLanguageParser.T__4);
	        this.state = 58;
	        this.match(MyLanguageParser.T__2);
	        this.state = 59;
	        this.expression();
	        this.state = 60;
	        this.match(MyLanguageParser.T__3);
	        this.state = 63;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	        case 5:
	        case 7:
	        case 8:
	        case 28:
	            this.state = 61;
	            this.singleStatement();
	            break;
	        case 31:
	            this.state = 62;
	            this.blockStatement();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 70;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        if(la_===1) {
	            this.state = 65;
	            this.match(MyLanguageParser.T__5);
	            this.state = 68;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 2:
	            case 5:
	            case 7:
	            case 8:
	            case 28:
	                this.state = 66;
	                this.singleStatement();
	                break;
	            case 31:
	                this.state = 67;
	                this.blockStatement();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	whileStatement() {
	    let localctx = new WhileStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, MyLanguageParser.RULE_whileStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        this.match(MyLanguageParser.T__6);
	        this.state = 73;
	        this.match(MyLanguageParser.T__2);
	        this.state = 74;
	        this.expression();
	        this.state = 75;
	        this.match(MyLanguageParser.T__3);
	        this.state = 78;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	        case 5:
	        case 7:
	        case 8:
	        case 28:
	            this.state = 76;
	            this.singleStatement();
	            break;
	        case 31:
	            this.state = 77;
	            this.blockStatement();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	forStatement() {
	    let localctx = new ForStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MyLanguageParser.RULE_forStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        this.match(MyLanguageParser.T__7);
	        this.state = 81;
	        this.match(MyLanguageParser.T__2);
	        this.state = 82;
	        this.match(MyLanguageParser.LCURLY);
	        this.state = 83;
	        this.match(MyLanguageParser.Identificador);
	        this.state = 84;
	        this.match(MyLanguageParser.RCURLY);
	        this.state = 85;
	        this.match(MyLanguageParser.T__8);
	        this.state = 86;
	        this.match(MyLanguageParser.LCURLY);
	        this.state = 87;
	        this.match(MyLanguageParser.Identificador);
	        this.state = 88;
	        this.match(MyLanguageParser.RCURLY);
	        this.state = 89;
	        this.match(MyLanguageParser.T__3);
	        this.state = 92;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	        case 5:
	        case 7:
	        case 8:
	        case 28:
	            this.state = 90;
	            this.singleStatement();
	            break;
	        case 31:
	            this.state = 91;
	            this.blockStatement();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	singleStatement() {
	    let localctx = new SingleStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, MyLanguageParser.RULE_singleStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 94;
	        this.statement();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	blockStatement() {
	    let localctx = new BlockStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, MyLanguageParser.RULE_blockStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 96;
	        this.match(MyLanguageParser.LCURLY);
	        this.state = 100;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 268435876) !== 0)) {
	            this.state = 97;
	            this.statement();
	            this.state = 102;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 103;
	        this.match(MyLanguageParser.RCURLY);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, MyLanguageParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 105;
	        this.valueDos();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valueDos() {
	    let localctx = new ValueDosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, MyLanguageParser.RULE_valueDos);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 112;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 31:
	            this.state = 107;
	            this.match(MyLanguageParser.LCURLY);
	            this.state = 108;
	            this.match(MyLanguageParser.Identificador);
	            this.state = 109;
	            this.match(MyLanguageParser.RCURLY);
	            break;
	        case 30:
	            this.state = 110;
	            this.match(MyLanguageParser.StringValue);
	            break;
	        case 29:
	            this.state = 111;
	            this.match(MyLanguageParser.ConstanteNumerica);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 122; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 114;
	            this.logicOperator();
	            this.state = 120;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 31:
	                this.state = 115;
	                this.match(MyLanguageParser.LCURLY);
	                this.state = 116;
	                this.match(MyLanguageParser.Identificador);
	                this.state = 117;
	                this.match(MyLanguageParser.RCURLY);
	                break;
	            case 30:
	                this.state = 118;
	                this.match(MyLanguageParser.StringValue);
	                break;
	            case 29:
	                this.state = 119;
	                this.match(MyLanguageParser.ConstanteNumerica);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 124; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1044480) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, MyLanguageParser.RULE_value);
	    var _la = 0;
	    try {
	        this.state = 149;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 126;
	            this.match(MyLanguageParser.StringValue);
	            this.state = 130;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 260046848) !== 0)) {
	                this.state = 127;
	                this.valuePlus();
	                this.state = 132;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 133;
	            this.match(MyLanguageParser.ConstanteNumerica);
	            this.state = 137;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 260046848) !== 0)) {
	                this.state = 134;
	                this.valuePlus();
	                this.state = 139;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 140;
	            this.match(MyLanguageParser.Identificador);
	            this.state = 144;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 260046848) !== 0)) {
	                this.state = 141;
	                this.valuePlus();
	                this.state = 146;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 147;
	            this.match(MyLanguageParser.Identificador);
	            this.state = 148;
	            this.unaryOperator();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valuePlus() {
	    let localctx = new ValuePlusContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, MyLanguageParser.RULE_valuePlus);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 151;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 260046848) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 157;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 31:
	            this.state = 152;
	            this.match(MyLanguageParser.LCURLY);
	            this.state = 153;
	            this.match(MyLanguageParser.Identificador);
	            this.state = 154;
	            this.match(MyLanguageParser.RCURLY);
	            break;
	        case 30:
	            this.state = 155;
	            this.match(MyLanguageParser.StringValue);
	            break;
	        case 29:
	            this.state = 156;
	            this.match(MyLanguageParser.ConstanteNumerica);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	binaryOperator() {
	    let localctx = new BinaryOperatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, MyLanguageParser.RULE_binaryOperator);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 159;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 261094402) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	logicOperator() {
	    let localctx = new LogicOperatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, MyLanguageParser.RULE_logicOperator);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 161;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1044480) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	unaryOperator() {
	    let localctx = new UnaryOperatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, MyLanguageParser.RULE_unaryOperator);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 163;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 7340032) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

MyLanguageParser.EOF = antlr4.Token.EOF;
MyLanguageParser.T__0 = 1;
MyLanguageParser.T__1 = 2;
MyLanguageParser.T__2 = 3;
MyLanguageParser.T__3 = 4;
MyLanguageParser.T__4 = 5;
MyLanguageParser.T__5 = 6;
MyLanguageParser.T__6 = 7;
MyLanguageParser.T__7 = 8;
MyLanguageParser.T__8 = 9;
MyLanguageParser.T__9 = 10;
MyLanguageParser.T__10 = 11;
MyLanguageParser.T__11 = 12;
MyLanguageParser.T__12 = 13;
MyLanguageParser.T__13 = 14;
MyLanguageParser.T__14 = 15;
MyLanguageParser.T__15 = 16;
MyLanguageParser.T__16 = 17;
MyLanguageParser.T__17 = 18;
MyLanguageParser.T__18 = 19;
MyLanguageParser.T__19 = 20;
MyLanguageParser.T__20 = 21;
MyLanguageParser.T__21 = 22;
MyLanguageParser.Add = 23;
MyLanguageParser.Sub = 24;
MyLanguageParser.Mul = 25;
MyLanguageParser.Div = 26;
MyLanguageParser.Mod = 27;
MyLanguageParser.Identificador = 28;
MyLanguageParser.ConstanteNumerica = 29;
MyLanguageParser.StringValue = 30;
MyLanguageParser.LCURLY = 31;
MyLanguageParser.RCURLY = 32;
MyLanguageParser.WS = 33;

MyLanguageParser.RULE_program = 0;
MyLanguageParser.RULE_statement = 1;
MyLanguageParser.RULE_variableDeclaration = 2;
MyLanguageParser.RULE_printStatement = 3;
MyLanguageParser.RULE_ifStatement = 4;
MyLanguageParser.RULE_whileStatement = 5;
MyLanguageParser.RULE_forStatement = 6;
MyLanguageParser.RULE_singleStatement = 7;
MyLanguageParser.RULE_blockStatement = 8;
MyLanguageParser.RULE_expression = 9;
MyLanguageParser.RULE_valueDos = 10;
MyLanguageParser.RULE_value = 11;
MyLanguageParser.RULE_valuePlus = 12;
MyLanguageParser.RULE_binaryOperator = 13;
MyLanguageParser.RULE_logicOperator = 14;
MyLanguageParser.RULE_unaryOperator = 15;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyLanguageParser.RULE_program;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.exitProgram(this);
		}
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyLanguageParser.RULE_statement;
    }

	variableDeclaration() {
	    return this.getTypedRuleContext(VariableDeclarationContext,0);
	};

	printStatement() {
	    return this.getTypedRuleContext(PrintStatementContext,0);
	};

	ifStatement() {
	    return this.getTypedRuleContext(IfStatementContext,0);
	};

	whileStatement() {
	    return this.getTypedRuleContext(WhileStatementContext,0);
	};

	forStatement() {
	    return this.getTypedRuleContext(ForStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.exitStatement(this);
		}
	}


}



class VariableDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyLanguageParser.RULE_variableDeclaration;
    }

	Identificador() {
	    return this.getToken(MyLanguageParser.Identificador, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.enterVariableDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.exitVariableDeclaration(this);
		}
	}


}



class PrintStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyLanguageParser.RULE_printStatement;
    }

	StringValue = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MyLanguageParser.StringValue);
	    } else {
	        return this.getToken(MyLanguageParser.StringValue, i);
	    }
	};


	Identificador = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MyLanguageParser.Identificador);
	    } else {
	        return this.getToken(MyLanguageParser.Identificador, i);
	    }
	};


	ConstanteNumerica = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MyLanguageParser.ConstanteNumerica);
	    } else {
	        return this.getToken(MyLanguageParser.ConstanteNumerica, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.enterPrintStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.exitPrintStatement(this);
		}
	}


}



class IfStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyLanguageParser.RULE_ifStatement;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	singleStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SingleStatementContext);
	    } else {
	        return this.getTypedRuleContext(SingleStatementContext,i);
	    }
	};

	blockStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BlockStatementContext);
	    } else {
	        return this.getTypedRuleContext(BlockStatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.enterIfStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.exitIfStatement(this);
		}
	}


}



class WhileStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyLanguageParser.RULE_whileStatement;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	singleStatement() {
	    return this.getTypedRuleContext(SingleStatementContext,0);
	};

	blockStatement() {
	    return this.getTypedRuleContext(BlockStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.enterWhileStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.exitWhileStatement(this);
		}
	}


}



class ForStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyLanguageParser.RULE_forStatement;
    }

	LCURLY = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MyLanguageParser.LCURLY);
	    } else {
	        return this.getToken(MyLanguageParser.LCURLY, i);
	    }
	};


	Identificador = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MyLanguageParser.Identificador);
	    } else {
	        return this.getToken(MyLanguageParser.Identificador, i);
	    }
	};


	RCURLY = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MyLanguageParser.RCURLY);
	    } else {
	        return this.getToken(MyLanguageParser.RCURLY, i);
	    }
	};


	singleStatement() {
	    return this.getTypedRuleContext(SingleStatementContext,0);
	};

	blockStatement() {
	    return this.getTypedRuleContext(BlockStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.enterForStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.exitForStatement(this);
		}
	}


}



class SingleStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyLanguageParser.RULE_singleStatement;
    }

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.enterSingleStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.exitSingleStatement(this);
		}
	}


}



class BlockStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyLanguageParser.RULE_blockStatement;
    }

	LCURLY() {
	    return this.getToken(MyLanguageParser.LCURLY, 0);
	};

	RCURLY() {
	    return this.getToken(MyLanguageParser.RCURLY, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.enterBlockStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.exitBlockStatement(this);
		}
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyLanguageParser.RULE_expression;
    }

	valueDos() {
	    return this.getTypedRuleContext(ValueDosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.exitExpression(this);
		}
	}


}



class ValueDosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyLanguageParser.RULE_valueDos;
    }

	LCURLY = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MyLanguageParser.LCURLY);
	    } else {
	        return this.getToken(MyLanguageParser.LCURLY, i);
	    }
	};


	Identificador = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MyLanguageParser.Identificador);
	    } else {
	        return this.getToken(MyLanguageParser.Identificador, i);
	    }
	};


	RCURLY = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MyLanguageParser.RCURLY);
	    } else {
	        return this.getToken(MyLanguageParser.RCURLY, i);
	    }
	};


	StringValue = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MyLanguageParser.StringValue);
	    } else {
	        return this.getToken(MyLanguageParser.StringValue, i);
	    }
	};


	ConstanteNumerica = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MyLanguageParser.ConstanteNumerica);
	    } else {
	        return this.getToken(MyLanguageParser.ConstanteNumerica, i);
	    }
	};


	logicOperator = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LogicOperatorContext);
	    } else {
	        return this.getTypedRuleContext(LogicOperatorContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.enterValueDos(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.exitValueDos(this);
		}
	}


}



class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyLanguageParser.RULE_value;
    }

	StringValue() {
	    return this.getToken(MyLanguageParser.StringValue, 0);
	};

	valuePlus = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValuePlusContext);
	    } else {
	        return this.getTypedRuleContext(ValuePlusContext,i);
	    }
	};

	ConstanteNumerica() {
	    return this.getToken(MyLanguageParser.ConstanteNumerica, 0);
	};

	Identificador() {
	    return this.getToken(MyLanguageParser.Identificador, 0);
	};

	unaryOperator() {
	    return this.getTypedRuleContext(UnaryOperatorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.exitValue(this);
		}
	}


}



class ValuePlusContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyLanguageParser.RULE_valuePlus;
    }

	Add() {
	    return this.getToken(MyLanguageParser.Add, 0);
	};

	Sub() {
	    return this.getToken(MyLanguageParser.Sub, 0);
	};

	Mul() {
	    return this.getToken(MyLanguageParser.Mul, 0);
	};

	Div() {
	    return this.getToken(MyLanguageParser.Div, 0);
	};

	Mod() {
	    return this.getToken(MyLanguageParser.Mod, 0);
	};

	LCURLY() {
	    return this.getToken(MyLanguageParser.LCURLY, 0);
	};

	Identificador() {
	    return this.getToken(MyLanguageParser.Identificador, 0);
	};

	RCURLY() {
	    return this.getToken(MyLanguageParser.RCURLY, 0);
	};

	StringValue() {
	    return this.getToken(MyLanguageParser.StringValue, 0);
	};

	ConstanteNumerica() {
	    return this.getToken(MyLanguageParser.ConstanteNumerica, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.enterValuePlus(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.exitValuePlus(this);
		}
	}


}



class BinaryOperatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyLanguageParser.RULE_binaryOperator;
    }

	Add() {
	    return this.getToken(MyLanguageParser.Add, 0);
	};

	Sub() {
	    return this.getToken(MyLanguageParser.Sub, 0);
	};

	Mul() {
	    return this.getToken(MyLanguageParser.Mul, 0);
	};

	Div() {
	    return this.getToken(MyLanguageParser.Div, 0);
	};

	Mod() {
	    return this.getToken(MyLanguageParser.Mod, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.enterBinaryOperator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.exitBinaryOperator(this);
		}
	}


}



class LogicOperatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyLanguageParser.RULE_logicOperator;
    }


	enterRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.enterLogicOperator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.exitLogicOperator(this);
		}
	}


}



class UnaryOperatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyLanguageParser.RULE_unaryOperator;
    }


	enterRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.enterUnaryOperator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.exitUnaryOperator(this);
		}
	}


}




MyLanguageParser.ProgramContext = ProgramContext; 
MyLanguageParser.StatementContext = StatementContext; 
MyLanguageParser.VariableDeclarationContext = VariableDeclarationContext; 
MyLanguageParser.PrintStatementContext = PrintStatementContext; 
MyLanguageParser.IfStatementContext = IfStatementContext; 
MyLanguageParser.WhileStatementContext = WhileStatementContext; 
MyLanguageParser.ForStatementContext = ForStatementContext; 
MyLanguageParser.SingleStatementContext = SingleStatementContext; 
MyLanguageParser.BlockStatementContext = BlockStatementContext; 
MyLanguageParser.ExpressionContext = ExpressionContext; 
MyLanguageParser.ValueDosContext = ValueDosContext; 
MyLanguageParser.ValueContext = ValueContext; 
MyLanguageParser.ValuePlusContext = ValuePlusContext; 
MyLanguageParser.BinaryOperatorContext = BinaryOperatorContext; 
MyLanguageParser.LogicOperatorContext = LogicOperatorContext; 
MyLanguageParser.UnaryOperatorContext = UnaryOperatorContext; 
export {MyLanguageParser}