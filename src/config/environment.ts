const { NODE_ENV, HTTP_HOST, SOCKET_PORT, HTTP_PORT, MONGODB_URL } = process.env;

export const env = NODE_ENV || 'development';
export const httpHost = HTTP_HOST || '127.0.0.1';
export const httpPort = parseInt(HTTP_PORT || '3000', 10);
export const socketPort = parseInt(SOCKET_PORT || '9018', 10);
export const mongodbUrl = MONGODB_URL || 'mongodb://127.0.0.1:27017/${db}';