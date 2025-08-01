export const createPageUrl = (pageName, params = '') => {
  const routes = {
    'Dashboard': '/dashboard',
    'CreateBrief': '/create-brief',
    'BriefDetail': '/brief-detail',
    'Research': '/research'
  }
  
  const basePath = routes[pageName] || '/'
  return params ? `${basePath}${params}` : basePath
}