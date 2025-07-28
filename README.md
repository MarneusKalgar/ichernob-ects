# ECTS Grade Calculator

Convert numerical scores to ECTS grades.

## Installation
```bash
npm ects-ihor-chernobai
```

## Usage
```javascript
const ECTS = require('ects-ihor-chernobai');
const calculator = new ECTS(85);
console.log(calculator.ectsFromScore()); // 'B'
```