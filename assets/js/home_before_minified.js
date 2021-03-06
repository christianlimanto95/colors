var hex_arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
var hex_element, rgb_element, footer_element, dnp_element;
ready(function() {
    hex_element = document.getElementsByClassName("input-hex")[0];
    rgb_element = document.getElementsByClassName("input-rgb")[0];
    footer_element = document.getElementsByClassName("footer")[0];
    dnp_element = document.getElementsByClassName("dnp-project")[0];

    hex_element.oninput = function() {
        var value = this.value;
        var length = value.length;
        switch (length) {
            case 3:
                checkValidHex(value, 3);
                break;
            case 4:
                checkValidHex(value, 4);
                break;
            case 6:
                checkValidHex(value, 6);
                break;
            case 7:
                checkValidHex(value, 7);
                break;
        }
    };

    rgb_element.oninput = function() {
        var value = this.value;
        var length = value.length;
        if (length >= 10 && length <= 16 && value.substr(0, 4) == "rgb(" && value.substr(-1, 1) == ")") {
            value = value.substr(4).substr(0, length - 5);

        }
        var item = value.split(",");
        if (item.length == 3) {
            var valid = true;
            for (var i = 0; i < 3; i++) {
                var angka = parseInt(item[i]);
                if (isNaN(angka) || angka < 0 || angka > 255) {
                    valid = false;
                    break;
                }
            }
            if (valid) {
                setColor("rgb", value);
            }
        }
    };
});

function ready(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

function checkValidHex(value, length) {
    var valid = true;
    value = value.toLowerCase();
    if (length == 4 || length == 7) {
        if (value.substr(0, 1) != "#") {
            valid = false;
        }

        if (valid) {
            for (var i = 1; i < length; i++) {
                if (hex_arr.indexOf(value.substr(i, 1)) == -1) {
                    valid = false;
                    break;
                }
            }
        }

        if (valid) {
            value = value.substring(1);
        }
    } else {
        for (var i = 0; i < length; i++) {
            if (hex_arr.indexOf(value.substr(i, 1)) == -1) {
                valid = false;
                break;
            }
        }
    }

    if (valid) {
        setColor("hex", value);
    }
}

function setColor(from, value) {
    switch (from) {
        case "hex":
            document.body.style.backgroundColor = "#" + value;
            var r = 0, g = 0, b = 0;
            if (value.length == 3) {
                r = hex_arr.indexOf(value.substr(0, 1)) * 255 / 15;
                g = hex_arr.indexOf(value.substr(1, 1)) * 255 / 15;
                b = hex_arr.indexOf(value.substr(2, 1)) * 255 / 15;
            } else {
                r = hex_arr.indexOf(value.substr(0, 1)) * 16 + hex_arr.indexOf(value.substr(1, 1));
                g = hex_arr.indexOf(value.substr(2, 1)) * 16 + hex_arr.indexOf(value.substr(3, 1));
                b = hex_arr.indexOf(value.substr(4, 1)) * 16 + hex_arr.indexOf(value.substr(5, 1));
            }
            rgb_element.value = "rgb(" + r + "," + g + "," + b + ")";
            if ((r + g + b) / 255 < 0.5) {
                setTextColor("white");
            } else {
                setTextColor("black");
            }
            break;
        case "rgb":
            document.body.style.backgroundColor = "rgb(" + value + ")";
            var hex = ["0", "0", "0"];
            var item = value.split(",");
            for (var i = 0; i < 3; i++) {
                var angka = parseInt(item[i]);
                var first = parseInt(angka / 16);
                var second = angka % 16;
                hex[i] = hex_arr[first] + hex_arr[second];
            }

            hex_element.value = ("#" + hex[0] + hex[1] + hex[2]).toUpperCase();

            if ((parseInt(item[0]) + parseInt(item[1]) + parseInt(item[2])) / 255 < 0.5) {
                setTextColor("white");
            } else {
                setTextColor("black");
            }
            break;
    }
}

function setTextColor(color) {
    hex_element.style.color = color;
    hex_element.style.borderColor = color;
    rgb_element.style.color = color;
    rgb_element.style.borderColor = color;
    footer_element.style.color = color;
    dnp_element.style.color = color;
}