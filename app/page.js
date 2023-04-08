import HeroSection from "./HeroSection";
import Movie from "./Movie";



export default async  function Home() {
  const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=68234cd06a5dcf3abf2890260729cfa0')
  const res = await data.json()
  return (
    <main >
      <HeroSection/>
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
    </main>
  )
}
