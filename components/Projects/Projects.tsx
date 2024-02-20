import { Box, Typography } from "@mui/material";

import Project from "./Project";
import TitleText from "../TitleText";

const Projects = () => {
  return (
    <Box id="projects" p="42px" display="flex" justifyContent="center">
      <Box display="flex" flexDirection="column" maxWidth="726px">
        <Box pb="32px">
          <TitleText>Projects</TitleText>
        </Box>
        <Box display="flex" flexDirection="column" gap="16px">
          <Project
            title="Ultra low power smart lock"
            tag="Electrical engineering"
            overview="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
      mollis purus eget lacus dapibus vestibulum. Nunc neque ante,
      rutrum sit amet rutrum vitae, dignissim at nulla. Suspendisse
      potenti. Maecenas cursus enim nunc, sed aliquam purus interdum
      at. Pellentesque quis gravida lacus. Sed nec cursus nibh. Sed
      condimentum purus imperdiet, viverra odio sed, venenatis ligula.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Praesent volutpat est quis mattis sollicitudin."
            details={
              <Typography fontSize="18px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                mollis purus eget lacus dapibus vestibulum. Nunc neque ante,
                rutrum sit amet rutrum vitae, dignissim at nulla. Suspendisse
                potenti. Maecenas cursus enim nunc, sed aliquam purus interdum
                at. Pellentesque quis gravida lacus. Sed nec cursus nibh. Sed
                condimentum purus imperdiet, viverra odio sed, venenatis ligula.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent volutpat est quis mattis sollicitudin.
              </Typography>
            }
          />
          <Project
            title="MRI registration"
            tag="Artificial intelligence"
            overview="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
    mollis purus eget lacus dapibus vestibulum. Nunc neque ante,
    rutrum sit amet rutrum vitae, dignissim at nulla. Suspendisse
    potenti. Maecenas cursus enim nunc, sed aliquam purus interdum
    at. Pellentesque quis gravida lacus. Sed nec cursus nibh. Sed
    condimentum purus imperdiet, viverra odio sed, venenatis ligula.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Praesent volutpat est quis mattis sollicitudin."
            details={
              <Typography fontSize="18px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                mollis purus eget lacus dapibus vestibulum. Nunc neque ante,
                rutrum sit amet rutrum vitae, dignissim at nulla. Suspendisse
                potenti. Maecenas cursus enim nunc, sed aliquam purus interdum
                at. Pellentesque quis gravida lacus. Sed nec cursus nibh. Sed
                condimentum purus imperdiet, viverra odio sed, venenatis ligula.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent volutpat est quis mattis sollicitudin.
              </Typography>
            }
          />
          <Project
            title="Electrocardiogram"
            tag="Electrical engineering"
            overview="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
  mollis purus eget lacus dapibus vestibulum. Nunc neque ante,
  rutrum sit amet rutrum vitae, dignissim at nulla. Suspendisse
  potenti. Maecenas cursus enim nunc, sed aliquam purus interdum
  at. Pellentesque quis gravida lacus. Sed nec cursus nibh. Sed
  condimentum purus imperdiet, viverra odio sed, venenatis ligula.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Praesent volutpat est quis mattis sollicitudin."
            details={
              <Typography fontSize="18px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                mollis purus eget lacus dapibus vestibulum. Nunc neque ante,
                rutrum sit amet rutrum vitae, dignissim at nulla. Suspendisse
                potenti. Maecenas cursus enim nunc, sed aliquam purus interdum
                at. Pellentesque quis gravida lacus. Sed nec cursus nibh. Sed
                condimentum purus imperdiet, viverra odio sed, venenatis ligula.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent volutpat est quis mattis sollicitudin.
              </Typography>
            }
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
