import * as React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { castCrewType } from "../../types/services";
import {
  ButtonOutlined,
  CastCrew,
  BoxModal,
  GridTitle,
  GridCast,
  GridCrew,
  BoxCast,
  BoxCrew,
} from "./styles";
import CastCrewContainer from "../CastCrewContainer";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";

export type propsType = {};

export default function index({}: propsType) {
  const API_IMG = "http://image.tmdb.org/t/p/original/";
  const [castCrew, setCastCrew] = useState({} as castCrewType);
  const router = useRouter();

  const [openCast, setOpenCast] = useState(false);
  const handleCastOpen = () => setOpenCast(true);
  const handleCastClose = () => setOpenCast(false);

  const [openCrew, setOpenCrew] = useState(false);
  const handleCrewOpen = () => setOpenCrew(true);
  const handleCrewClose = () => setOpenCrew(false);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        router.query.movie as string
      }/credits?api_key=f04297956f564d66b4a51ff3da1c6c30&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setCastCrew(data);
      });
  }, [router]);

  return (
    <>
      <CastCrew>
        <ButtonOutlined variant="text" onClick={handleCastOpen}>
          Cast
        </ButtonOutlined>
        <Modal
          open={openCast}
          onClose={handleCastClose}
          aria-labelledby="Cast"
          aria-describedby="Cast"
        >
          <BoxModal>
            <BoxCast>
              <GridTitle>Cast</GridTitle>
              <GridCast wrap="wrap" container columnSpacing={1} rowSpacing={1}>
                {castCrew?.cast?.slice(0, 12).map(
                  (cast) =>
                    cast.profile_path && (
                      <Grid item xs={6} md={4} lg={3} key={cast.id}>
                        <CastCrewContainer
                          name={cast.name ? cast.name : "No name provided"}
                          info={
                            <span>
                              as:{" "}
                              {cast.character
                                ? cast.character
                                : "No character provided"}
                            </span>
                          }
                          src={
                            cast.profile_path
                              ? API_IMG + cast.profile_path
                              : "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
                          }
                        />
                      </Grid>
                    )
                )}
              </GridCast>
            </BoxCast>
          </BoxModal>
        </Modal>

        <ButtonOutlined variant="text" onClick={handleCrewOpen}>
          Crew
        </ButtonOutlined>
        <Modal
          open={openCrew}
          onClose={handleCrewClose}
          aria-labelledby="Crew"
          aria-describedby="Crew"
        >
          <BoxModal>
            <BoxCrew>
              <GridTitle>Crew</GridTitle>
              <GridCrew wrap="wrap" container columnSpacing={1} rowSpacing={1}>
                {castCrew?.crew?.slice(0, 12).map(
                  (crew) =>
                    crew.profile_path && (
                      <Grid item xs={6} md={4} lg={3} key={crew.id}>
                        <CastCrewContainer
                          name={crew.name ? crew.name : "No name provided"}
                          info={
                            <span>
                              {crew.job ? crew.job : "No character provided"}
                            </span>
                          }
                          src={
                            crew.profile_path
                              ? API_IMG + crew.profile_path
                              : "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
                          }
                        />
                      </Grid>
                    )
                )}
              </GridCrew>
            </BoxCrew>
          </BoxModal>
        </Modal>
      </CastCrew>
    </>
  );
}
