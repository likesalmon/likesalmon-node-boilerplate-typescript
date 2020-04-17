/**
 * index.js
 */
import logger from './src/utils/logger';
import main from './src/my-module';

logger.info('For best results, use logger instead of console.log.', {
  foo: 'bar',
});

main();
