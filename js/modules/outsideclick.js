export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const fora = "data-outside";

  function clickFora(event) {
    if (!element.contains(event.target)) {
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, clickFora);
      });
      element.removeAttribute(fora);
      callback();
    }
  }
  
  if (!element.hasAttribute(fora)) {

    events.forEach((userEvent) => {
      setTimeout(() => {
        html.addEventListener(userEvent, clickFora);
      });
    });

    element.setAttribute(fora, "");
  }

}
