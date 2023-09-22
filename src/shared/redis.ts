import { createClient } from 'redis';
import logger from './logger';
import config from '../config';

let redisClient = createClient({
  url: config.redis_url
});
redisClient.on('error', (err) => {
  logger.error('RedisError', err);
  console.log(err);
});
redisClient.on('connect', (err) => {
  //   logger.('RedisConneted', ' wow redis connected');
  console.log(err);
});

const connect = async (): Promise<void> => {
  await redisClient.connect();
};
export const RedisClient = {
  connect
};
