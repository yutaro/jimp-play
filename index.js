const jimp = require('jimp')

main()

async function main() {
    const image = await jimp.read('./src/yutaro.jpg')
    const processes = {
        resize: img => img.resize(255, 255),
        sepia:  img => img.sepia(),
    }

    for (let i = -90; i <= 90; i += 10) {
        processes[`hue/${i}`] = img => img.color([{ apply: 'hue', params: [i] }])
        processes[`saturate/${i}`] = img => img.color([{ apply: 'saturate', params: [i] }])
        processes[`lighten/${i}`] = img => img.color([{ apply: 'lighten', params: [i] }])
        processes[`darken/${i}`] = img => img.color([{ apply: 'darken', params: [i] }])
    }

    for( const label in processes ) {
        process(image, label, processes[label])
    }
}


async function process(image, label, callback) {
    const img = image.clone()
    callback(img)
        .write(`./image/${label}.png`)
}