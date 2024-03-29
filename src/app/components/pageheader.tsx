import { Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { PiLinkBold } from "react-icons/pi";

export default function Pageheader ( {title, tag, color}:{title:string, tag:string, color?:string}){
  return (
    <>
      <Stack direction='row' alignItems={"center"} justifyContent={"center"} >
        <a href={`#${tag}`}>
          <PiLinkBold className='pagetitle' size={32} color='grey' />
        </a>
        <Typography variant='h3' fontFamily={"TheJamsil"} fontWeight={700} color={color ? color : "black"}
        sx={{whiteSpace: 'nowrap'}}>
          {title}
        </Typography>
      </Stack>
      <Divider orientation='horizontal' flexItem sx={{ borderWidth: "1.5px" }} color={color ? color : "lightgrey"} />
    </>
  );
}

