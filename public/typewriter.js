export const typewriter = (selector, options) => {
  const element = document.querySelector(selector);
  const originalText = element.textContent;

  const cursor = document.createElement("span");
  cursor.className = "cursor";
  cursor.textContent = "|";

  let waitTime = 0;
  for (let index = 1; index <= originalText.length; index++) {
    const offset = Math.floor(Math.random() * 100);
    const time = waitTime + offset;
    waitTime += offset;
    setTimeout(() => {
      element.textContent = originalText.substring(0, index);
      element.append(cursor);
    }, time);
  }

  // Fix CLS / FUOC
  setTimeout(() => (element.style.visibility = "visible"), 100);

  setTimeout(() => {
    cursor.remove();
  }, waitTime);
};