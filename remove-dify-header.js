(() => {
  const selector = 'div[class="flex h-[60px] shrink-0 items-center pl-2"]';

  const removeTarget = () => {
    document.querySelectorAll(selector).forEach((el) => el.remove());
  };

  removeTarget();

  const observer = new MutationObserver(removeTarget);
  observer.observe(document.body, { childList: true, subtree: true });
})();
