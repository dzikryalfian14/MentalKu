import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export function ProfileCard(props) {
  return (
    <Card className="w-full py-5 bg-[#F6FDC3]">
      <CardHeader floated={false} className="h-80 bg-inherit shadow-none">
        <img
          src={`./src/assets/teams/${props.noId}-photo.png`}
          alt={`${props.name}-picture`}
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" color="blue-gray" className="my-3">
          {props.name}
        </Typography>
        <Typography color="blue-gray" className="mb-2">
          {props.noId}
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          {props.position}
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <Tooltip content="LinkedIn">
          <Typography
            as="a"
            href={props.linkedInURL}
            variant="lead"
            color="blue"
            textGradient
          >
            <FaLinkedin />
          </Typography>
        </Tooltip>
        <Tooltip content="Instagram">
          <Typography
            as="a"
            href={props.instagramURL}
            variant="lead"
            color="light-blue"
            textGradient
          >
            <FaInstagram />
          </Typography>
        </Tooltip>
      </CardFooter>
    </Card>
  );
}
