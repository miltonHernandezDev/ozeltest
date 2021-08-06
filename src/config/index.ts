
import  * as bcrypt from 'bcrypt'; 
import envPath from './enviroments';

export const bcrypt_pass = (password:string)=> bcrypt.hashSync(password, Number(envPath.bcr_salt));

export const bcrypt_validate = (password:string, passwordHash:string)=> bcrypt.compareSync(password, passwordHash);

export const bcrypt_validate_key = (password:string)=> bcrypt.getRounds(password);