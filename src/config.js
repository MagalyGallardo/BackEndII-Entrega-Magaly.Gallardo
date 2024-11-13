import * as url from 'url';

const config = {
    APP_NAME: 'coderbackend',
    PORT: 5050,
    DIRNAME: url.fileURLToPath(new URL('.', import.meta.url)),
    get UPLOAD_DIR() { return "${this.DIRNAME}/public/uploads" },
    MONGODB_URI: 'mongodb://127.0.0.1:27017/coder70190',
    SECRET: 'backsecret',
    GITHUB_CLIENT_ID: 'Ov23lizAKiyIzO6E0shW',
    GITHUB_CLIENT_SECRET: '71f9e6d5defe481977d48e8c440a86d736e687e9',
    GITHUB_CALLBACK_URL: 'http://localhost:3000/api/users/githubcallback'
};

export default config;