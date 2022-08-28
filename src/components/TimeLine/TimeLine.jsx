import React from 'react'
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem"
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import {Event} from '@mui/icons-material';
import { Typography } from "@mui/material";



const TimeLine = ({timelines=[]}) => { // pass an array further adding timeline
  return (
    <div>
        <Timeline position="alternate">
        {
            timelines.map((item,index)=>(

                <TimelineItem key={index}>
                    {/* text become grey */}
                    <TimelineOppositeContent 
                        sx={{m:"auto 0"}}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                    >
                        08/28/2022
                    </TimelineOppositeContent>

                    <TimelineSeparator>
                        <TimelineConnector/>
                        <TimelineDot>
                            <Event/>  {/*replace dot with event icon*/}
                        </TimelineDot>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent sx={{py: "12px", px: 2}}>
                        <Typography variant="h6">Title</Typography>
                        <Typography>Description</Typography>
                    </TimelineContent>
                </TimelineItem>
            ))
        }
        </Timeline>

    </div>
  )
}

export default TimeLine;