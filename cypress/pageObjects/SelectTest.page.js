import BasePage from "./Base.page";

class SelectTestPage extends BasePage{

    static get url(){
        return "/selectable";
    }
    static get gridLink(){
        return cy.get("#demo-tab-grid");
    }
    static get numberBoxes(){
        return cy.get(".list-group-horizontal-sm");
    }
    static get numberTwoBox(){
        return this.numberBoxes.contains("Two");
    }
    static get numberFourBox(){
        return this.numberBoxes.contains("Four");
    }
    static get numberSixBox(){
        return this.numberBoxes.contains("Six");
    }
    static get numberEightBox(){
        return this.numberBoxes.contains("Eight");
    }
    static get numberOneBox(){
        return this.numberBoxes.contains("One");
    }
    static get numberThreeBox(){
        return this.numberBoxes.contains("Three");
    }
    static get numberFiveBox(){
        return this.numberBoxes.contains("Five");
    }
    static get numberSevenBox(){
        return this.numberBoxes.contains("Seven");
    }
    static get numberNineBox(){
        return this.numberBoxes.contains("Nine");
    }
}

export default SelectTestPage;