import { useState, useEffect } from "react";
import { IconButton, Tooltip, Typography, Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import axios from "axios";

const LikeButton = ({ projectName }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const getUserId = () => {
    let id = localStorage.getItem("userId");
    if (!id) {
      id = "user-" + Math.random().toString(36).substr(2, 9);
      localStorage.setItem("userId", id);
    }
    return id;
  };

  useEffect(() => {
    const userId = getUserId();
    axios
      .get(`http://localhost:5000/api/likes/${encodeURIComponent(projectName)}`, { params: { userId } })
      .then((res) => {
        setLikeCount(res.data.likeCount);
        setLiked(res.data.liked);
      })
      .catch(() => {});
  }, [projectName]);

  const handleToggle = async (e) => {
    e.stopPropagation();
    const userId = getUserId();
    try {
      const res = await axios.post(
        `http://localhost:5000/api/likes/${encodeURIComponent(projectName)}`,
        { userId }
      );
      setLikeCount(res.data.likeCount);
      setLiked(res.data.liked);
    } catch {}
  };

  return (
    <Tooltip title={`${likeCount} like${likeCount !== 1 ? "s" : ""}`} arrow>
      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
        <IconButton
          onClick={handleToggle}
          size="small"
          sx={{
            color: liked ? "#f43f5e" : "text.secondary",
            borderRadius: "10px",
            p: 0.7,
            border: "1px solid",
            borderColor: liked ? "rgba(244,63,94,0.3)" : "divider",
            bgcolor: liked ? "rgba(244,63,94,0.08)" : "transparent",
            transition: "all 0.25s ease",
            "&:hover": {
              color: "#f43f5e",
              borderColor: "rgba(244,63,94,0.5)",
              bgcolor: "rgba(244,63,94,0.12)",
              transform: "scale(1.1)",
            },
          }}
        >
          {liked ? <FavoriteIcon fontSize="small" /> : <FavoriteBorderIcon fontSize="small" />}
        </IconButton>
        {likeCount > 0 && (
          <Typography variant="caption" sx={{ fontWeight: 700, color: "text.secondary", fontSize: "0.75rem" }}>
            {likeCount}
          </Typography>
        )}
      </Box>
    </Tooltip>
  );
};

export default LikeButton;
