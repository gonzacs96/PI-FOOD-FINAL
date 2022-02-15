export const sortAlphabetically = (array, string) => {
  let result=[...array];
  if (string === "A-Z") {
    result = result.sort(function (a, b) {
      var nameA = a.title.toLowerCase(),
        nameB = b.title.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
  } else if (string === "Z-A") {
      result = result.sort(function (a, b) {
        var nameA = a.title.toLowerCase(),
          nameB = b.title.toLowerCase();
        if (nameA > nameB) return -1;
        if (nameA < nameB) return 1;
        return 0;
      });
  }
  
  return result;
};
