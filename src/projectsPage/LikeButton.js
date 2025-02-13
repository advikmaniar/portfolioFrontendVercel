import { useState, useEffect } from "react";
import { IconButton, Tooltip } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import axios from "axios";

const LikeButton = ({ projectName }) => {
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);

    useEffect(() => {
        const userId = generateUserId();
        axios.get(`https://portfoliobackendrender.onrender.com/api/likes/${encodeURIComponent(projectName)}`, {
            params: { userId }
        })
            .then((response) => {
                setLikeCount(response.data.likeCount);
                setLiked(response.data.liked);
            })
            .catch((error) => {
                console.error("Error fetching likes:", error);
            });
    }, [projectName]);

    const handleLikeToggle = async (event) => {
        event.stopPropagation();
        const userId = localStorage.getItem("userId") || generateUserId();
        try {
            const response = await axios.post(`https://portfoliobackendrender.onrender.com/api/likes/${encodeURIComponent(projectName)}`, {
                userId
            });
            setLikeCount(response.data.likeCount);
            setLiked(response.data.liked);
        } catch (error) {
            console.error("Error updating likes:", error);
        }
    };

    const generateUserId = () => {
        const id = "user-" + Math.random().toString(36).substr(2, 9);
        localStorage.setItem("userId", id);
        return id;
    };

    return (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Tooltip title={`${likeCount} Likes`} arrow>
                <IconButton
                    sx={{
                        color: liked ? "red" : "grey",
                        borderRadius: "30%",
                        "&:hover": {
                            transform: "scale(1.2)",
                            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)",
                        },
                        transition: "all 0.3s ease",
                    }}
                    onClick={handleLikeToggle}
                >
                    <FavoriteIcon />
                </IconButton>
            </Tooltip>
        </div>
    );
};

export default LikeButton;
