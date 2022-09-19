import { Timeline ,TimelineConnector,TimelineContent,TimelineDot,TimelineItem,TimelineOppositeContent,TimelineSeparator} from "@mui/lab"



export const MuiTimeline = () => {
  return (
    <Timeline position="left">
        <TimelineItem>
        <TimelineOppositeContent color='text.secondary'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </TimelineOppositeContent>
            <TimelineSeparator>
<TimelineDot color='warning' variant='outlined'/>
<TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>City A</TimelineContent>
        </TimelineItem>
        <TimelineItem>
        <TimelineOppositeContent color='text.secondary'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </TimelineOppositeContent>
            <TimelineSeparator>
<TimelineDot color='warning'/>
<TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>City B</TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineSeparator>
<TimelineDot color='warning'/>
<TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>City C</TimelineContent>
        </TimelineItem>
    </Timeline>
  )
}
