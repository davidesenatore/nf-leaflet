# NfLeaflet

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.4.

NOTE: This project has been created for the sole purpose of isolate leaflet problem with Native Federation.

To have a look of the problem, start the remote mfe1 with the command

```bash
ng serve mfe1
```
You will find and error in console.
To get rid of the error, simply remove any reference of leaflet and LeafletModule from AppComponent.

## Details

Error in console when you serve mfe1 project (remote)

	SyntaxError: The requested module 'blob:http://localhost:4500/555ddfdc-0367-4c9d-81c8-01e8a08c1ab7' does not provide an export named 'control' (at _bluehalo_ngx_leaflet._mu-Ppo3dO-dev.js:4:23)

Details inside _bluehalo_ngx_leaflet._mu-Ppo3dO-dev.js
	...
	import { latLng, map, control, tileLayer } from /*"leaflet"*/'blob:http://localhost:4500/555ddfdc-0367-4c9d-81c8-01e8a08c1ab7';
	...

It seems that the problem is due to leaflet and not realted to the wrapper @bluehalo/ngx-leaflet
I've tried also without the	@bluehalo/ngx-leaflet, with a direct embedding of leaflet, but the error remains the same.

I have created the problem in the Remote, but you can do the same in shell. And it's not related to dynamic loading of component. I think that it's due to the native federation compilation process.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
