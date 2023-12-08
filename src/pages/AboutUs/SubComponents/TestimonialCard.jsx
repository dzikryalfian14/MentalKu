import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import { FaStar } from "react-icons/fa";

export function TestimonialCard(props) {
  const stars = [];

  for (let i = 0; i < props.rating; i++) {
    stars.push(<FaStar key={i} className="text-yellow-500" />);
  }
  return (
    <Card color="transparent" shadow={false} className="w-full rounded-xl h-50 bg-[#CDFAD5] p-4">
      <CardHeader
        color="transparent"
        floated={false}
        shadow={false}
        className="mx-0 flex items-center gap-4 mt-0 pt-0 pb-2"
      >
        <Avatar
          size="xs"
          variant="circular"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          alt="tania andrew"
          className="rounded-full"
          style={{ width: '80px' }}
        />
        <div className="flex w-full flex-col gap-0.5">
          <div className="flex items-center text-justify">
            <Typography variant="h6" color="blue-gray">
              {props.name}
            </Typography>
            <div className="ps-2 5 flex items-center gap-0">{stars}</div>
          </div>
          <Typography color="blue-gray" className="text-justify">
            {props.location}
          </Typography>
        </div>
      </CardHeader>
      <CardBody className="mb-6 p-0 text-justify h-28">
        <Typography className="text-xs lg:text-sm leading-normal">&quot;{props.quote}&quot;</Typography>
      </CardBody>
    </Card>
  );
}
