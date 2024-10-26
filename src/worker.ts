import { Worker } from 'bullmq';
import { redisConfig } from './config/redis';

const worker = new Worker('types', async type => {
    console.log(type.data)
}, { connection: redisConfig });

worker.on('completed', type => {
    console.log(`${type.id} has completed!`);
});
  
worker.on('failed', (type, err) => {
    console.log(`${type!.id} has failed with ${err.message}`);
});