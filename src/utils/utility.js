export function validateName(name) {
  const regex = /^[a-zA-Z\s-]+$/;
  return regex.test(name);
}

export function validatePhoneNumber(phoneNumber) {
  const regex = /^\+?[1-9]\d{1,14}$/;
  return regex.test(phoneNumber);
}

export function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email)
}
