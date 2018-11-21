# react-input-validate

[![npm](https://img.shields.io/npm/v/react-input-validate.svg)](https://www.npmjs.com/package/react-input-validate) 
[![npm](https://img.shields.io/npm/dm/react-input-validate.svg)](https://www.npmjs.com/package/react-input-validate) 
[![npm](https://img.shields.io/npm/dw/react-input-validate.svg)](https://www.npmjs.com/package/react-input-validate)
![npm](https://img.shields.io/npm/l/react-input-validate.svg)


Input validation for null, undefined, Infinity and NaN values


## Demo
[Click Here](https://miteshtagadiya.github.io/react-input-validate/)

## Installation

1.  Install React Input Validate as a dependency

```bash
# NPM
$ npm install react-input-validate
```

2.  Import the `react-input-validate` module

```javascript
// ES6
import { validate } from "react-input-validate";
```


## Example
```jsx
import { validate } from 'react-delimiter';

render() {
    <h4>{validate(Value)}</h4>
  }

```

|Input               |Output|        
|--------------------|------|
|validate(123)       |123   | 
|validate(undefined) |N/A   |
|validate(null)      |N/A   |
|validate(Infinity)  |-     |
|validate(NaN)       |N/A   |

## Parameters
```javascript
{
    value=Numbers or Strings
}
```
