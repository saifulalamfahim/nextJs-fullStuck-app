import HeroSection from "./HeroSection";
import Movie from "./Movie";



export default async  function Home() {
  const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=68234cd06a5dcf3abf2890260729cfa0')
  const res = await data.json();
  const dataTrending = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=68234cd06a5dcf3abf2890260729cfa0')
  const resTre = await dataTrending.json()
  console.log(resTre);
  return (
    <main >
      <HeroSection/>
      <div className="text-5xl mx-20 my-12 underline underline-offset-4">
        <h1>Popular movies</h1>
      </div>
      <div className="grid gap-16 grid-cols-fluid  mx-20 my-6">
      {
        res.results.map((movie) => (
          <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
          release_date={movie.release_date}s
          />
        ))
      }
      </div>

      <div className="text-5xl mx-20 my-12 underline underline-offset-4">
        <h1>Trending movies</h1>
      </div>
      <div className="grid gap-16 grid-cols-fluid  mx-20 my-6">
      {
        resTre.results.map((movie) => (
          <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
          release_date={movie.release_date}s
          />
        ))
      }
      </div>
    </main>
  )
}
