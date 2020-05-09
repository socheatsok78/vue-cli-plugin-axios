const packages = require('./packages')

function registerGenerator(api, options, rootOptions) {
    // Extending package
    api.extendPackage(packages)
}

module.exports = registerGenerator
