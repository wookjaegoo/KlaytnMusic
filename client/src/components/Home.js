import React from 'react';
import "./Home.css";


function Home() {
    return (
        <div className="veraxhome" >
            <h1>Welcome to Verax</h1>
            <div className="featured-playlists">
                <h3>Featured Playlists</h3>
                {/* Featured 플레이리스트 목록을 여기에 추가 */}
            </div>

            <div className="new-releases">
                <h3>New Releases Album</h3>
                <div className="album-list1">
                    <img className="album-image1" src="album.png" alt="Album 1" />
                    <img className="album-image1" src="album1.png" alt="Album 2" />
                    <img className="album-image1" src="album2.png" alt="Album 3" />
                    <img className="album-image1" src="album3.png" alt="Album 1" />
                    <img className="album-image1" src="album4.png" alt="Album 2" />
                    <img className="album-image1" src="album5.png" alt="Album 3" />


                </div>
            </div>

            <div>
                <h1>Digital Art</h1>

                <div className="album-list2">
                    <img className="album-image2" src="nft.png" alt="Album 1" />
                    <img className="album-image2" src="nft1.png" alt="Album 2" />
                    <img className="album-image2" src="nft2.png" alt="Album 3" />
                    <img className="album-image2" src="nft3.png" alt="Album 1" />
                    <img className="album-image2" src="nft4.png" alt="Album 2" />
                    <img className="album-image2" src="nft5.png" alt="Album 3" />


                </div>
            </div>

        </div>
    );
}

export default Home;
