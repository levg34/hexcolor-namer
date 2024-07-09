import names from './colors-names.json'

// adopted from: Farbtastic 1.2
// http://acko.net/dev/farbtastic
function getHsl(color: string) {
    const rgb = [
        parseInt('0x' + color.substring(1, 3)) / 255,
        parseInt('0x' + color.substring(3, 5)) / 255,
        parseInt('0x' + color.substring(5, 7)) / 255
    ]
    let min, max, delta, h, s, l
    const r = rgb[0],
        g = rgb[1],
        b = rgb[2]

    min = Math.min(r, Math.min(g, b))
    max = Math.max(r, Math.max(g, b))
    delta = max - min
    l = (min + max) / 2

    s = 0
    if (l > 0 && l < 1) s = delta / (l < 0.5 ? 2 * l : 2 - 2 * l)

    h = 0
    if (delta > 0) {
        if (max == r && max != g) h += (g - b) / delta
        if (max == g && max != b) h += 2 + (b - r) / delta
        if (max == b && max != r) h += 4 + (r - g) / delta
        h /= 6
    }
    return [parseInt(String(h * 255)), parseInt(String(s * 255)), parseInt(String(l * 255))]
}

// adopted from: Farbtastic 1.2
// http://acko.net/dev/farbtastic
function getRgb(color: string) {
    return [
        parseInt('0x' + color.substring(1, 3)),
        parseInt('0x' + color.substring(3, 5)),
        parseInt('0x' + color.substring(5, 7))
    ]
}

function init() {
    let color, rgb, hsl
    for (let i = 0; i < names.length; i++) {
        color = '#' + names[i][0]
        rgb = getRgb(color)
        hsl = getHsl(color)
        names[i].push(String(rgb[0]), String(rgb[1]), String(rgb[2]), String(hsl[0]), String(hsl[1]), String(hsl[2]))
    }
}

export function getColorName(color: string): { colorName: string; nearestMatching: string; exactMatch: boolean } {
    const res = name(color)
    return {
        colorName: res[0],
        nearestMatching: res[1],
        exactMatch: res[2]
    }
}

export function name(color: string): [string, string, boolean] {
    color = color.toUpperCase()
    if (color.length < 3 || color.length > 7) return ['#000000', 'Invalid Color: ' + color, false]
    if (color.length % 3 == 0) color = '#' + color
    if (color.length == 4)
        color =
            '#' +
            color.substr(1, 1) +
            color.substr(1, 1) +
            color.substr(2, 1) +
            color.substr(2, 1) +
            color.substr(3, 1) +
            color.substr(3, 1)

    const rgb = getRgb(color)
    const r = rgb[0],
        g = rgb[1],
        b = rgb[2]
    const hsl = getHsl(color)
    const h = hsl[0],
        s = hsl[1],
        l = hsl[2]
    let ndf1 = 0
    let ndf2 = 0
    let ndf = 0
    let cl = -1,
        df = -1

    for (let i = 0; i < names.length; i++) {
        if (color == '#' + names[i][0]) return ['#' + names[i][0], names[i][1], true]

        ndf1 =
            Math.pow(r - Number(names[i][2]), 2) +
            Math.pow(g - Number(names[i][3]), 2) +
            Math.pow(b - Number(names[i][4]), 2)
        ndf2 =
            Math.pow(h - Number(names[i][5]), 2) +
            Math.pow(s - Number(names[i][6]), 2) +
            Math.pow(l - Number(names[i][7]), 2)
        ndf = ndf1 + ndf2 * 2
        if (df < 0 || df > ndf) {
            df = ndf
            cl = i
        }
    }

    return cl < 0 ? ['#000000', 'Invalid Color: ' + color, false] : ['#' + names[cl][0], names[cl][1], false]
}

init()
