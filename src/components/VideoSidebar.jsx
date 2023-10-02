import React from "react";
import { Box, Grid } from "@mui/material";

import { VideoCard, ChannelCard } from "./";

const VideoSidebar = ({ videos, direction }) => {
  if (!videos?.length) return "Loading...";
  return (
    <Box width="350px">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {videos.map((item, idx) => (
            <Grid item key={idx} xs={12} sm={12} md={12}>
              {item.id.videoId && <VideoCard video={item} />}
              {item.id.channelId && <ChannelCard channelDetail={item} />}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default VideoSidebar;
