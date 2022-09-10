function fruits() {
    if (true) {
        var fruit1 = 'apple';   // function scope or Global scope
        let fruit2 = 'kiwi';   // block scope
        const fruit3 = 'Banana';  // block scope
} // <-------- block end
console.log(fruit1); // accessible
console.log(fruit2); // can't access
console.log(fruit3);// can't access
}
fruits();