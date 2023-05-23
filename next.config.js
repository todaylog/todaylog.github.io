// const API_KEY = process.env.API_KEY;

const debug = process.env.NODE_ENV !== 'production';

module.exports = {
    reactStrictMode: true,
    assetPrefix: !debug ? `/` : '', // production 일때 prefix 경로
    trailingSlash: true, // 빌드 시 폴더 구조 그대로 생성하도록

    async redirects() {
        return [
            {
                source: '/old-blog/:path*',
                destination: '/new-sexy-blog/:path*',
                permanent: false,
            },
        ];
    },
    // async rewrites() {
    //   return [
    //     {
    //       source: "/api/movies",
    //       destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
    //     },
    //     {
    //       source: "/api/movies/:id",
    //       destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
    //     },
    //   ];
    // },
};
