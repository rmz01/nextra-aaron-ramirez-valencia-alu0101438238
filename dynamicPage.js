/* a function that is a template for a mdx page */
import { replaceQuotes } from '@/src/utils'

export default res => replaceQuotes(`
# buildDynamicMDX and RemoteContent

## Code example

Here is some code:

"""js copy
let a=4
""" 

## A \\"cat\\"

<Cat />

## Random numbers

${res}  

## Frontmatter Value

<ShowFrontmatter />
`)
