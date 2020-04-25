export function addItem(item) {
  return {
    type: "ADD_ITEM",
    payload: item,
  };
}

export function removeFeature(item) {
  return {
    type: "REMOVE_FEATURE",
    payload: item,
  };
}
