exports.convertDistance = function (val, format) {
    if(format === "KM")
        return { result: `${val/1.609}` }
    if(format === "ML")
        return { result: `${val*1.609}` }
    return null;
};
