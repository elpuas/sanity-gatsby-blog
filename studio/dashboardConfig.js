export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e2cfced8ac2c880d94ef9f0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-66mpg63w',
                  apiId: '3dfd32c9-1124-42e0-8cce-d6d5fceaf72a'
                },
                {
                  buildHookId: '5e2cfceee3ba0159833b1ecf',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-5fvderuu',
                  apiId: '90524341-967d-4236-840f-d187ef4a068f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/elpuas/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-5fvderuu.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
