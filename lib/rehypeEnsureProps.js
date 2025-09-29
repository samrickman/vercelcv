import { visit } from 'unist-util-visit'

export default function rehypeEnsureProps() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (!node.properties) node.properties = {}
    })
  }
}
