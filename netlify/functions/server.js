// Netlify Functions용 서버 래퍼
import serverless from 'serverless-http';
import express from 'express';
import { registerRoutes } from '../server/routes.js';

const app = express();

// JSON 파싱 미들웨어
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CORS 설정
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// API 라우트 등록
registerRoutes(app);

// Netlify Functions용 핸들러 생성
const handler = serverless(app);

export { handler };
