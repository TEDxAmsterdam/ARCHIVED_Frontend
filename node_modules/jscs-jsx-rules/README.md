# JSX rules for JSCS

## What Is It

Currently, this plugin provides a single rule to help enforce spacing inside of JSX expression containers.

## Usage

To enable this plugin, your JSCS configuration would need to include:

```json
{
  "plugins": [ "jscs-jsx-rules" ]
}
```

## Rules

### disallowSpacesInsideJsxExpressionContainers

Disallows spaces after the opening curly brace and before the closing curly brace of a JSX expression container.

Type: `Boolean`

Value: `true`

**Example**

```json
"disallowSpacesInsideJsxExpressionContainers": true
```

**Valid**

```js
function render() {
	return <div>{this.props.name}</div>;
}
```

**Invalid**

```js
function render() {
	return <div>{ this.props.name }</div>;
}
```

### requireSpacesInsideJsxExpressionContainers

Requires that there are spaces after the opening curly brace and before the closing curly brace of a JSX expression container.

Type: `Boolean`

Value: `true`

**Example**

```json
"requireSpacesInsideJsxExpressionContainers": true
```

**Valid**

```js
function render() {
	return <div>{ this.props.name }</div>;
}
```

**Invalid**

```js
function render() {
	return <div>{this.props.name}</div>;
}
```

## License

MIT (<http://www.opensource.org/licenses/mit-license.php>)
