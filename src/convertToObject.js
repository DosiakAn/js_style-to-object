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

  const styles = resSourceString.reduce((acc, currentValue, index, item) => {
    if (index % 2 === 0) {
      acc._key = currentValue;
    } else {
      acc[acc._key] = currentValue;
    }

    return acc;
  }, {});

  return styles;
}

module.exports = convertToObject;
