import * as dotenv from 'dotenv';
 
const envPath = ()=>{

    dotenv.config({ path:'src/env/.env' });



    return {
        db_connection:`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_URL}/${process.env.DB_DATABASE}?retryWrites=true&w=majority`,
        jwt:process.env.TKN_PASS,
        bcr_salt:process.env.BCR_SALT,
        PORT:4000
    }
}


export default envPath();