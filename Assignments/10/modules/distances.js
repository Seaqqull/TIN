exports.convertDistance = function (val, format) {
    if(format === "KM")
        return { result: `${val*1000}` }
    if(format === "ML")
        return { result: `${val*0.001}` }
    return null;
};
