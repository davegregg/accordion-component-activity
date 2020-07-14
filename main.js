const kata1results = []
const kata2results = []

const main = document.querySelector('main')

const kata1 = new AccordionComponent("Kata 1", kata1results, main)
const kata2 = new AccordionComponent("Kata 2", kata2results, main)

// kata1.appendTo(document.body)
// document.body.append(kata1.element)

// if (kata1.getElement() = document.createElement('details')) {
//     console.log('werae')
// }