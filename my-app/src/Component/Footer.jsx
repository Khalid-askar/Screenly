import React from 'react'

export default function Footer() {
  return <>
  <footer className="bg-pink text-white py-2 text-center mt-5">
  <div className="container">
    <h5><strong>Screenly</strong></h5>
    <p>Your hub for the latest movies and TV shows.</p>
    
    <ul className="list-unstyled d-flex justify-content-center gap-4">
      <li><a className="text-white text-decoration-none" href="/movies">Movies</a></li>
      <li><a className="text-white text-decoration-none" href="/tv">TV Shows</a></li>
      <li><a className="text-white text-decoration-none" href="/login">Login</a></li>
      <li><a className="text-white text-decoration-none" href="/register">Register</a></li>
    </ul>

    <p className="mt-3">© 2025 Screenly. All rights reserved.</p>
  </div>
</footer>

  </>
}
