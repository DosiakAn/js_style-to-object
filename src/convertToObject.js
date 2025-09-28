'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newSourceString = sourceString.split('\n');
  const resSourceString = [];

  for (let i = 0; i < newSourceString.length; i++) {
    const [key, value] = newSourceString[i].split(':');

    resSourceString.push(key);
    resSourceString.push(value);
  }

  const styles = resSourceString.reduce((accum, currentValue, index, item) => {
    if (index % 2 === 0) {
      accum._key = currentValue;
    } else {
      accum[accum._key] = currentValue;
    }

    return accum;
  }, {});

  return styles;
}

module.exports = convertToObject;
