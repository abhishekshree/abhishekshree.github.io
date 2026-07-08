import { visit } from 'unist-util-visit'
import sizeOf from 'image-size'
import fs from 'fs'

export default (options) => (tree) => {
  visit(
    tree,
    (node) => node.type === 'paragraph' && node.children.some((n) => n.type === 'image'),
    (node) => {
      const imageNode = node.children.find((n) => n.type === 'image')

      if (fs.existsSync(`${process.cwd()}/public${imageNode.url}`)) {
        const dimensions = sizeOf(`${process.cwd()}/public${imageNode.url}`)

        imageNode.type = 'jsx'
        imageNode.value = `<img
          alt={\`${imageNode.alt}\`} 
          src={\`${imageNode.url}\`}
          width={${dimensions.width}}
          height={${dimensions.height}}
      />`

        node.type = 'div'
        node.children = [imageNode]
      }
    }
  )
}
