import {
  AspectRatio,
  Box,
  Card,
  CardContent,
  ColorPaletteProp,
  Divider,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListSubheader,
  Sheet,
  Typography,
} from "@mui/joy";
import { FC, useState } from "react";

const Footer: FC = () => {
  // eslint-disable-next-line
  const [color, setColor] = useState<ColorPaletteProp>("neutral");

  const getCard = (
    title: string,
    linkText: string,
    link: string,
    imgUrl: string
  ): JSX.Element => {
    return (
      <Card
        variant="soft"
        size="sm"
        sx={{
          flexDirection: { xs: "row", md: "column" },
          minWidth: { xs: "100%", md: "100px" },
          gap: 1,
        }}
      >
        <AspectRatio
          ratio="21/9"
          minHeight={80}
          sx={{ flexBasis: { xs: 200, md: "initial" } }}
        >
          <img alt="" src={imgUrl} />
        </AspectRatio>
        <CardContent>
          <Typography level="body2">{title}</Typography>
          <Typography level="body3" sx={{ mb: 0.5 }}>
            <Link href={link} color="neutral">
              {linkText}
            </Link>
          </Typography>
        </CardContent>
      </Card>
    );
  };

  return (
    <Box sx={{width: 1, bottom: 0}}>
    <Sheet
      variant="solid"
      color={color}
      invertedColors
      sx={{
        ...(color !== "warning" && {
          bgcolor: `${color}.800`,
        }),
        flexGrow: 1,
        width: "100%",
      }}
    >
      <Box p={2}>
        <Divider sx={{ my: 2 }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { md: "flex-start" },
            justifyContent: "flex-start",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          {getCard(
            "Star Wars API",
            "Explore Docs",
            "https://swapi.dev/",
            "https://ph-files.imgix.net/516f1efd-ac50-4c05-82f7-7336830265ad.png"
          )}
          {getCard(
            "Material UI",
            "Explore Docs",
            "https://mui.com/material-ui/getting-started/overview/",
            "https://mui.com/static/logo.png"
          )}
          <List
            size="sm"
            orientation="horizontal"
            wrap
            sx={{ flexGrow: 0, "--ListItem-radius": "8px", ml: "auto"}}
          >
            <ListItem nested sx={{ width: { xs: "50%", md: 80 } }}>
              <ListSubheader>Sitemap</ListSubheader>
              <List>
                <ListItem>
                  <ListItemButton>
                    <Link href="https://www.linkedin.com/in/albert-miraev/">
                      LinkedIn
                    </Link>
                  </ListItemButton>
                </ListItem>
              </List>
            </ListItem>
          </List>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography
            level="body2"
            sx={{ ml: "auto", px: "2" }}
            startDecorator={
              <Typography textColor="text.tertiary">by</Typography>
            }
          >
            Albert Miraev
          </Typography>
        </Box>
      </Box>
    </Sheet>
    </Box>
  );
};

export default Footer;
