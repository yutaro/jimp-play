const jimp = require('jimp')

main()

async function main() {
    const image = await jimp.read('./src/yutaro.jpg')
    image.resize(256, 256)
        .write('./image/resize.png')
    image.sepia()
        .write('./image/sepia.png')
    image.color([{ apply: 'red', params: [100] }])
        .write('./image/red_100.png')
}