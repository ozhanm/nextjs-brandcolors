const formatDate = (datetime, format = 1, seperator = '.') => {
    const d = new Date(datetime);
    const day = ("0" + d.getDate()).slice(-2);
    const month = ("0" + (parseInt(d.getMonth()) + 1)).slice(-2);
    const hour = ("0" + (parseInt(d.getHours()) + 1)).slice(-2);
    const minute = ("0" + (parseInt(d.getMinutes()) + 1)).slice(-2);
    let newdate = datetime;
    if (format == 1)
        newdate = day + seperator + month + seperator + d.getFullYear();
    if (format == 2)
        newdate = day + seperator + month + seperator + d.getFullYear() + ', ' + hour + ':' + minute;

    return newdate;
}

const getContrastYIQ = (hexcolor) => {
    var r = parseInt(hexcolor.substr(0, 2), 16);
    var g = parseInt(hexcolor.substr(2, 2), 16);
    var b = parseInt(hexcolor.substr(4, 2), 16);
    var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return (yiq >= 128) ? 'black' : 'white';
}

const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random()
        * (max - min + 1)) + min;
};

export {
    formatDate,
    getContrastYIQ,
    randomNumberInRange
}