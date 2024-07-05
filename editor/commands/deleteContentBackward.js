/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Copyright (c) KALEIDOS INC
 */

/**
 * delete the content directly before the caret position and this intention is
 * not covered by another `inputType` or delete the selection with the
 * selection collapsing to its start after the deletion.
 *
 * @param {InputEvent} event
 * @param {TextEditor} editor
 * @param {SelectionController} selectionController
 */
export function deleteContentBackward(event, editor, selectionController) {
  event.preventDefault();
  // If the editor is empty this is a no op.
  if (editor.isEmpty) return;
  // Caret mode (nothing selected)
  if (selectionController.isCollapsed) {
    if (
      selectionController.isTextFocus &&
      selectionController.focusOffset > 0
    ) {
      return selectionController.removeBackwardText();
    } else if (
      selectionController.isTextFocus &&
      selectionController.focusAtStart
    ) {
      return selectionController.mergeBackwardParagraph();
    } else if (
      selectionController.isInlineFocus ||
      selectionController.isLineBreakFocus
    ) {
      return selectionController.removeBackwardParagraph();
    }
  }
  return selectionController.removeSelected();
}
