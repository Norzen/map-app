export const carsList = [
    {id: 1, name: 'bulldozer', lat: 55.810740, lng: 37.570239, currentState: 'работает'},
    {id: 2, name: 'grader', lat: 55.806365, lng: 37.635497, currentState: 'работает'},
    {id: 3, name: 'excavator', lat: 55.689911, lng: 37.552146, currentState: 'не работает'},
 ];

 localStorage.setItem('carsList', JSON.stringify(carsList));

 //const carsList = JSON.parse(localStorage.getItem('carsList'));