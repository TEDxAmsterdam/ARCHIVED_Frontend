var spacesInsideFactory = require( "./shared/spacesInsideJsxExpressionContainersFactory" );

module.exports = function DisallowSpacesInsideJsxExpressionContainersRule() {};

module.exports.prototype = spacesInsideFactory( {
	name: "disallowSpacesInsideJsxExpressionContainers",
	require: false
} );
