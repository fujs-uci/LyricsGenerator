import React, { useState } from 'react';
import '../styles/settings.css';
import Select from 'react-select';

function Settings() {

    const [ charSeed, setCharSeed ] = useState('');
    const [ genres, setGenres ] = useState([]);
    const [ artists, setArtists ] = useState([]);
    const [ lyrics, setLyrics ] = useState('');
    const [ loading, setLoading ] = useState(false);

    //TODO send request to backend 
    // to get list of genres & artists
    let alphabetArray = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    const lyricSeed = [];
    for( let i = 0; i < alphabetArray.length; i++ ){
        lyricSeed.push({ 'label': alphabetArray[i], 'value': alphabetArray[i] });
    }
    
    const musicGenres = [
        { label: 'Country', value: 'Country' },
        { label: 'R&B', value: 'R&B' },
        { label: 'Pop', value: 'Pop' },
        { label: 'Rock', value: 'Rock' },
    ]
    const musicArtists = [
        { label: 'Taylor Swift', value: 'Taylor Swift' },
        { label: 'Usher', value: 'Usher' },
        { label: 'BlackPink', value: 'BlackPink' },
        { label: 'Metalica', value: 'Metalica' },
    ]

    const handleOnChange = e => {
        setCharSeed(e.value);
    }

    const handleOnSubmit = e => {
        e.preventDefault();
        setLoading(true);
        // TODO
        // send settings to backend
        // update lyrics and display
        setLoading(false);
        setLyrics("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis tincidunt elit, at volutpat tellus sodales nec. Pellentesque rhoncus blandit mauris vitae fringilla. In molestie, metus quis posuere dictum, enim nisi elementum nunc, et lacinia dui eros ut ipsum. Morbi semper dui elit, et dapibus dolor malesuada non. Morbi pharetra tempor nisl. Fusce faucibus ex vel odio dictum pharetra. Nam at nisi odio. Nunc eu vulputate elit. Maecenas convallis massa vel venenatis cursus. Aliquam nec quam vitae leo commodo vehicula et vehicula magna. Aliquam pharetra nibh id lacus molestie convallis. Nam molestie imperdiet eros, vestibulum mattis sem mattis non. Integer tincidunt nunc arcu, at finibus ligula laoreet quis. Aenean neque dui, efficitur vel mauris in, mollis semper dolor. Maecenas tincidunt arcu ac bibendum ultrices. Duis nulla ipsum, vestibulum euismod fringilla sodales, viverra vitae dui. Aliquam quis posuere lorem, ut venenatis elit. Nullam laoreet venenatis nisl nec tempor.");
    }

    return (
        <div className="settings">
            <div className="settings__container">
                <div className="settings__title">
                    <h3>Settings</h3>
                </div>
                <form onSubmit={handleOnSubmit}>
                    <div className="settings__dropdown">
                        <Select options={lyricSeed} 
                                onChange={opt => handleOnChange(opt)}
                                placeholder="Seed"
                                required/>
                    </div>
                    <div className="settings__dropdown">
                        <Select options={musicGenres} isMulti 
                            onChange={opt => setGenres(opt)}
                            placeholder="Genres"/>
                    </div>
                    <div className="settings__dropdown">
                        <Select options={musicArtists} isMulti
                            onChange={opt => setArtists(opt)}
                            placeholder="Artists"/>
                    </div>
                    <button type="submit" disabled={loading}>
                        { loading? (<div>Loading</div>): (<div>Generate</div>) }
                    </button>
                </form>
            </div>
            
            {lyrics.length > 0 && (
                <div className="settings__container">
                    <div className="settings__result">
                        {lyrics}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Settings;
