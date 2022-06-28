// Repository index generator
// 

// List of available icons:  
// https://ionic.io/ionicons
// 

const fs = require('fs')
const Validator = require('jsonschema').Validator;
const validator = new Validator();
const console = require('consola')

function readJson(path) {
  return JSON.parse(fs.readFileSync(path, 'utf8'))
}

function writeJson(path, data) {
  fs.writeFileSync(path, JSON.stringify(data, null, 2))
}


function enforceCategories() {
  const Categories = readJson('./categories.json')
  const Schema = readJson('./schemas/categories.schema.json')
  const validationResult = validator.validate(Categories, Schema)

  if (validationResult.errors.length > 0) {
    console.error(`Invalid categories.json`)
    console.info(validationResults.ToString())
    process.exit(1)
  } else {
    console.success(`categories.json is valid`)
  }
}

function generateAppIndex() {
  try {
    const Apps = []
    const UniqueIds = []

    const categories = readJson('./categories.json')

    fs.readdirSync('./Apps').forEach(path => {
      if (!fs.lstatSync(`./Apps/${path}`).isDirectory) { return }
      
      const appManifest = readJson(`./Apps/${path}/app.json`)

      const Schema = readJson('./schemas/app.schema.json')
      const validationResult = validator.validate(appManifest, Schema)
    
            
      appManifest.App.categories.forEach( category => {
        const foundCategory = categories.filter( c => c.name === category )
        if (foundCategory.length < 1) {
          console.warn(`App "${appManifest.App.name}" has invalid category: ${category}`)
          process.exit(1)
        }
      })

      if (UniqueIds.includes(appManifest.App.id)) {
        console.warn(`Duplicate app id: ${appManifest.App.id} for: ${path}/app.json`)
        process.exit(1)
      }

      UniqueIds.push(appManifest.App.id)
      Apps.push({
        id: appManifest.App.id,
        name: appManifest.App.name,
        description: appManifest.App.description,
        directory: appManifest.App.directory,
        icon: appManifest.App.icon
      })

      if (validationResult.errors.length > 0) {
        console.error(`Invalid app manifest: ${path}/app.json`)
        console.log(validationResults.ToString())
        process.exit(1)
      } else {
        console.success(`App "${appManifest.App.name}" is valid`)
      }
    })

    writeJson( './index.json', Apps.sort() )
  } catch(e) {
    console.error(`${e}`)
  }
}

enforceCategories()
generateAppIndex()