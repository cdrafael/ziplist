function zipList(list1, list2) {
  const finalList = [];
  let count1 = 0;
  let count2 = 0;
  while (count1 < list1.length && count2 < list2.length) {
    finalList.push(list1[count1]);
    finalList.push(list2[count2]);
    count1++;
    count2++;
  }
  if (count1 < list1.length) {
    finalList.push(list1[count1]);
  }
  if (count2 < list2.length) {
    finalList.push(list2[count1]);
  }

  return finalList;
}

console.log(zipList([1, 2, 3], ['a', 'b', 'c']));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay([1, 2, 3], ['a', 'b', 'c']));
