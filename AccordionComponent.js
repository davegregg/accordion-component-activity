// const kata1 = new AccordionComponent("Kata 1", kata1results)
// const kata2 = new AccordionComponent("Kata 2", kata2results)

class AccordionComponent {

    constructor (summaryText, detailsBody, parentElement) {
        this.detailsBody = JSON.stringify(detailsBody)
        this.summaryText = summaryText
        this.element = null

        this.generate()
        this.appendTo(parentElement)
    }

    generate () {
        const detailsElement = document.createElement('details')
        const summaryElement = document.createElement('summary')
        detailsElement.append(summaryElement)
        summaryElement.append(this.summaryText);
        detailsElement.append(this.detailsBody)

        this.element = detailsElement
    }

    appendTo (parentElement) {
        console.log('AccordionComponent has been added to the DOM')
        parentElement.append(this.element)
    }

    getElement () {
        return this.element
    }

    setElement (newElement) {
        console.warn('WARRNNING: this.element has been changed!!!')
        this.element = newElement
    }

}