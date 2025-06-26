// 서비스 워커 버전
const CACHE_VERSION = 'v1';
const CACHE_NAME = `destiny-matrix-${CACHE_VERSION}`;

// 캐싱할 정적 리소스
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.svg',
  '/assets/index-CDZjgdlo.css', // 실제 빌드된 CSS 파일명으로 교체 필요
  '/assets/index-CcCXP4Ye.js'   // 실제 빌드된 JS 파일명으로 교체 필요
];

// 서비스 워커 설치 시
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(STATIC_ASSETS);
      })
  );
});

// 서비스 워커 활성화 시 (이전 캐시 정리)
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// 네트워크 요청 가로채기
self.addEventListener('fetch', (event) => {
  // API 요청은 캐싱하지 않음
  if (event.request.url.includes('/api/')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // 캐시에 있으면 캐시에서 반환
        if (response) {
          return response;
        }

        // 없으면 네트워크 요청
        return fetch(event.request)
          .then((networkResponse) => {
            // 성공적인 응답만 캐시 (실패시 캐싱하지 않음)
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
              return networkResponse;
            }

            // 응답을 복제해서 캐시 (스트림은 한 번만 사용 가능)
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return networkResponse;
          });
      })
  );
});
