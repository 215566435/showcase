import { DefaultConfig } from './config.default'

export default () => {
  const config: DefaultConfig = {}
  config.sequelize = {
    dialect: 'mysql', // db type
    database: 'zongheng',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'metal_gear2',
    dialectOptions: {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      supportBigNumbers: true,
      bigNumberStrings: true
    },
    define: {
      underscored: true,
      charset: 'utf8mb4'
    }
  }
  return config
}
