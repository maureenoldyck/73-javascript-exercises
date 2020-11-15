(() => {
    const birds = [{
            name: "seagull",
            num: 1
        },
        {
            name: "raven",
            num: 3
        },
        {
            name: "chickadee",
            num: 2
        },
        {
            name: "owl",
            num: 4
        },
        {
            name: "buzzard",
            num: 8
        },
        {
            name: "pigeon",
            num: 1
        },
        {
            name: "magpie",
            num: 3
        },
        {
            name: "vulture",
            num: 2
        },
        {
            name: "falcon",
            num: 1
        },
        {
            name: "robin",
            num: 2
        },
        {
            name: "dove",
            num: 1
        },
        {
            name: "crow",
            num: 5
        },
    ];
    const adjectives = new Set([
        "gray",
        "hoopoe",
        "singing",
        "howling",
        "perched",
        "tall",
        "small",
        "blue",
        "panting",
        "tangent",
        "sported",
    ]);

    // your code here

    document.getElementById("run").addEventListener("click", function () {

        let randomBird = birds[(Math.floor(Math.random() * birds.length))];
        const arrayAdjectives = [...adjectives];
        let randomAdjective = arrayAdjectives[(Math.floor(Math.random() * arrayAdjectives.length))];

        if (randomBird.num == 1) {
            document.getElementById("target").innerHTML = "A " + randomAdjective + " " + randomBird.name + ".";

        } else {
            document.getElementById("target").innerHTML = "A few " + randomAdjective + " " + randomBird.name + "s.";
        }
    });


})();