exports.createPages = async ({actions, graphql, reporter}) => {
    const result = await graphql(`
        query MyQuery {
            allMdx {
                nodes {
                    frontmatter {
                        title
                    }
                }
            }
        }
    `);

    if(result.errors){
        reporter.panic("failed to create posts", results.errors);
    }
    const blogPosts = result.data.allMdx.nodes;
    blogPosts.forEach(post => {
        actions.createPage({
            path: post.frontmatter.title,
            component: require.resolve("./src/templates/post.jsx"),
            context: {
                title: post.frontmatter.title
            }
        })
    });
}