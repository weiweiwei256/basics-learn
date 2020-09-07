const SVGParser = require('convertpath')

const parse = SVGParser.parse('./backup/test.svg', {
  plugins: [
    {
      convertUseToGroup: true, // at first
    },
    {
      convertShapeToPath: true,
    },
    {
      removeGroups: true,
    },
    {
      convertTransfromforPath: true,
    },
    {
      viewBoxTransform: true, // at last
    },
  ],
  size: 1000,
})

const result = parse.toSimpleSvg()
console.log(result)

const paths = parse.getPathAttributes()
console.log(paths)

/**
 * '<circle cx="500" cy="500" r="20" fill="red"/>'
 */
console.log(parse.toSimpleSvg())