import axios from 'axios';

const fetchData = async ({ page = 1, id, cast, review, query }) => {
  try {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/trending/movie/day',
      params: { language: 'en-US', page },
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODk2YzdlYjEwYjVjMjliNTY5NTk2MGU5NjNkMWY4ZCIsInN1YiI6IjY1Y2YyZjNkNmQxYmIyMDE3YjRjYTBiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m8nVl861OL3Dq1lfXZAksmRHjMWPzX-ocyWLeaZFlIc',
      },
    };
    if (id) options.url = `https://api.themoviedb.org/3/movie/${id}`;
    if (cast) options.url += `/credits`;
    if (review) options.url += `/reviews`;
    if (query) {
      options.url = 'https://api.themoviedb.org/3/search/movie';
      options.params.query = query;
    }
    const response = await axios.request(options);

    return response.data;
  } catch (error) {
    return error;
  }
};
export default fetchData;
// key = e896c7eb10b5c29b5695960e963d1f8d;
// token =
//   eyJhbGciOiJIUzI1NiJ9
//     .eyJhdWQiOiJlODk2YzdlYjEwYjVjMjliNTY5NTk2MGU5NjNkMWY4ZCIsInN1YiI6IjY1Y2YyZjNkNmQxYmIyMDE3YjRjYTBiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ
//     .m8nVl861OL3Dq1lfXZAksmRHjMWPzX - ocyWLeaZFlIc;

// top movis---------------------------------
// const options = {
//   method: 'GET',
//   url: 'https://api.themoviedb.org/3/trending/movie/day',
//   params: { language: 'en-US' },
//   headers: {
//     accept: 'application/json',
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODk2YzdlYjEwYjVjMjliNTY5NTk2MGU5NjNkMWY4ZCIsInN1YiI6IjY1Y2YyZjNkNmQxYmIyMDE3YjRjYTBiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m8nVl861OL3Dq1lfXZAksmRHjMWPzX-ocyWLeaZFlIc',
//   },
// };

// search movis =======================================
// const options = {
//   method: 'GET',
//   url: 'https://api.themoviedb.org/3/search/movie',
//   params: {query: 'ggghfgh', include_adult: 'false', language: 'en-US', page: '1'},
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODk2YzdlYjEwYjVjMjliNTY5NTk2MGU5NjNkMWY4ZCIsInN1YiI6IjY1Y2YyZjNkNmQxYmIyMDE3YjRjYTBiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m8nVl861OL3Dq1lfXZAksmRHjMWPzX-ocyWLeaZFlIc'
//   }
// };
// Details by id-----------------------------------------------------------;
// const options = {
//   method: 'GET',
//   url: 'https://api.themoviedb.org/3/movie/movie_id',
//   params: {language: 'en-US'},
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODk2YzdlYjEwYjVjMjliNTY5NTk2MGU5NjNkMWY4ZCIsInN1YiI6IjY1Y2YyZjNkNmQxYmIyMDE3YjRjYTBiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m8nVl861OL3Dq1lfXZAksmRHjMWPzX-ocyWLeaZFlIc'
//   }
// };
