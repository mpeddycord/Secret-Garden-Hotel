describe('Display All Rooms', () => {
  it('Displays the rooms in cards', () => {
    cy.visit('http://localhost:3000/rooms');

    cy.get('a').contains('BOOK NOW').click();

    cy.get('img')
    .then((elems) => {
      for (const elem of elems) {
        cy.wrap(elem).invoke('attr', 'alt').should('be.a', 'string')
        .then((altText) => {
          console.log(altText);
        })
      }
    });
  });
});