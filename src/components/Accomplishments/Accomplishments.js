import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AccomplishmentsStyles";

const Accomplishments = () => (
  <Section>
    <SectionTitle>My Accomplishments</SectionTitle>
    <Boxes>
      <Box>
        <BoxNum>{`5+`}</BoxNum>
        <BoxText>{`Freelance Projects Completed So Far`}</BoxText>
      </Box>
      <Box>
        <BoxNum>{`1300+`}</BoxNum>
        <BoxText>{`LinkedIn Followers`}</BoxText>
      </Box>
      <Box>
        <BoxNum>{`Certified`}</BoxNum>
        <BoxText>{`MS Office: Word 2016 Specialist`}</BoxText>
      </Box>
      <Box>
        <BoxNum>{`Dean's List`}</BoxNum>
        <BoxText>{`3rd Position in batch - 2nd Semester`}</BoxText>
      </Box>
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Accomplishments;
