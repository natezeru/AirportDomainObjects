const Airport = require('./Airport')

describe('Airport object', () => {
	const testAirport = new Airport("DFW")
	
	test('airport has a name', () => {
		expect(testAirport.name).toBe("DFW")
	})

	
    })


const Bags = require('./Airport')

describe('Bag Objects', () => {
    const testBags = new Bags("small")

    test('this bag is a size',() => {
        expect(testBags.name).toBe("small")
    } )    
})