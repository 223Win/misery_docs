import nextra from 'nextra'
 
const withNextra = nextra({
    mdxOptions: {
        rehypePrettyCodeOptions: {
            theme: 'github-dark',  // or any theme you want
            keepBackground: false, 
        }
    }
})
 
export default withNextra(
    {
        turbopack: {
            resolveAlias: {
                'next-mdx-import-source-file': './src/mdx-components.tsx'
            }
        }
    }
)