import SelectTestPage from "../pageObjects/SelectTest.page";

describe("DemoQA", () => {
  context("MD1", () => {
    beforeEach(() => {
      SelectTestPage.visit();
    });

    it.only("Grid Selection Test", () =>{
      SelectTestPage.gridLink.click();
      SelectTestPage.numberTwoBox.click();
      SelectTestPage.numberFourBox.click();
      SelectTestPage.numberSixBox.click();
      SelectTestPage.numberEightBox.click();
      SelectTestPage.numberTwoBox.should("have.class", "active");
      SelectTestPage.numberFourBox.should("have.class", "active");
      SelectTestPage.numberSixBox.should("have.class", "active");
      SelectTestPage.numberEightBox.should("have.class", "active");
      SelectTestPage.numberOneBox.should("not.have.class", "active");
      SelectTestPage.numberThreeBox.should("not.have.class", "active");
      SelectTestPage.numberFiveBox.should("not.have.class", "active");
      SelectTestPage.numberSevenBox.should("not.have.class", "active");
      SelectTestPage.numberNineBox.should("not.have.class", "active");
    });
  });
});