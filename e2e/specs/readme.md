📜 Specs
========================

Please keep all test logic and acceptance criteria in a *-spec file of some sort.

Test logic should be restricted asserting acceptance criteria and should never directly include any css selectors or element finders, etc. Also, try to keep the page object logic as dumb as possible and delegate the any validation logic to the test spec.

⛔️ I.e. Instead of something like this:

<pre>
// page object file
let po = {
    listElem: $$('ul li'),
    isValid: () => {
        return this.listElem.count()
            .then(count => count > 3)
    }
}

// test spec file
describe('shopping list', () => {
    it('should have at least 4 items', () => {
        expect(po.isValid()).toBeTruthy();
    });
})
</pre>
✔️ Do something like:
<pre>
// page object file
let po = {
    listElem: $$('ul li'),
    getCount: () => {
        return this.listElem.count();
    }
}

// test spec file
describe('shopping list', () => {
    it('should have at least 4 items', () => {        
        expect(po.getCount()).toBeGreaterThan(3);
    });
})
</pre>

This way the spec file is what controls what is valid or not. Also now the page object can in theory be used in more scenarios and is thus more generic.