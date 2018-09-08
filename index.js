const fs = require('fs')
const sharp = require('sharp');

const src_dir = './src'
const output_dir = "./out"
const output_sizes = [768,400]

fs.readdir(src_dir, (err, img_names) => {
  if (err) throw err;
  img_names.forEach((img_name) => {
    output_sizes.forEach((new_size) => {
    sharp(`${src_dir}/${img_name}`)
      .resize(new_size)
      .jpeg({
        quality: 100,
        chromaSubsampling: '4:4:4'
      })
      .toFile(`${output_dir}/${new_size}/${img_name.replace('.png', '.jpg')}`)
    })
  })
})