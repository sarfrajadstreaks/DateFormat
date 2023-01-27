const {Date_} =require("../src");
describe('validate date Date_ object creation', () => { 
    it.skip("should return date object when init", () => {
        let date=Date_()
        console.log(date)
        expect(date).toThrow(new Error("Object not initialized: use new operator to initialize"))
    })
    it("should return date object when init", () => {
        let date=new Date_().getDate()
        expect(date.toDateString()).toBe(new Date().toDateString())
    })
    it("should return date object when init with value as string", () => {
        let date=new Date_("2023-01-22").getDate()
        expect(date.toDateString()).toBe(new Date("2023-01-22").toDateString())
    })
    it("should return date object when init with value as date object", () => {
        let date=new Date_(new Date("2023-01-22")).getDate()
        expect(date.toDateString()).toBe(new Date("2023-01-22").toDateString())
    })
 })
 describe('validate format', () => { 
    it("should return invalid date when date is invalid", () => {
        let date=new Date_("test").format()
        expect(date).toBe("Invalid Date")
    })
    it("should return date in format YYYY-MM-DD", () => {
        let date=new Date_("Jan 12, 2023")
        expect(date.format("YYYY-MM-DD")).toBe("2023-01-12")
    })
    it("should return date in format YYYY/MM/DD", () => {
        let date=new Date_("Jan 12, 2023")
        expect(date.format("YYYY/MM/DD")).toBe("2023/01/12")
    })
    it("should return date in format Jan, 2023", () => {
        let date=new Date_("Jan 12, 2023")
        expect(date.format("mon3, YYYY")).toBe("Jan, 2023")
    })
    it("should return date in format YYYY/M/D", () => {
        let date=new Date_("Jan 1, 2023")
        expect(date.format("YYYY/M/D")).toBe("2023/1/1")
    })
    it("should return date in format YYYY-DD-MM", () => {
        let date=new Date_("Jan 12, 2023")
        expect(date.format("YYYY-DD-MM")).toBe("2023-12-01")
    })
    it("should return date in format DD-MM-YYYY", () => {
        let date=new Date_("Jan 12, 2023")
        expect(date.format("DD-MM-YYYY")).toBe("12-01-2023")
    })
    it("should return date in format DD-MM-YY", () => {
        let date=new Date_("Jan 12, 2023")
        expect(date.format("DD-MM-YY")).toBe("12-01-23")
    })
    it("should return date in format Jan 12, 2023", () => {
        let date=new Date_("Jan 12, 2023")
        expect(date.format("mon3 DD, YYYY")).toBe("Jan 12, 2023")
    })
    it("should return date in format January 12, 2023", () => {
        let date=new Date_("Jan 12, 2023")
        expect(date.format("mon DD, YYYY")).toBe("January 12, 2023")
    })
    it("should return date in format Janua 12, 2023", () => {
        let date=new Date_("Jan 12, 2023")
        expect(date.format("mon5 DD, YYYY")).toBe("Janua 12, 2023")
    })
    it("should return date in format Thu, January 12, 2023", () => {
        let date=new Date_("Jan 12, 2023")
        expect(date.format("day3, mon DD, YYYY")).toBe("Thu, January 12, 2023")
    })
    it("should return date in format Jan 12", () => {
        let date=new Date_("Jan 12, 2023")
        expect(date.format("mon3 DD")).toBe("Jan 12")
    })
    
 })