export function savePreference(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getPreference(key) {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}
