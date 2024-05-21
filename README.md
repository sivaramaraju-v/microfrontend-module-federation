# Creating Microfrontend with Module Federation Plugin from Webpack 5

This document outlines the steps followed to create a microfrontend using the Module Federation Plugin from Webpack 5. The process involves two Angular v16 applications:

1. **Microfrontend Application (MFE App)**: Also referred to as the VHOS application, this application exposes the modules using Module Federation.
2. **Host Application (Hosp App)**: Also referred to as the DSP application, this application imports and uses the exposed modules using `loadRemoteModule` from Module Federation.

## Exposed Modules

Three modules were exposed:

1. List of Sites
2. List of Products
3. Opportunities (in progress)

## Module Federation Plugin Configuration

The `ModuleFederationPlugin` was configured as follows:

```javascript
new ModuleFederationPlugin({
  name: "mfeApp",
  filename: "remoteEntry.js",
  exposes: {
    "./SitesModule": "./projects/mfe-app/src/app/sites/sites.module.ts",
    "./ProductsModule": "./projects/mfe-app/src/app/products/products.module.ts",
    "./OpportunitiesModule": "./projects/mfe-app/src/app/opportunities/opportunities.module.ts",
  },
});
```

In this configuration, the `filename` is set to `remoteEntry.js`. This is the file to which Module Federation exposes our modules, and it can be consumed in the Host Application using this URL: `http://localhost:4300/remoteEntry.js`.

## Consuming a Module

When a user navigates to a certain path, a module is consumed as follows:

```javascript
{
  path: 'sites',
  loadChildren: () => {
    return loadRemoteModule({
      remoteEntry: MFE_APP_URL,
      remoteName: 'mfeApp',
      exposedModule: './SitesModule',
    })
      .then((m) => m.SitesModule)
      .catch((err) => console.log(err));
  },
}
```

By following this approach, applications can be built faster, with less configuration. The Host Application does not need to know what changes are made in the Microfrontend Application. This promotes a decoupled architecture, where each application can evolve independently, reducing the overall complexity and increasing the speed of development.

# MonoWorkspace

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
