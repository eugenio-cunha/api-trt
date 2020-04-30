const { 
  TOKEN,
  NODE_ENV,
  HEADLESS,
  HTTP_HOST,
  HTTP_PORT,
  MONGODB_URL } = process.env;

export const token = TOKEN || '';

export const headless = HEADLESS || true;

export const env = NODE_ENV || 'development';

export const host = HTTP_HOST || '127.0.0.1';

export const port = parseInt(HTTP_PORT || '3000', 10);

export const mongodbUrl = MONGODB_URL || 'mongodb://127.0.0.1:27017/${db}';

