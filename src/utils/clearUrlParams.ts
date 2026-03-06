export function clearUrlParams() {
  console.log('clear params')
  const newUrl = window.location.pathname + window.location.hash;
  window.history.replaceState(null, '', newUrl);
}