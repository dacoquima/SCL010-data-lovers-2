const dataResult = window.RICKANDMORTY.results;

let filter = (dataResult, select) => {
  let filtro = dataResult.filter(element => {
    return element.status === select;
  })

return filtro; 
}
window.filter = filter;