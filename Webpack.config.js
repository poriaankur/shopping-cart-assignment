const path = require('path');
const webpack= require('webpack');
const HandlebarsPlugin = require("handlebars-webpack-plugin");
const mergeJSON = require('handlebars-webpack-plugin/utils/mergeJSON');
const projectData = mergeJSON(path.join(__dirname, "server/**/*.json"));

// console.log(projectData)
module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
         test: /\.(s(a|c)ss)$/,
         use: ['style-loader','css-loader', 'sass-loader']
      }
    ]
},  
  
  plugins: [
    new webpack.ProvidePlugin({
      $:'jquery',
      jQuery:'jquery'
    }),
    new HandlebarsPlugin({
      // path to hbs entry file(s). Also supports nested directories if write path.join(process.cwd(), "app", "src", "**", "*.hbs"),
      entry: path.join(process.cwd(),"src", "*.hbs"),

      data: projectData,

      // data: require(path.join(process.cwd(), "server","**", "index.get.json")),
      // data: require("./server/products/index.get.json"),
      
      partials: [
        path.join(process.cwd(),"src","_partials", "*.hbs")
      ],
      // output path and filename(s). This should lie within the webpacks output-folder
      // if ommited, the input filepath stripped of its extension will be used
      output: path.join(process.cwd(), "dist", "[name].html"),
      // you can also add a [path] variable, which will emit the files with their relative path, like
      // output: path.join(process.cwd(), "build", [path], "[name].html"),
      
      // data passed to main hbs template: `main-template(data)`
      // data: require("./server/categories/index.get.json"),
      
      // or add it as filepath to rebuild data on change using webpack-dev-server
      // data: path.join(__dirname, "app/data/project.json"),
 
      // globbed path to partials, where folder/filename is unique

 
      // register custom helpers. May be either a function or a glob-pattern
      //  helpers: {
      //   // nameOfHbsHelper: Function.prototype,
      //   projectHelpers: path.join(process.cwd(), "src", "_helpers", "*.helper.js")
      // },
 
      // hooks
      // getTargetFilepath: function (filepath, outputTemplate) {},
      // getPartialId: function (filePath) {},
      onBeforeSetup: function (Handlebars) {},
      onBeforeAddPartials: function (Handlebars, partialsMap) {},
      onBeforeCompile: function (Handlebars, templateContent) {},
      onBeforeRender: function (Handlebars, data, filename) {},
      onBeforeSave: function (Handlebars, resultHtml, filename) {},
      onDone: function (Handlebars, filename) {}
    })
  ]

};