const calculationType =
    document.getElementById("calculationType");

const speedInputs =
    document.getElementById("speedInputs");

const downloadInputs =
    document.getElementById("downloadInputs");

const convertInputs =
    document.getElementById("convertInputs");

const speedForm =
    document.getElementById("speedForm");

const result =
    document.getElementById("result");

const resultValue =
    document.getElementById("resultValue");

const formula =
    document.getElementById("formula");


calculationType.addEventListener("change", function () {

    speedInputs.style.display = "none";
    downloadInputs.style.display = "none";
    convertInputs.style.display = "none";

    resultValue.textContent = "--";

    formula.textContent =
        "Enter values and click Calculate.";


    if (this.value === "speed") {

        speedInputs.style.display = "block";

    }

    else if (this.value === "download") {

        downloadInputs.style.display = "block";

    }

    else if (this.value === "convert") {

        convertInputs.style.display = "block";

    }

});


speedForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const type = calculationType.value;


    if (type === "speed") {

        const data =
            parseFloat(
                document.getElementById("dataAmount").value
            );

        const dataUnit =
            document.getElementById("dataUnit").value;

        const time =
            parseFloat(
                document.getElementById("timeAmount").value
            );

        const timeUnit =
            document.getElementById("timeUnit").value;


        if (!isValid(data) || !isValid(time)) {

            showError(
                "Please enter valid data and time."
            );

            return;
        }


        const dataBytes =
            convertDataToBytes(
                data,
                dataUnit
            );

        const seconds =
            convertTimeToSeconds(
                time,
                timeUnit
            );

        const bytesPerSecond =
            dataBytes / seconds;

        const bitsPerSecond =
            bytesPerSecond * 8;

        const mbps =
            bitsPerSecond / 1000000;


        resultValue.textContent =
            formatNumber(mbps) + " Mbps";

        formula.textContent =
            "Approximate internet speed";

    }


    else if (type === "download") {

        const fileSize =
            parseFloat(
                document.getElementById("fileSize").value
            );

        const fileUnit =
            document.getElementById("fileUnit").value;

        const internetSpeed =
            parseFloat(
                document.getElementById("internetSpeed").value
            );

        const speedUnit =
            document.getElementById("speedUnit").value;


        if (
            !isValid(fileSize) ||
            !isValid(internetSpeed)
        ) {

            showError(
                "Please enter a valid file size and internet speed."
            );

            return;
        }


        const fileBytes =
            convertDataToBytes(
                fileSize,
                fileUnit
            );

        const bitsPerSecond =
            convertSpeedToBits(
                internetSpeed,
                speedUnit
            );


        const seconds =
            (fileBytes * 8) /
            bitsPerSecond;


        resultValue.textContent =
            formatTime(seconds);

        formula.textContent =
            "Estimated download time";

    }


    else if (type === "convert") {

        const value =
            parseFloat(
                document.getElementById("convertValue").value
            );

        const fromUnit =
            document.getElementById("convertUnit").value;

        const toUnit =
            document.getElementById("convertTo").value;


        if (!isValid(value)) {

            showError(
                "Please enter a valid speed."
            );

            return;
        }


        const bits =
            convertSpeedToBits(
                value,
                fromUnit
            );

        const converted =
            convertBitsToSpeed(
                bits,
                toUnit
            );


        resultValue.textContent =
            formatNumber(converted) +
            " " +
            getUnitLabel(toUnit);

        formula.textContent =
            value + " " +
            getUnitLabel(fromUnit) +
            " = " +
            formatNumber(converted) +
            " " +
            getUnitLabel(toUnit);

    }

});


function isValid(value) {

    return (
        !isNaN(value) &&
        isFinite(value) &&
        value > 0
    );

}


function convertDataToBytes(value, unit) {

    const multipliers = {

        KB: 1000,
        MB: 1000000,
        GB: 1000000000,
        TB: 1000000000000

    };

    return value * multipliers[unit];

}


function convertTimeToSeconds(value, unit) {

    if (unit === "seconds") {
        return value;
    }

    if (unit === "minutes") {
        return value * 60;
    }

    if (unit === "hours") {
        return value * 3600;
    }

}


function convertSpeedToBits(value, unit) {

    const multipliers = {

        Kbps: 1000,
        Mbps: 1000000,
        Gbps: 1000000000,

        KBps: 8000,
        MBps: 8000000,
        GBps: 8000000000

    };

    return value * multipliers[unit];

}


function convertBitsToSpeed(bits, unit) {

    const multipliers = {

        Kbps: 1000,
        Mbps: 1000000,
        Gbps: 1000000000,

        KBps: 8000,
        MBps: 8000000,
        GBps: 8000000000

    };

    return bits / multipliers[unit];

}


function getUnitLabel(unit) {

    const labels = {

        Kbps: "Kbps",
        Mbps: "Mbps",
        Gbps: "Gbps",
        KBps: "KB/s",
        MBps: "MB/s",
        GBps: "GB/s"

    };

    return labels[unit];

}


function formatNumber(number) {

    return number.toLocaleString(undefined, {

        maximumFractionDigits: 4

    });

}


function formatTime(seconds) {

    if (seconds < 1) {

        return "< 1 second";

    }


    const totalSeconds =
        Math.round(seconds);

    const days =
        Math.floor(
            totalSeconds / 86400
        );

    const hours =
        Math.floor(
            (totalSeconds % 86400) / 3600
        );

    const minutes =
        Math.floor(
            (totalSeconds % 3600) / 60
        );

    const secs =
        totalSeconds % 60;


    const parts = [];


    if (days > 0) {

        parts.push(
            days +
            " day" +
            (days !== 1 ? "s" : "")
        );

    }


    if (hours > 0) {

        parts.push(
            hours +
            " hour" +
            (hours !== 1 ? "s" : "")
        );

    }


    if (minutes > 0) {

        parts.push(
            minutes +
            " minute" +
            (minutes !== 1 ? "s" : "")
        );

    }


    if (secs > 0) {

        parts.push(
            secs +
            " second" +
            (secs !== 1 ? "s" : "")
        );

    }


    return parts.join(", ");

}


function showError(message) {

    resultValue.textContent = "Error";

    formula.textContent = message;

}

