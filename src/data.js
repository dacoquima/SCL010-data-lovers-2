const dataResult = window.RICKANDMORTY.results;

let filter = (dataResult, selectFilter) => {
  let filters = dataResult.filter(element => {
    return element.status === selectFilter;
  })

return filters; 
}
window.filter = filter;

const order = (dataResult, selectOrder) => {
  let filterOrder = '';
    if (selectOrder === "1-493") {
      filterOrder = dataResult.sort((a, b) => {
          return a.id - b.id
      })} else if (selectOrder === "493-1") {
          filterOrder = dataResult.sort((a, b) => {
          return b.id - a.id
      })} else if (selectOrder === "A-Z") {
          filterOrder = dataResult.sort((a, b) => {
          return a.name.localeCompare(b.name);
      })} else if (selectOrder === "Z-A") {
          filterOrder = dataResult.sort((a, b) => {
          return b.name.localeCompare(a.name);
      })
  }
return filterOrder; 
 }
window.order = order;