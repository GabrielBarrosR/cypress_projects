export const elements = {
product: (renamed) => `[data-test="add-to-cart-${rename(renamed)}"]` 
}


function rename (renamed) {
    return renamed.replaceAll(' ', '-').toLowerCase()
}