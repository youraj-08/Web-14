import React, { useState, useEffect } from "react";
import axios from "axios";
import { TextField, List, ListItem, ListItemText, Avatar, Paper } from "@mui/material";
import Typography from '@mui/material/Typography';

const SpotifySearch = ({ selectedSongs, setSelectedSongs }) => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [accessToken, setAccessToken] = useState("");

    useEffect(() => {
        // Fetch Spotify API Token
        const getToken = async () => {
            const clientId = process.env.REACT_APP_CLIENT_ID;
            const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
            const authString = btoa(`${clientId}:${clientSecret}`);

            try {
                const response = await axios.post(
                    "https://accounts.spotify.com/api/token",
                    "grant_type=client_credentials",
                    {
                        headers: {
                            Authorization: `Basic ${authString}`,
                            "Content-Type": "application/x-www-form-urlencoded",
                        },
                    }
                );
                setAccessToken(response.data.access_token);
            } catch (error) {
                console.error("Error fetching access token:", error);
            }
        };

        getToken();
    }, []);

    useEffect(() => {
        if (query.length < 2) {
            setResults([]);
            return;
        }

        const fetchSongs = async () => {
            try {
                const response = await axios.get(
                    `https://api.spotify.com/v1/search?q=${query}&type=track&limit=5`,
                    {
                        headers: { Authorization: `Bearer ${accessToken}` },
                    }
                );
                setResults(response.data.tracks.items);
            } catch (error) {
                console.error("Error fetching songs:", error);
            }
        };

        const debounceTimeout = setTimeout(fetchSongs, 300); // Debounce API calls
        return () => clearTimeout(debounceTimeout);
    }, [query, accessToken]);

    // Function to handle song selection
    const handleSelectSong = (track) => {
        if (!selectedSongs.some((song) => song.id === track.id)) {
            setSelectedSongs([...selectedSongs, track]);
        }
        setQuery(""); // Clear search bar after selection
        setResults([]); // Hide dropdown
    };

    return (
        <div style={{ width: "400px", margin: "20px auto" }}>
            <TextField
                fullWidth
                label="Search Songs"
                variant="outlined"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <Typography
                variant="caption"
                color="text.secondary"
                sx={{ textAlign: 'center' }}
            >
                Aurora-AI can make mistakes. Check important info.
            </Typography>

            {results.length > 0 && (
                <Paper elevation={3} style={{ position: "absolute", width: "400px", zIndex: 10 }}>
                    <List>
                        {results.map((track) => (
                            <ListItem key={track.id} button onClick={() => handleSelectSong(track)}>
                                <Avatar src={track.album.images[0]?.url} alt={track.name} />
                                <ListItemText primary={track.name} secondary={track.artists.map(a => a.name).join(", ")} />
                            </ListItem>
                        ))}
                    </List>
                </Paper>
            )}
        </div>
    );
};

// Parent Component to Display Selected Songs
const SearchBar = () => {
    const [selectedSongs, setSelectedSongs] = useState([]);

    return (
        <div>
            <SpotifySearch selectedSongs={selectedSongs} setSelectedSongs={setSelectedSongs} />

            <div style={{ marginTop: "20px" }}>
                <h3>Selected Songs:</h3>
                <List>
                    {selectedSongs.map((track) => (
                        <ListItem key={track.id}>
                            <Avatar src={track.album.images[0]?.url} alt={track.name} />
                            <ListItemText primary={track.name} secondary={track.artists.map(a => a.name).join(", ")} />
                        </ListItem>
                    ))}
                </List>
            </div>
        </div>
    );
};

export default SearchBar;
