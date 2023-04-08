

export default async function movieDetails({params}) {
    const {movie} =params;
    const imagePath = "https://image.tmdb.org/t/p/original"
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}popular?api_key=68234cd06a5dcf3abf2890260729cfa0`)
    const res = await data.json()
  return (
    <div className=" mx-20 my-6">
      <h1 className="text-2xl">{res.title}</h1>
      <h2 className="texy-lg">{res.release_date}</h2>
      <h2>Runtime: {res.runtime} minutes</h2>
      <h2 className="bg-green-600 inline-block my-2 py-2 px-4 rounded">{res.status}</h2>
      <img className="my-6 " src={imagePath + res.backdrop_path} width={600}/>
      <p>{res.overview}</p>
    </div>
  )
}
