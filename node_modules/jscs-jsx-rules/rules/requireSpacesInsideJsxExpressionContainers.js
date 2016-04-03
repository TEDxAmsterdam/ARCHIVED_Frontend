var spacesInsideFactory = require( "./shared/spacesInsideJsxExpressionContainersFactory" );

module.exports = function RequireSpacesInsideJsxExpressionContainersRule() {};

module.exports.prototype = spacesInsideFactory( {
	name: "requireSpacesInsideJsxExpressionContainers",
	require: true
} );
