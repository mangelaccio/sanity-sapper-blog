export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '607e7cec9eb199be17c61b49',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-vq3f4rjb',
                  apiId: '14ae5e32-a3fb-46da-a045-0ff517e75eba'
                },
                {
                  buildHookId: '607e7cec5de5dfbe45f77ec3',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-cx8c95pn',
                  apiId: '90791a6c-fc25-4bc4-ac79-298d7937481f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mangelaccio/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-cx8c95pn.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
