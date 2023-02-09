import axios from 'axios';
import md5 from 'md5';
import { env } from 'process';
import { ENV } from '../config/const';


const publicKey = '7bf427992b7af54fdfcce3e64e29462f';

const privateKey = ENV.ChaveAPI || ''

const ts = Number(new Date());

const hash = md5(ts + privateKey + publicKey);

const api = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public/',
    params: {
        ts,
        apikey: publicKey,
        hash,
    },
});

export default api;
