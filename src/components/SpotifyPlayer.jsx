export function SpotifyPlayer({ spotifyUri }) {
  const spotifyEmbedUrl = `https://open.spotify.com/embed/${spotifyUri}`

  return (
    <div className="mx-left w-full max-w-xl overflow-hidden rounded-xl">
      <iframe
        src={spotifyEmbedUrl}
        width="100%"
        height="380"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
        className="shadow-lg"
      ></iframe>
    </div>
  )
}
