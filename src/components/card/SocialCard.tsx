import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
} from '@mui/material';
import { ReactNode } from 'react';

export interface ISocialCardProps {
  avatarImg?: string;
  username: string;
  subheader?: string;
  topAction?: ReactNode;
  bottomAction?: ReactNode;
  content?: ReactNode;
}

export default function SocialCard(props: ISocialCardProps) {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar aria-label={props.username} src={props?.avatarImg}>
            {props.username[0]}
          </Avatar>
        }
        action={props?.topAction}
        title={props.username}
        subheader={props?.subheader}
      />

      <CardContent>{props?.content}</CardContent>
      <CardActions disableSpacing>{props?.bottomAction}</CardActions>
    </Card>
  );
}
