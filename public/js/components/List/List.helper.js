export function removeListFromRoot(root) {
  if (root.lastElementChild.classList.contains('todo__list')) {
    root.lastElementChild.remove();
  }
}
