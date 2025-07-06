import React from 'react'

const Image_frame = () => {
  return (
      <div className="abosulte p-[5rem]">
        <img className="h-[20rem] w-[30rem] z-40 relative " src="https://imgs.search.brave.com/gP6araDuLtdxSvLhAFptNnBji59qhJc0yphphabzIwc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTUv/MjA1Lzg5NC9zbWFs/bC9wb3J0cmFpdC1v/Zi15b3VuZy1zdHVk/ZW50LXRoYXQtc2l0/cy1pbi1jYWZlLWF0/LXJhaW55LWRheS1v/bmUtcGVyc29uLXBo/b3RvLmpwZw" alt="image" />
        <img className="h-[20rem] w-[30rem] z-20 relative bottom-75 left-5 rounded-md" src="/public/image_back.png" alt="frame" />
    </div>
  )
}

export default Image_frame