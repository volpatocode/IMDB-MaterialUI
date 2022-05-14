import * as React from "react";
import { CastCrew } from "./styles";
import { useEffect, useState } from "react";
import {
  ImageListItemStyle,
  ImageListStyled,
  ImageListItemsStyled,
  TabPanelStyled,
  TabStyled,
  ButtonOutlined,
  StyledPortal,
} from "./styles";
import { castCrewType } from "../../types/services";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Portal from "@mui/base/Portal";

export type propsType = {
  movie: any;
};

export default function index({ movie }: propsType) {
  const [castCrew, setCastCrew] = useState({} as castCrewType);
  const [value, setValue] = useState("1");
  const [show, setShow] = React.useState(false);
  const container = React.useRef(null);

  const handleClick = () => {
    setShow(!show);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const API_IMG = "http://image.tmdb.org/t/p/original/";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movie}/credits?api_key=f04297956f564d66b4a51ff3da1c6c30&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setCastCrew(data);
      });
  }, []);

  return (
    <>
      <CastCrew movie={movie}>
        <ButtonOutlined variant="text" onClick={handleClick}>
          {show ? "Cast & Crew" : "Cast & Crew"}
        </ButtonOutlined>
        <Box ref={container} sx={{ borderRadius: "5px" }}>
          {show ? (
            <Portal container={container.current}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider"}}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <TabStyled label="Cast" value="1" />
                    <TabStyled label="Crew" value="2" />
                  </TabList>
                </Box>
                <TabPanelStyled value="1">
                  <ImageListStyled gap={0} cols={1}>
                    {castCrew?.cast?.map((cast) => (
                      <ImageListItemsStyled key={cast.id}>
                        <img
                          src={
                            cast.profile_path
                              ? API_IMG + cast.profile_path
                              : "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
                          }
                          srcSet={
                            cast.profile_path
                              ? API_IMG + cast.profile_path
                              : "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
                          }
                          alt={cast.name ? cast.name : "No name provided"}
                          loading="lazy"
                        />
                        <ImageListItemStyle
                          title={cast.name ? cast.name : "No name provided"}
                          subtitle={
                            <span>
                              as:{" "}
                              {cast.character
                                ? cast.character
                                : "No character provided"}
                            </span>
                          }
                          position="below"
                        />
                      </ImageListItemsStyled>
                    ))}
                  </ImageListStyled>
                </TabPanelStyled>
                <TabPanelStyled value="2">
                  <ImageListStyled gap={0} cols={1}>
                    {castCrew?.crew?.map((crew) => (
                      <ImageListItemsStyled key={crew.id}>
                        <img
                          src={
                            crew.profile_path
                              ? API_IMG + crew.profile_path
                              : "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
                          }
                          srcSet={
                            crew.profile_path
                              ? API_IMG + crew.profile_path
                              : "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
                          }
                          alt={crew.name ? crew.name : "No name provided"}
                          loading="lazy"
                        />
                        <ImageListItemStyle
                          title={crew.name ? crew.name : "No name provided"}
                          subtitle={
                            <span>
                              as: {crew.job ? crew.job : "No job provided"}
                            </span>
                          }
                          position="below"
                        />
                      </ImageListItemsStyled>
                    ))}
                  </ImageListStyled>
                </TabPanelStyled>
              </TabContext>
            </Portal>
          ) : null}
        </Box>
      </CastCrew>
    </>
  );
}
