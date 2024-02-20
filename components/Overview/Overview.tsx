import { Box, Typography } from "@mui/material";

import TitleText from "../TitleText";

const Overview = () => {
  return (
    <Box id="about" p="42px" display="flex" justifyContent="center">
      <Box display="flex" flexDirection="column" gap="42px" maxWidth="726px">
        <Box display="flex" flexDirection="column" gap="8px">
          <TitleText>Web Development</TitleText>
          <Typography fontSize="20px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis
            purus eget lacus dapibus vestibulum. Nunc neque ante, rutrum sit
            amet rutrum vitae, dignissim at nulla. Suspendisse potenti. Maecenas
            cursus enim nunc, sed aliquam purus interdum at. Pellentesque quis
            gravida lacus. Sed nec cursus nibh. Sed condimentum purus imperdiet,
            viverra odio sed, venenatis ligula. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Praesent volutpat est quis mattis
            sollicitudin.
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" gap="8px">
          <TitleText>Electrical Engineering</TitleText>
          <Typography fontSize="20px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis
            purus eget lacus dapibus vestibulum. Nunc neque ante, rutrum sit
            amet rutrum vitae, dignissim at nulla. Suspendisse potenti. Maecenas
            cursus enim nunc, sed aliquam purus interdum at. Pellentesque quis
            gravida lacus. Sed nec cursus nibh. Sed condimentum purus imperdiet,
            viverra odio sed, venenatis ligula. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Praesent volutpat est quis mattis
            sollicitudin.
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" gap="8px">
          <TitleText>Artificial Intelligence</TitleText>
          <Typography fontSize="20px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis
            purus eget lacus dapibus vestibulum. Nunc neque ante, rutrum sit
            amet rutrum vitae, dignissim at nulla. Suspendisse potenti. Maecenas
            cursus enim nunc, sed aliquam purus interdum at. Pellentesque quis
            gravida lacus. Sed nec cursus nibh. Sed condimentum purus imperdiet,
            viverra odio sed, venenatis ligula. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Praesent volutpat est quis mattis
            sollicitudin.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Overview;
