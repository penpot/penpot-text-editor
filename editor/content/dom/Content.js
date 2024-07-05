/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Copyright (c) KALEIDOS INC
 */

import { createInline } from "./Inline";
import {
  createEmptyParagraph,
  createParagraph,
  isLikeParagraph,
} from "./Paragraph";
import { isDisplayBlock } from "./Style";

/**
 * Maps any HTML into a valid content DOM element.
 *
 * @param {Document} document
 * @param {HTMLElement} root
 * @returns {DocumentFragment}
 */
export function mapContentFragmentFromDocument(document, root) {
  const nodeIterator = document.createNodeIterator(root, NodeFilter.SHOW_TEXT);
  const fragment = document.createDocumentFragment();

  let currentParagraph = null;
  let currentNode = nodeIterator.nextNode();
  while (currentNode) {
    const parentStyle = window.getComputedStyle(currentNode.parentElement);
    if (
      isDisplayBlock(currentNode.parentElement.style) ||
      isDisplayBlock(parentStyle) ||
      isLikeParagraph(currentNode.parentElement)
    ) {
      if (currentParagraph) {
        fragment.appendChild(currentParagraph);
      }
      currentParagraph = createParagraph(undefined, parentStyle);
    } else {
      if (currentParagraph === null) {
        currentParagraph = createParagraph();
      }
    }

    currentParagraph.appendChild(
      createInline(new Text(currentNode.nodeValue), parentStyle)
    );

    currentNode = nodeIterator.nextNode();
  }

  fragment.appendChild(currentParagraph);
  return fragment;
}

/**
 * Maps any HTML into a valid content DOM element.
 *
 * @param {string} html
 * @returns {DocumentFragment}
 */
export function mapContentFragmentFromHTML(html) {
  const parser = new DOMParser();
  const htmlDocument = parser.parseFromString(html, "text/html");
  return mapContentFragmentFromDocument(
    htmlDocument,
    htmlDocument.documentElement
  );
}

/**
 * Maps a plain text into a valid content DOM element.
 *
 * @param {string} string
 * @returns {DocumentFragment}
 */
export function mapContentFragmentFromString(string) {
  const lines = string.replace(/\r/g, "").split("\n");
  const fragment = document.createDocumentFragment();
  for (const line of lines) {
    if (line === "") {
      fragment.appendChild(createEmptyParagraph());
    } else {
      fragment.appendChild(createParagraph([createInline(new Text(line))]));
    }
  }
  return fragment;
}
