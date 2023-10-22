import { config } from 'dotenv'
config();

export default {
    port: process.env.PORT || 3000,
    dbUser: process.env.SQL_USER || '',
    dbPassword: process.env.SQL_PASSWORD || '',
    dbServer: process.env.SQL_SERVER || '',
    dbDatabase: process.env.SQL_DATABASE || '',
};