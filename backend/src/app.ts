import 'reflect-metadata';
import * as dotenv from 'dotenv';
import { createConnection } from 'typeorm';
dotenv.config();

export const start = async () => {
    try {
        const connection = await createConnection();
        console.log('Banco de dados conectado.');

        process.exit(0);
    } catch (error: unknown) {
        console.log('[ERRO] Banco de dados não pode ser acesado.', error);
        process.exit(1);
    }
};

start();