export const haircuts = [
    {
        style: "women's",
        min: 45,
        max: 75,
    },
    {
        style: "men's",
        min: 25,
        max: 45,
    },
    {
        style: "children's",
        min: 45,
        max: 75,
    },
    {
        style: "seniors'",
        min: 25,
        max: 40,
    },
    {
        style: "blowout",
        min: 30,
        max: 50,
    },
    {
        style: "shampoo & style",
        min: 25,
        max: 40,
    },
    {
        style: "updo",
        min: 50,
        max: 85,
    },
];

export const color = [
    {
        style: "single process",
        min: 60,
        max: 90,
    },
    {
        style: "root touch-up",
        min: 45,
        max: 75,
    },
    {
        style: "partial highlights",
        min: 70,
        max: 120,
    },
    {
        style: "full highlights",
        min: 100,
        max: 150,
    },
    {
        style: "balayage",
        min: 120,
        max: 180,
    },
];

export const treatments = [
    {
        style: "deep conditioning",
        min: 25,
        max: 40,
    },
    {
        style: "keratin smoothing",
        min: 150,
        max: 300,
    },
    {
        style: "scalp",
        min: 30,
        max: 50,
    },
    {
        style: "alaplex",
        min: 40,
        max: 70,
    },
];

export const extensions = [
    {
        style: "tape-in",
        min: 300,
        max: 999,
    },
    {
        style: "clip-in",
        min: 15,
        max: 40,
    },
    {
        style: "braids",
        min: 15,
        max: 30,
    },
];

export const special = [
    {
        style: "bridal",
        min: 200,
        max: 350,
    },
    {
        style: "bridal party",
        min: 75,
        max: 120,
    },
    {
        style: "makeup",
        min: 40,
        max: 75,
    },
];

export const priceList = [
    {
        type: "haircuts & styling",
        prices: haircuts,
    },
    {
        type: "hair color",
        prices: color,
    },
    {
        type: "hair treatments",
        prices: treatments,
    },
    {
        type: "extensions & add-ons",
        prices: extensions,
    },
    {
        type: "special services",
        prices: special,
    },
    
];