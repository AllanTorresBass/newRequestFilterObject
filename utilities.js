export const returnKeys = (obj) => {
  let data = {};

  let current = [];
  let next = [];
  let newObj = [];
  let firstObj = [];
  for (const [key, value] of Object.entries(obj)) {
    current.push(key.replace("__", "/").replace("_", " "));

    data.id = value.id;
    data.type = value.type;
    data.text = value.text ? value.text.replace(" ", ".") : "";
    data.navigationText = value.navigationText;
    data.parent = value.parent;
    newObj.push(value.children);
    if (value.children) {
      for (const [key, value2] of Object.entries(value.children)) {
        next.push(key.replace("__", "/").replace("_", " "));
        firstObj.push(value2.children);
      }
    } else null;
  }

  return { current, next, newObj, data, firstObj };
};
export const returnKeysII = (obj) => {
  let navigation = [];
  let next = [];
  for (const [key, value] of Object.entries(obj)) {
    navigation.push(key);
    next.push(value);
    // console.log(`${value.children}`);
  }
  return { navigation };
};
export const returnNextNode = (obj) => {
  let next = [];
  for (const [key, value] of Object.entries(obj)) {
    next.push(key);
    // console.log(`${key}`);
  }
  return navigation;
};
