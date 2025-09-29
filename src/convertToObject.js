'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newSourceString = sourceString.split(';');
  const resSourceString = [];

  for (let i = 0; i < newSourceString.length; i++) {
    const [key, value] = newSourceString[i].split(':');

    if (key.trim() && value) {
      resSourceString.push({ [key.trim()]: value.trim() });
    }
  }

  const styles = resSourceString.reduce((accum, currentValue) => {
    const [key, value] = Object.entries(currentValue)[0];

    accum[key] = value;

    return accum;
  }, {});

  return styles;
}

module.exports = convertToObject;
