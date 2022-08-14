# 🚀 My Movies

<img src="https://github.com/AsoStrife/My-Movies-F7-Vue/blob/beee9870670716c96fb081cb5b7ff508fdf89152/resources/demo-app.png?raw=true" style="zoom:50%;" />

This repository is a part of the **My Movies** App project. 

**My movies** is a simple application to monitor which movies you have seen and which you own in 4k blu ray, blu ray, dvd and vhs. It's open source both Front-End and Back-End repository.

- [AsoStrife/My-Movies-Strapi: Strapi Services for My Movies App (BE)](https://github.com/AsoStrife/My-Movies-Strapi)
- [AsoStrife/My-Movies-F7-Vue (FE)](https://github.com/AsoStrife/My-Movies-F7-Vue)



## Run the server

If you're using Docker we suggest you to run the command `docker-compose up -d` to create a localdb for this application.

This app can be run in the following ways:

With `pm2` ([pm2 - npm](https://www.npmjs.com/package/pm2)): 

- `pm2 start npm --name my-movie-strapi -- run develop`
- `pm2 start npm --name my-movie-strapi -- run strapi`



Otherwise Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html) (CLI) which lets you scaffold and manage your project in seconds.

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```
npm run develop
# or
yarn develop
```

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-start)

```
npm run start
# or
yarn start
```

Build your admin panel. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-build)

```
npm run build
# or
yarn build
```

## Deployment

Strapi gives you many possible deployment options for your project. Find the one that suits you on the [deployment section of the documentation](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment.html).

## Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://docs.strapi.io) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

# Link

- [Andrea Corriga (@AsoStrife) • Ph.D. and Software Engineer](https://andreacorriga.com/)
-  [Strapi - Open source Node.js Headless CMS 🚀](https://strapi.io/)
-  [pm2 - npm (npmjs.com)](https://www.npmjs.com/package/pm2)
