import * as React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { castCrewType } from "../../types/services";
import {
  StyledStack,
  ButtonOutlined,
  CastCrew,
  BoxModal,
  GridCast,
  GridCrew,
  GridTitle,
} from "./styles";
import CastCrewContainer from "../CastCrewContainer";
import Modal from "@mui/material/Modal";

export type propsType = {
  movie: any;
};

export default function index({ movie }: propsType) {
  const [castCrew, setCastCrew] = useState({} as castCrewType);
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const API_IMG = "http://image.tmdb.org/t/p/original/";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movie}/credits?api_key=f04297956f564d66b4a51ff3da1c6c30&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setCastCrew(data);
      });
  }, [router]);

  return (
    <>
      <CastCrew>
        <ButtonOutlined variant="text" onClick={handleOpen}>
          Cast & Crew
        </ButtonOutlined>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <BoxModal>
            <GridTitle>Cast</GridTitle>
            <GridCast
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              rowGap={2}
            >
              <StyledStack direction="row" spacing={1}>
                {castCrew?.cast?.map(
                  (cast) =>
                    cast.profile_path && (
                      <CastCrewContainer
                        key={cast.id}
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
                    )
                )}
              </StyledStack>
            </GridCast>
            <GridTitle>Crew</GridTitle>
            <GridCrew
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <StyledStack direction="row" spacing={1}>
                {castCrew?.crew?.map(
                  (crew) =>
                    crew.profile_path && (
                      <CastCrewContainer
                        key={crew.id}
                        name={crew.name ? crew.name : "No name provided"}
                        info={
                          <span>
                            as: {crew.job ? crew.job : "No character provided"}
                          </span>
                        }
                        src={
                          crew.profile_path
                            ? API_IMG + crew.profile_path
                            : "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
                        }
                      />
                    )
                )}
              </StyledStack>
            </GridCrew>
          </BoxModal>
        </Modal>
      </CastCrew>
    </>
  );
}
