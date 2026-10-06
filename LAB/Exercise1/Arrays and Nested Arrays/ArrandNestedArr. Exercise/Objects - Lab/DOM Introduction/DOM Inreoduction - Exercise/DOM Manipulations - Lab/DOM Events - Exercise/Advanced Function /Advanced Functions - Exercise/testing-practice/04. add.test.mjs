import { expect } from "chai";

import { add } from "./04. add.mjs";

describe('add', function () {
    it('adds two positive numbers', function () {
        expect(add(-4, -6)).to.equal(-10);
    });
});