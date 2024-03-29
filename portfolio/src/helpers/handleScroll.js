// Export a function named 'handleScrollY'.
// This function takes two arguments: 'element' and 'pixels'.
export function handleScrollY(element, pixels) {
  // Calculate the target scroll position.
  // This is done by getting the top position of 'element' relative to the viewport,
  // adding the current vertical scroll position of the document,
  // and subtracting the 'pixels' argument.
  // The optional chaining operator '?' is used to handle the case where 'element' is null or undefined.
  const targetScrollPosition =
    element?.getBoundingClientRect().top + window.scrollY - pixels;

  // Call the 'scrollTo' method on the 'window' object.
  // This method scrolls the document to a certain position.
  window.scrollTo({
    // The 'top' property sets the number of pixels that the document is scrolled vertically.
    // It is set to the calculated target scroll position.
    top: targetScrollPosition,

    // The 'behavior' property sets the scrolling behavior.
    // It is set to "smooth", which means the scrolling will have an animation.
    behavior: "smooth",
  });
}

export function scrollToBottom() {
  // scrolls to the bottom of the page
  window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
  });
}

export function scrollToTop() {
  // scrolls to the top of the page
  window.scrollTo({
      top: 0,
      behavior: "smooth",
  });
}