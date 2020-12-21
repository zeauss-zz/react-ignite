import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../../redux/games/games.action";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import styled from "styled-components";

import Game from "../../components/game/game.component";
import GameDetail from "../../components/game-detail/game-detail.component";
import { useLocation } from "react-router-dom";
import { fadeIn } from '../../animations'

const Home = () => {
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.games
  );

  return (
    <GameList variants={fadeIn} initial='hidden' animate='show'>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        {searched.length ? (
          <div className="seached">
            <h2>Searched Games</h2>
            <Games>
              {searched.map((game) => (
                <Game key={game.id} game={game} />
              ))}
            </Games>
          </div>
        ): null}
        <h2>Upcoming Games</h2>
        <Games>
          {upcoming.map((game) => (
            <Game key={game.id} game={game} />
          ))}
        </Games>
        <h2>Popular Games</h2>
        <Games>
          {popular.map((game) => (
            <Game key={game.id} game={game} />
          ))}
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames.map((game) => (
            <Game key={game.id} game={game} />
          ))}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
