/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Copyright (c) KALEIDOS INC
 */

/**
 * Sets a single style property value of an element.
 *
 * @param {HTMLElement} element
 * @param {string} styleName
 * @param {*} styleValue
 * @param {string} [styleUnit]
 * @returns {HTMLElement}
 */
export function setStyle(element, styleName, styleValue, styleUnit) {
  if (
    styleName.startsWith("--") &&
    typeof styleValue !== "string" &&
    typeof styleValue !== "number"
  ) {
    if (styleName === "--fills" && styleValue === null) debugger;
    element.style.setProperty(styleName, JSON.stringify(styleValue));
  } else {
    element.style.setProperty(styleName, styleValue + (styleUnit ?? ""));
  }
  return element;
}

/**
 * Returns the value of a style from a declaration.
 *
 * @param {CSSStyleDeclaration} style
 * @param {string} styleName
 * @param {string|undefined} [styleUnit]
 * @returns {*}
 */
export function getStyleFromDeclaration(style, styleName, styleUnit) {
  if (styleName.startsWith("--")) {
    return style.getPropertyValue(styleName);
  }
  const styleValue = style.getPropertyValue(styleName);
  if (styleValue.endsWith(styleUnit)) {
    return styleValue.slice(0, -styleUnit.length);
  }
  return styleValue;
}

/**
 * Returns the value of a style.
 *
 * @param {HTMLElement} element
 * @param {string} styleName
 * @param {string|undefined} [styleUnit]
 * @returns {*}
 */
export function getStyle(element, styleName, styleUnit) {
  return getStyleFromDeclaration(element.style, styleName, styleUnit);
}

/**
 * Sets the styles of an element using an object and a list of
 * allowed styles.
 *
 * @param {HTMLElement} element
 * @param {Array<[string,?string]>} allowedStyles
 * @param {Object.<string, *>} styleObject
 * @returns {HTMLElement}
 */
export function setStylesFromObject(element, allowedStyles, styleObject) {
  for (const [styleName, styleUnit] of allowedStyles) {
    if (!(styleName in styleObject)) {
      continue;
    }
    const styleValue = styleObject[styleName];
    if (styleValue) {
      setStyle(element, styleName, styleValue, styleUnit);
    }
  }
  return element;
}

/**
 * Sets the styles of an element using a CSS Style Declaration and a list
 * of allowed styles.
 *
 * @param {HTMLElement} element
 * @param {Array<[string,?string]>} allowedStyles
 * @param {CSSStyleDeclaration} styleDeclaration
 * @returns {HTMLElement}
 */
export function setStylesFromDeclaration(
  element,
  allowedStyles,
  styleDeclaration
) {
  for (const [styleName, styleUnit] of allowedStyles) {
    const styleValue = getStyleFromDeclaration(styleDeclaration, styleName, styleUnit);
    if (styleValue) {
      setStyle(element, styleName, styleValue, styleUnit);
    }
  }
  return element;
}

/**
 * Sets the styles of an element using an Object or a CSS Style Declaration and
 * a list of allowed styles.
 *
 * @param {HTMLElement} element
 * @param {Array<[string,?string]} allowedStyles
 * @param {Object.<string,*>|CSSStyleDeclaration} styleObjectOrDeclaration
 * @returns {HTMLElement}
 */
export function setStyles(element, allowedStyles, styleObjectOrDeclaration) {
  if (styleObjectOrDeclaration instanceof CSSStyleDeclaration) {
    return setStylesFromDeclaration(
      element,
      allowedStyles,
      styleObjectOrDeclaration
    );
  }
  return setStylesFromObject(element, allowedStyles, styleObjectOrDeclaration);
}

/**
 * Gets the styles of an element using a list of allowed styles.
 *
 * @param {HTMLElement} element
 * @param {Array<[string,?string]} allowedStyles
 * @returns {Object.<string, *>}
 */
export function getStyles(element, allowedStyles) {
  const styleObject = {};
  for (const [styleName, styleUnit] of allowedStyles) {
    const styleValue = getStyle(element, styleName, styleUnit);
    if (styleValue) {
      styleObject[styleName] = styleValue;
    }
  }
  return styleObject;
}

/**
 * Returns a series of merged styles.
 *
 * @param {Array<[string,?string]} allowedStyles
 * @param {CSSStyleDeclaration} styleDeclaration
 * @param {Object.<string,*>} newStyles
 * @returns {Object.<string,*>}
 */
export function mergeStyles(allowedStyles, styleDeclaration, newStyles) {
  const mergedStyles = {};
  for (const [styleName, styleUnit] of allowedStyles) {
    if (styleName in newStyles) {
      mergedStyles[styleName] = newStyles[styleName];
    } else {
      mergedStyles[styleName] = getStyleFromDeclaration(styleDeclaration, styleName, styleUnit);
    }
  }
  return mergedStyles;
}

/**
 * Returns true if the specified style declaration has a display block.
 *
 * @param {CSSStyleDeclaration} style
 * @returns {boolean}
 */
export function isDisplayBlock(style) {
  return style.display === "block";
}

/**
 * Returns true if the specified style declaration has a display inline
 * or inline-block.
 *
 * @param {CSSStyleDeclaration} style
 * @returns {boolean}
 */
export function isDisplayInline(style) {
  return style.display === "inline" || style.display === "inline-block";
}
