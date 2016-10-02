# Workshop 2016
These are the code samples from my 2016 workshops focusing on SharePoint and Office 365 development using Angular 2, ASP.NET Core 1.0, Node, and the SharePoint Framework.

## Prerequisites
While it is possible to use just about any development environment you like with these samples (Brackets, Visual Studio Code, Visual Studio), the workshop focuses on using Visual Studio 2015 so that you can take advantage of other technologies like ASP.NET Core 1.0. So, for best results, you should set up your development environment as follows:

### Visual Studio 2015
Make sure you are on the latest Visual Studio update. As of September 2016, this is **Update #3**

[https://go.microsoft.com/fwlink/?LinkId=691129](https://go.microsoft.com/fwlink/?LinkId=691129)

Install **Node.js Tools for Visual Studio**, which will allow Visual Studio to function as a Node development environment

[https://www.visualstudio.com/en-us/features/node-js-vs.aspx](https://www.visualstudio.com/en-us/features/node-js-vs.aspx)

### NODE JS
After installing and updating Visual Studio, install the latest version of node.js

[https://nodejs.org/en/download/](https://nodejs.org/en/download/)

When you have the latest version, start the node.js command prompt to install the rest of the tooling

Get the latest version of the Node Package Manager

**npm -g install npm@next**

Install Yeoman and Gulp

**npm i -g yo gulp**

Get Microsoft Yeoman generator latest version 

**npm i -g @microsoft/generator-sharepoint@latest**


### TypeScript
Updating Visual Studio should give you the latest TypeScript, but for the workshop, I am using TypeScript 2 Beta. You can get TypeScript 2 Beta in two ways:

Either a download link:

[http://download.microsoft.com/download/6/D/8/6D8381B0-03C1-4BD2-AE65-30FF0A4C62DA/TS2.0.0-TS-release20-nightly-20160708.1/TypeScript_Dev14Full.exe](http://download.microsoft.com/download/6/D/8/6D8381B0-03C1-4BD2-AE65-30FF0A4C62DA/TS2.0.0-TS-release20-nightly-20160708.1/TypeScript_Dev14Full.exe)

Or install through npm:

**npm install -g typescript@beta**


### SharePoint Development Tenant
Set up a SharePoint development tenancy as described in this article:

[http://dev.office.com/sharepoint/docs/spfx/set-up-your-developer-tenant](http://dev.office.com/sharepoint/docs/spfx/set-up-your-developer-tenant)





## The Samples

### Embedded [Updated to Angular 2, RC6]
This sample demonstrates how to use Angular 2 in SharePoint with a Site Page

#### Set up
1. Upload **Angular2SitePage.aspx** to a Document Library in SharePoint (on premises or online) 
2. Navigate to the page in the bowser

### HelloAngular2 [Updated to Angular 2, RC6]
This is a simple Hello, World sample using Angular2 and TypeScript 

#### Set up
1. Run the node command prompt, change directory to **HelloAngular2\src\HelloAngular2\wwwroot**
2. Execute **npm install**
3. Open **HelloAngular2.sln** in Visual Studio 2015
4. Run the project


### Modules
This sample demonstrates various techniques for loading modules in JavaScript including require, system, and TypeScript

#### Set up
1. Run the node command prompt, change directory to **Modules\src\Modules\wwwroot**
2. Execute **npm install**
3. Open **Modules.sln** in Visual Studio 2015
4. Run the project


### Ng2CliBasics [Updated to v2]
This sample is just the simple output of creating a project using Angular CLI

#### Set up
1. Run the node command prompt, change directory to **Modules\src\Modules\wwwroot**
2. Execute **npm install**
3. Make sure you have Angular CLI installed by running **npm install -g angular-cli**
4. Run the project from the node command prompt by typing **ng serve**


### Ng2NET45Basics [Updated to Angular 2, RC6]
This sample demonstrates Angular 2 from an ASP.NET 4.5 project

#### Set up
1. Open **Ng2NET45Basics.sln** in Visual Studio 2015
2. Right click **package.json** and restore the npm packages
3. Run the project

### Ng2NETCoreBasics [Updated to Angular 2, RC6]
This sample demonstrates Angular 2 from an ASP.NET Core 1.0 project

#### Set up
1. Open **Ng2NETCoreBasics.sln** in Visual Studio 2015
2. Right click **package.json** and restore the npm packages
3. Run the project

### Ng2NodeBasics [Updated to Angular 2, RC6]
This sample demonstrates Angular 2 using NODE JS Tools for Visual Studio

#### Set Up
1. Open **Ng2NodeBasics.sln** in Visual studio 2015
2. Right click **package.json** and restore the npm packages
3. Run the project

### Ng2SPFxBasics [Updated to Angular 2, RC6 and SPFx Drop #2]
Demonstrates Angular 2 from a SharePoint Framework client web part

#### Set Up
1. Open **ng-2-sp-fx-basics.sln** in Visual Studio 2015
2. Start a node.js command prompt and change directory to the **Ng2SPFxBasics** folder
3. Restore packages by typing **npm install**
4. Run the project from within Visual Studio using the local workbench
5. If you have it set up, then you can also run it from the workbench in SharePoint

### NgSPAddInBasics [Updated to Angular 2, RC6]
Demonstrates a simple Hello, World! SharePoint-hosted app

#### Set Up
1. Open **NgSPAAddInBasics.sln** in Visual Studio
2. Start a node.js command prompt and change directory to the **app** folder
3. Restore packages by typing **npm install**
4. Provide a target SharePoint site in the **Site URL** property
5. Run the project

### Observables [Updated to Angular 2, RC6]
Demonstrates the use of a simple Angular 2 service, a subscription, and the HTTP service in async programming

#### Set Up
1. Open **Observables.sln** in Visual Studio
2. In the Solution Explorer, expand the ***wwwroot** folder
3. Right click **package.json** and select **Restore Packages**
4. Run the project

### SPFxBasics
This is a simple Hello, World part

#### Set Up
1. Open **sp-fx-basics.sln** in Visual Studio 2015
2. Start a node.js command prompt and change directory to the **SPFxBasics** folder
3. Restore packages by typing **npm install**
4. Run the project from within Visual Studio using the local workbench
5. If you have it set up, then you can also run it from the workbench in SharePoint

### SPFxProperties
This shows how to use all the different types of properties in the SharePoint Framework

#### Set Up
1. Open **sp-fx-properties.sln** in Visual Studio 2015
2. Start a node.js command prompt and change directory to the **SPFxProperties** folder
3. Restore packages by typing **npm install**
4. Run the project from within Visual Studio using the local workbench
5. If you have it set up, then you can also run it from the workbench in SharePoint

### SPFxSharePoint[Updated to Angular 2, RC6 and SPFx Drop #2]
This shows how to access SharePoint lists using the REST API

#### Set Up
1. Open **sp-fx-sharepoint.sln** in Visual Studio 2015
2. Start a node.js command prompt and change directory to the **SPFxSharePoint** folder
3. Restore packages by typing **npm install**
4. Update the project code IN **service.list.ts** to point to a SharePoint site that contains an **Announcements** list
5. Run the project from within Visual Studio using the local workbench and it will use mock list data
6. If you have it set up, then you can also run it from the workbench in SharePoint and it will access the live data

### WebPackDemo
Demonstrates a simple use of webpack with a node.js project

#### Set Up
1. Open **WebPackDemo.sln** in Visual Studio
2. Run the project