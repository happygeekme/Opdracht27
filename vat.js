// const calcVat = function(percentage) {
//     return(percentage / 100);
// };

// const vatIncluded = function(baseprice) {
//     const vat = calcVat(21);
//     return(baseprice + (baseprice * vat));
// };
// console.log(vatIncluded(4))

const vatPercentage = function(main, percentage) {
    const inclVat = (percentage + 100);
    const base = (main / inclVat);
    return (base * percentage);
};

const MainVat = function(main, percentage) {
    const vat = vatPercentage(percentage);
    return ["main price: " + main, "VAT: " + vat];
};
// console.log(MainVat(1210, 21));
console.log(vatPercentage);