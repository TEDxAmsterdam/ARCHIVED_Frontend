describe( "disallowSpacesInsideJsxExpressionContainers", function() {
	var RuleFactory, rule, Checker, checker;

	before( function() {
		Checker = require( "jscs/lib/checker" );
		RuleFactory = require( "../../rules/disallowSpacesInsideJsxExpressionContainers" );
	} );

	beforeEach( function() {
		checker = new Checker();
		rule = new RuleFactory();

		checker.registerRule( rule );
		checker.configure( {
			esprima: "esprima-fb",
			disallowSpacesInsideJsxExpressionContainers: true
		} );
	} );

	describe( "configure", function() {

	} );

	describe( "getOptionName", function() {
		it( "should return the correct name", function() {
			rule.getOptionName().should.equal( "disallowSpacesInsideJsxExpressionContainers" );
		} );
	} );

	describe( "check", function() {
		var goodValue = "function render() { return <div>{this.props.name}</div>; }";

		describe( "opening curly brace", function() {
			var badValue = "function render() { return <div>{ this.props.name}</div>; }";

			it( "should report an error when there is no space", function() {
				checker.checkString( badValue ).getErrorCount().should.equal( 1 );
			} );

			it( "should remove a space when it is being fixed", function() {
				var result = checker.fixString( badValue );

				result.errors.isEmpty().should.be.true;
				result.output.should.equal( goodValue );
			} );
		} );

		describe( "closing curly brace", function() {
			var badValue = "function render() { return <div>{this.props.name }</div>; }";

			it( "should report an error when there is no space", function() {
				checker.checkString( badValue ).getErrorCount().should.equal( 1 );
			} );

			it( "should remove a space when it is being fixed", function() {
				var result = checker.fixString( badValue );

				result.errors.isEmpty().should.be.true;
				result.output.should.equal( goodValue );
			} );
		} );

		describe( "both braces", function() {
			var badValue = "function render() { return <div>{ this.props.name }</div>; }";

			it( "should report two errors when there are no spaces", function() {
				checker.checkString( badValue ).getErrorCount().should.equal( 2 );
			} );

			it( "should remove a space when it is being fixed", function() {
				var result = checker.fixString( badValue );

				result.errors.isEmpty().should.be.true;
				result.output.should.equal( goodValue );
			} );

			it( "should not report an error when there are proper spaces", function() {
				checker.checkString( goodValue).getErrorCount().should.equal( 0 );
			} );
		} );
	} );
} );
