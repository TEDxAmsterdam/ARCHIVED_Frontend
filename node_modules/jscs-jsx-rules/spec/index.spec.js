describe( "index", function() {
	it( "should register the rules", function() {
		var plugin = require( "../index" );
		var stub = sinon.stub();

		plugin( {
			registerRule: stub
		} );

		stub.firstCall.args[ 0 ].name.should.equal( "DisallowSpacesInsideJsxExpressionContainersRule" );
		stub.lastCall.args[ 0 ].name.should.equal( "RequireSpacesInsideJsxExpressionContainersRule" );
	} );
} );
