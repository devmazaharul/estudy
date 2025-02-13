function isValidBangladeshiPhone(number) {
    const regex = /^(013|014|015|016|017|018|019)[0-9]{8}$/;
    return regex.test(number);
}


export {
    isValidBangladeshiPhone
}