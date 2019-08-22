// Describe helps to group related tests together
describe('Project noon.com', function() {
	
	
	it('Testing noon.com', function() {			
		
		expect(true).to.equal(true)		
		
		//1.a. Land on the site
		
		// - Visit a web page
		cy.visit('https://www.noon.com/uae-en/')
		
		//1.b. Navigate to login	
		
		// Find the element by id and click 
		cy.get('#dd_header_signInOrUp').click()		
		cy.get('#btn_header_signin').click()
		
		//1.c. Login		
		
		// USERNAME
		cy.get('input[name="email"]')// finding an element by name		
		// then input values
		.type('bld.priyan@gmail.com')		
		//verify that the value of the input reflects the text that was typed with another .should().
		.should('have.value','bld.priyan@gmail.com')
		
		// Password
		cy.get('input[name="password"]').type('unique20').should('have.value','unique20')
		
		// Click on the login button			
		cy.get('#btn_signin_signin').click()
				
		//1.d. Make sure you land back on the homepage
		
		cy.url().should('eq', 'https://www.noon.com/uae-en/')
		
		
		//1.e. Head over to electronics via the top nav
		
		// - Click on the Electronics			
		cy.get('li').find('a').contains('Electronics').click()	
			
		//1.f. Click on the first item that shows up on the product listing page
		
		// Click on the first item in the product list
		cy.get('.name').first().click({ force: true })
			
		
		//1.g. Add it to cart		
		cy.get('button').contains('Add To Cart').click({ force: true })
		
		//1.h. Proceed to checkout
		cy.get('button').contains('Checkout').click({ force: true })
		
		// Click on checkout now
		cy.get('.cartCtaWrapper').find('button').contains('Checkout Now').click({ force: true })
		
		
		//1.i. Create a new address (dummy)			
		
		cy.get('#searchBox')// finding an element based on id of the element		
		
		// then input values - username
		.type('Al Wasl Road - United Arab Emirates') // enter a text in the selected element / input
		
		//verify that the value of the input reflects the text that was typed with another .should().
		.should('have.value','Al Wasl Road - United Arab Emirates')	
		
		// Click the location		
		cy.get('.suggestionItem ').find('span').first().click({ force: true })
		
		// Confirm the typed location
		cy.contains('Confirm location').click({ force: true })
		
		// enter address		
		cy.get('input[name="address"]').type('Safa').should('have.value','Safa')
		
		// Type Phone Number
		cy.get('input[name="phone"]').type('4004101').should('have.value','4004101')
		
		// Type First Name
		cy.get('input[name="firstName"]').type('Priyan').should('have.value','Priyan')
		
		// Type Last Name
		cy.get('input[name="lastName"]').type('Liyanage').should('have.value','Liyanage')
		
		// Save Address
		cy.contains('Save Address').click({ force: true })
		
		// Continue
		cy.contains('Continue').click({ force: true })
		
		//1.j. Land on payment page
		
		// The location is outside of country, UAE service area, therefore our number cannot be entered for shipping address
		// But, after giving correct phone number according to the correct country location, it will direct to payment page
		
	})	
	
})