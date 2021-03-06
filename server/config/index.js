import {merge} from 'lodash'

const env = process.env.NODE_ENV || 'development'

let secrets
try {
  secrets = require('./env/secrets').default
} catch (err) {
  secrets = require('./env/secrets-template').default
} // eslint-disable-line no-empty

export default merge(
  require('./env/all').default,
  require(`./env/${env}`).default,
  secrets
)
