import {
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
} from "@/components/landing";

import { TextMoving } from "@/components/ui";
import { Star } from "@/svg";

export default function Home() {
  return (
    <>
      <Section1 />
      <TextMoving lenghtText={8}>
        <p>MANAGEMENT</p>
        <Star />
        <p>BOOKING</p>
        <Star />
        <p>PUBLISHING</p>
        <Star />
        <p>LABEL</p>
        <Star />
      </TextMoving>
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </>
  );
}
