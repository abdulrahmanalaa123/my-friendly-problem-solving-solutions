function cartPerform(items, queries) {
  const indexMap = new Map([]);
  const itemsCopy = [...items];
  let size = items.length;
  const deletedIndices = new Set([]);

  for (let i = 0; i < items.length; i++) {
    createSet(indexMap, items[i], i);
  }
  for (const q of queries) {
    if (q < 0) {
      const key = q * -1;
      deletedIndices.add(deleteIndex(indexMap, key));
      size = size - 1;
    } else {
      itemsCopy.push(q);
      createSet(indexMap, q, itemsCopy.length - 1);
      size = size + 1;
    }
  }

  let finalArr = [];
  // [1,2,1,2] q = [3,-3,-2,4,-1,-4,-2]
  // res = [1]
  for (let i = 0; i < itemsCopy.length; i++) {
    if (deletedIndices.has(i)) {
      continue;
    } else {
      finalArr.push(itemsCopy[i]);
    }
  }

  return finalArr;
}

function createSet(map, key, index) {
  if (map.has(key)) {
    map.get(key).vals.push(index);
  } else {
    map.set(key, { vals: [index], transition: 0 });
  }
}

function deleteIndex(map, key) {
  const set = map.get(key);
  const deleted = set.vals[set.transition];
  set.transition = set.transition + 1;
  return deleted;
}

console.log(
  "final",
  cartPerform([1, 2, 1, 2, 1, 3], [-1, -1, -2, -1, 3, -3, 1])
);
// [1, 2, 1, 1, 3, 2], [-1, -1, 2, -2, 3, -2, 4, 3]
