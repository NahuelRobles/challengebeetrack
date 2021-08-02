/** @format */

export const getValidation = (data = '') => {
  if (isNaN(data)) {
    return true;
  }
  if (data === '') {
    return true;
  }

  return false;
};
