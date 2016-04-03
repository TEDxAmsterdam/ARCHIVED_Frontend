var assert = require( "assert" );

module.exports = function( config ) {
	var assertion = config.require ? "whitespaceBetween" : "noWhitespaceBetween";
	var message = config.require ? "A space is required" : "No space is allowed";

	return {
		configure: function( options ) {
			assert( options === true, this.getOptionName() + " option requires a true value or should be removed" );
		},

		getOptionName: function() {
			return config.name;
		},

		check: function( file, errors ) {
			file.iterateNodesByType( "JSXExpressionContainer", function( node ) {
				var openingBracket = file.getFirstNodeToken( node );
				var nextToken = file.getNextToken( openingBracket );

				errors.assert[ assertion ]( {
					token: openingBracket,
					nextToken: nextToken,
					message: message + " after the opening curly brace to a JSX expression"
				} );

				var closingBracket = file.getLastNodeToken( node );
				var prevToken = file.getPrevToken( closingBracket );

				errors.assert[ assertion ]( {
					token: prevToken,
					nextToken: closingBracket,
					message: message + " before the closing curly brace to a JSX expression"
				} );
			} );
		}
	};
};
