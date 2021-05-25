const cdcl = (condition, truthy, falsy = '') => {
  const res = condition ? truthy : falsy;
  return res.trim() === '' ? '' : ` ${res}`;
};

export default cdcl;
