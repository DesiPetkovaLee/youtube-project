import React from "react";
import { Box, Grid } from "@mui/material";

import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return "Loading...";
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {videos.map((item, idx) => (
          <Grid item key={idx} xs={12} sm={4} md={3}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Videos;
