// Generated from MyLanguage.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import MyLanguageListener from './MyLanguageListener.js';
const serializedATN = [4,1,33,124,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
1,0,4,0,28,8,0,11,0,12,0,29,1,1,1,1,1,1,1,1,1,1,3,1,37,8,1,1,2,1,2,1,2,1,
2,1,3,1,3,1,3,1,3,1,3,3,3,48,8,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,3,4,58,
8,4,1,4,1,4,1,4,3,4,63,8,4,3,4,65,8,4,1,5,1,5,1,5,1,5,1,5,1,5,3,5,73,8,5,
1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,83,8,6,1,7,1,7,1,8,1,8,5,8,89,8,8,10,
8,12,8,92,9,8,1,8,1,8,1,9,1,9,1,9,1,9,3,9,100,8,9,1,9,1,9,1,9,1,9,5,9,106,
8,9,10,9,12,9,109,9,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,3,10,118,8,10,1,
11,1,11,1,12,1,12,1,12,0,1,18,13,0,2,4,6,8,10,12,14,16,18,20,22,24,0,3,1,
0,28,30,2,0,1,1,10,24,1,0,25,27,127,0,27,1,0,0,0,2,36,1,0,0,0,4,38,1,0,0,
0,6,42,1,0,0,0,8,51,1,0,0,0,10,66,1,0,0,0,12,74,1,0,0,0,14,84,1,0,0,0,16,
86,1,0,0,0,18,99,1,0,0,0,20,117,1,0,0,0,22,119,1,0,0,0,24,121,1,0,0,0,26,
28,3,2,1,0,27,26,1,0,0,0,28,29,1,0,0,0,29,27,1,0,0,0,29,30,1,0,0,0,30,1,
1,0,0,0,31,37,3,4,2,0,32,37,3,6,3,0,33,37,3,8,4,0,34,37,3,12,6,0,35,37,3,
10,5,0,36,31,1,0,0,0,36,32,1,0,0,0,36,33,1,0,0,0,36,34,1,0,0,0,36,35,1,0,
0,0,37,3,1,0,0,0,38,39,5,28,0,0,39,40,5,1,0,0,40,41,3,18,9,0,41,5,1,0,0,
0,42,43,5,2,0,0,43,44,5,3,0,0,44,47,7,0,0,0,45,46,9,0,0,0,46,48,7,0,0,0,
47,45,1,0,0,0,47,48,1,0,0,0,48,49,1,0,0,0,49,50,5,4,0,0,50,7,1,0,0,0,51,
52,5,5,0,0,52,53,5,3,0,0,53,54,3,18,9,0,54,57,5,4,0,0,55,58,3,14,7,0,56,
58,3,16,8,0,57,55,1,0,0,0,57,56,1,0,0,0,58,64,1,0,0,0,59,62,5,6,0,0,60,63,
3,14,7,0,61,63,3,16,8,0,62,60,1,0,0,0,62,61,1,0,0,0,63,65,1,0,0,0,64,59,
1,0,0,0,64,65,1,0,0,0,65,9,1,0,0,0,66,67,5,7,0,0,67,68,5,3,0,0,68,69,3,18,
9,0,69,72,5,4,0,0,70,73,3,14,7,0,71,73,3,16,8,0,72,70,1,0,0,0,72,71,1,0,
0,0,73,11,1,0,0,0,74,75,5,8,0,0,75,76,5,3,0,0,76,77,5,28,0,0,77,78,5,9,0,
0,78,79,5,28,0,0,79,82,5,4,0,0,80,83,3,14,7,0,81,83,3,16,8,0,82,80,1,0,0,
0,82,81,1,0,0,0,83,13,1,0,0,0,84,85,3,2,1,0,85,15,1,0,0,0,86,90,5,31,0,0,
87,89,3,2,1,0,88,87,1,0,0,0,89,92,1,0,0,0,90,88,1,0,0,0,90,91,1,0,0,0,91,
93,1,0,0,0,92,90,1,0,0,0,93,94,5,32,0,0,94,17,1,0,0,0,95,96,6,9,-1,0,96,
100,3,20,10,0,97,98,5,28,0,0,98,100,3,24,12,0,99,95,1,0,0,0,99,97,1,0,0,
0,100,107,1,0,0,0,101,102,10,2,0,0,102,103,3,22,11,0,103,104,3,18,9,3,104,
106,1,0,0,0,105,101,1,0,0,0,106,109,1,0,0,0,107,105,1,0,0,0,107,108,1,0,
0,0,108,19,1,0,0,0,109,107,1,0,0,0,110,118,5,28,0,0,111,118,5,29,0,0,112,
118,5,30,0,0,113,114,5,3,0,0,114,115,3,18,9,0,115,116,5,4,0,0,116,118,1,
0,0,0,117,110,1,0,0,0,117,111,1,0,0,0,117,112,1,0,0,0,117,113,1,0,0,0,118,
21,1,0,0,0,119,120,7,1,0,0,120,23,1,0,0,0,121,122,7,2,0,0,122,25,1,0,0,0,
12,29,36,47,57,62,64,72,82,90,99,107,117];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MyLanguageParser extends antlr4.Parser {

    static grammarFileName = "MyLanguage.g4";
    static literalNames = [ null, "'='", "'echo'", "'('", "')'", "'if'", 
                            "'else'", "'while'", "'foreach'", "'as'", "'+'", 
                            "'-'", "'*'", "'/'", "'.='", "'.'", "'%'", "'=='", 
                            "'!='", "'<'", "'>'", "'<='", "'>='", "'&&'", 
                            "'||'", "'++'", "'--'", "'!'", null, null, null, 
                            "'{'", "'}'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, "Identificador", "ConstanteNumerica", 
                             "StringValue", "LCURLY", "RCURLY", "WS" ];
    static ruleNames = [ "program", "statement", "variableDeclaration", 
                         "printStatement", "ifStatement", "whileStatement", 
                         "forStatement", "singleStatement", "blockStatement", 
                         "expression", "primary", "binaryOperator", "unaryOperator" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MyLanguageParser.ruleNames;
        this.literalNames = MyLanguageParser.literalNames;
        this.symbolicNames = MyLanguageParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 9:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MyLanguageParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 26;
	            this.statement();
	            this.state = 29; 
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
	        this.state = 36;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 28:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 31;
	            this.variableDeclaration();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 32;
	            this.printStatement();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 33;
	            this.ifStatement();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 34;
	            this.forStatement();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 35;
	            this.whileStatement();
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
	        this.state = 38;
	        this.match(MyLanguageParser.Identificador);
	        this.state = 39;
	        this.match(MyLanguageParser.T__0);
	        this.state = 40;
	        this.expression(0);
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
	        this.state = 42;
	        this.match(MyLanguageParser.T__1);
	        this.state = 43;
	        this.match(MyLanguageParser.T__2);
	        this.state = 44;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1879048192) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 47;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        if(la_===1) {
	            this.state = 45;
	            this.matchWildcard();
	            this.state = 46;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1879048192) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }

	        }
	        this.state = 49;
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
	        this.state = 51;
	        this.match(MyLanguageParser.T__4);
	        this.state = 52;
	        this.match(MyLanguageParser.T__2);
	        this.state = 53;
	        this.expression(0);
	        this.state = 54;
	        this.match(MyLanguageParser.T__3);
	        this.state = 57;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	        case 5:
	        case 7:
	        case 8:
	        case 28:
	            this.state = 55;
	            this.singleStatement();
	            break;
	        case 31:
	            this.state = 56;
	            this.blockStatement();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 64;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        if(la_===1) {
	            this.state = 59;
	            this.match(MyLanguageParser.T__5);
	            this.state = 62;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 2:
	            case 5:
	            case 7:
	            case 8:
	            case 28:
	                this.state = 60;
	                this.singleStatement();
	                break;
	            case 31:
	                this.state = 61;
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
	        this.state = 66;
	        this.match(MyLanguageParser.T__6);
	        this.state = 67;
	        this.match(MyLanguageParser.T__2);
	        this.state = 68;
	        this.expression(0);
	        this.state = 69;
	        this.match(MyLanguageParser.T__3);
	        this.state = 72;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	        case 5:
	        case 7:
	        case 8:
	        case 28:
	            this.state = 70;
	            this.singleStatement();
	            break;
	        case 31:
	            this.state = 71;
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
	        this.state = 74;
	        this.match(MyLanguageParser.T__7);
	        this.state = 75;
	        this.match(MyLanguageParser.T__2);
	        this.state = 76;
	        this.match(MyLanguageParser.Identificador);
	        this.state = 77;
	        this.match(MyLanguageParser.T__8);
	        this.state = 78;
	        this.match(MyLanguageParser.Identificador);
	        this.state = 79;
	        this.match(MyLanguageParser.T__3);
	        this.state = 82;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	        case 5:
	        case 7:
	        case 8:
	        case 28:
	            this.state = 80;
	            this.singleStatement();
	            break;
	        case 31:
	            this.state = 81;
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
	        this.state = 84;
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
	        this.state = 86;
	        this.match(MyLanguageParser.LCURLY);
	        this.state = 90;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 268435876) !== 0)) {
	            this.state = 87;
	            this.statement();
	            this.state = 92;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 93;
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


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 18;
	    this.enterRecursionRule(localctx, 18, MyLanguageParser.RULE_expression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 99;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 96;
	            this.primary();
	            break;

	        case 2:
	            this.state = 97;
	            this.match(MyLanguageParser.Identificador);
	            this.state = 98;
	            this.unaryOperator();
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 107;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new ExpressionContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, MyLanguageParser.RULE_expression);
	                this.state = 101;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 102;
	                this.binaryOperator();
	                this.state = 103;
	                this.expression(3); 
	            }
	            this.state = 109;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	primary() {
	    let localctx = new PrimaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, MyLanguageParser.RULE_primary);
	    try {
	        this.state = 117;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 28:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 110;
	            this.match(MyLanguageParser.Identificador);
	            break;
	        case 29:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 111;
	            this.match(MyLanguageParser.ConstanteNumerica);
	            break;
	        case 30:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 112;
	            this.match(MyLanguageParser.StringValue);
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 113;
	            this.match(MyLanguageParser.T__2);
	            this.state = 114;
	            this.expression(0);
	            this.state = 115;
	            this.match(MyLanguageParser.T__3);
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
	    this.enterRule(localctx, 22, MyLanguageParser.RULE_binaryOperator);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 119;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 33553410) !== 0))) {
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
	    this.enterRule(localctx, 24, MyLanguageParser.RULE_unaryOperator);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 121;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 234881024) !== 0))) {
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
MyLanguageParser.T__22 = 23;
MyLanguageParser.T__23 = 24;
MyLanguageParser.T__24 = 25;
MyLanguageParser.T__25 = 26;
MyLanguageParser.T__26 = 27;
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
MyLanguageParser.RULE_primary = 10;
MyLanguageParser.RULE_binaryOperator = 11;
MyLanguageParser.RULE_unaryOperator = 12;

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

	forStatement() {
	    return this.getTypedRuleContext(ForStatementContext,0);
	};

	whileStatement() {
	    return this.getTypedRuleContext(WhileStatementContext,0);
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

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
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

	primary() {
	    return this.getTypedRuleContext(PrimaryContext,0);
	};

	Identificador() {
	    return this.getToken(MyLanguageParser.Identificador, 0);
	};

	unaryOperator() {
	    return this.getTypedRuleContext(UnaryOperatorContext,0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	binaryOperator() {
	    return this.getTypedRuleContext(BinaryOperatorContext,0);
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



class PrimaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyLanguageParser.RULE_primary;
    }

	Identificador() {
	    return this.getToken(MyLanguageParser.Identificador, 0);
	};

	ConstanteNumerica() {
	    return this.getToken(MyLanguageParser.ConstanteNumerica, 0);
	};

	StringValue() {
	    return this.getToken(MyLanguageParser.StringValue, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.enterPrimary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyLanguageListener ) {
	        listener.exitPrimary(this);
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
MyLanguageParser.PrimaryContext = PrimaryContext; 
MyLanguageParser.BinaryOperatorContext = BinaryOperatorContext; 
MyLanguageParser.UnaryOperatorContext = UnaryOperatorContext; 
