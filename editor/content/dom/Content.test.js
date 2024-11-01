import { describe, test, expect } from 'vitest';
import { mapContentFragmentFromHTML, mapContentFragmentFromString } from './Content';

/* @vitest-environment jsdom */
describe('Content', () => {
  // FIXME: We need to
  test.skip("mapContentFragmentFromHTML should return a valid content for the editor", () => {
    const inertElement = document.createElement("div");
    const contentFragment = mapContentFragmentFromHTML(
      "<div>Hello, World!</div>",
      inertElement.style
    );
    expect(contentFragment).toBeInstanceOf(DocumentFragment);
    expect(contentFragment.children).toHaveLength(1);
    expect(contentFragment.firstChild).toBeInstanceOf(HTMLDivElement);
    expect(contentFragment.firstChild.firstChild).toBeInstanceOf(
      HTMLSpanElement
    );
    expect(contentFragment.firstChild.firstChild.firstChild).toBeInstanceOf(
      Text
    );
    expect(contentFragment.textContent).toBe("Hello, World!");
  });

  test("mapContentFragmentFromString should return a valid content for the editor", () => {
    const contentFragment = mapContentFragmentFromString(
      "Hello, \nWorld!"
    );
    expect(contentFragment).toBeInstanceOf(DocumentFragment);
    expect(contentFragment.children).toHaveLength(2);
    expect(contentFragment.firstChild).toBeInstanceOf(HTMLDivElement);
    expect(contentFragment.firstChild.firstChild).toBeInstanceOf(
      HTMLSpanElement
    );
    expect(contentFragment.firstChild.firstChild.firstChild).toBeInstanceOf(
      Text
    );
    expect(contentFragment.textContent).toBe("Hello, World!");
  });
});
