let findDiff = function (s, t) {
    let merged = "";
    let distance = Math.max(str1.length, str2.length);

    for (let i = 0; i < distance; i++) {
        if (i < str1.length) {
            merged = merged + str1[i];
        }
        if (i < str2.length) {
            merged = merged + str2[i];
        }
    }
    return merged;
};
console.log(mergeFun("abc", "defghsjlfdfjisojfej"))