function on(bindElement, type, childSelect, listener) {
  bindElement.addEventListener(type, function (e) {
    const eventTarget = e.target;
    const targets = Array.from(bindElement.querySelectorAll(childSelect));
    if (targets.includes(eventTarget) || targets.some(target => target.contains(eventTarget))) {
      listener(e);
    }
  });
}
