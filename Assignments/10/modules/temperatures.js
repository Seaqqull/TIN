exports.convertTemperature = function (val, format) {
    if(format === "F")
        return { K: (val - 32) * (5 / 9) + 273.15, C: (val - 32) * (5 / 9)};
    if(format === "C")
        return { K: val + 273.15, F: val * (9 / 5) + 32};
    if(format === "K")
        return { F: (val - 273.15) * (9 / 5) + 32, C: val - 273};
    return null;
};
