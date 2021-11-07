// project name
@minLength(3)
@maxLength(21)
@description('Name of this project')
param projectName string = 'jakebayliss'

// environment name like dev, staging, prod
@allowed([
  'dev'
  'test'
  'prod'
])
@description('The environment that this project is being deployed to. (eg. DEv, Test, Prod)')
param environmentName string

@description('Date timestamp of when this deployment was run - defaults to UtcNow()')
param lastDeploymentDate string = utcNow('yyMMddHHmmss')

@description('Resource tags for organizing / cost monitoring')
var tags = {
  project: projectName
  environment: environmentName
  lastDeploymentDate: lastDeploymentDate
}

module staticSite 'staticsite.bicep' = {
  name: '${projectName}-staticsite-${lastDeploymentDate}'
  scope: resourceGroup()
  params: {
    environmentName: environmentName
    appName: projectName
    tags: tags
  }
}
output staticSiteSettings object = staticSite.outputs.settings

module cdn 'cdn.bicep' = {
  name: '${projectName}-cdn-${lastDeploymentDate}'
  scope: resourceGroup()
  params: {
    environmentName: environmentName
    appName: projectName
    tags: tags
    primaryEndpointName: staticSite.outputs.settings.storageAccountName
    primaryEndpointHostName: staticSite.outputs.settings.hostName
  }
}
output cdnSettings object = cdn.outputs.settings
