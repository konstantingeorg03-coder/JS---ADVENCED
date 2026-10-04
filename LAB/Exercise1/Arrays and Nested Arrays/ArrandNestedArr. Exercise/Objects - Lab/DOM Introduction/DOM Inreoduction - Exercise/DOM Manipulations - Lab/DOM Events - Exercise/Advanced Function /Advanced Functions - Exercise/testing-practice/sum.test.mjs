import { expect } from 'chai';

function sum(a, b){
    return a + b;
}

it('First test', function () {
    expect(sum(3, 4)).to.equal(7);
    console.log('After first check');
});

it('Second test', function() {
    expect(sum(6, 4)).to.equal(10);
    console.log('After second check');
});