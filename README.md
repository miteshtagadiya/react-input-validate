# react-input-validate

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

|Input                       |Output    |        
|----------------------------|----------|
|delimiter([1, 2, 3], "and") |1, 2 and 3| 
|delimiter([1, 2, 3], "or")  |1, 2 or 3 |
|delimiter([1, 2], "or")     |1 or 2    |
|delimiter([1, 2], "and")    |1 and 2   |
|delimiter([1], "or")        |1         |
|delimiter([1], "and")       |1         |

## Parameters
```javascript
{
    value=Numbers ,
}
```