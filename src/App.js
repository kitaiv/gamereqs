import React, { useCallback, useState, useEffect } from 'react';
import gamereqsTheme from './styles';
import { GameCard, GameModal } from './components';
import { CssVarsProvider } from '@mui/joy';
import { getTestData } from './api';

function App() {
  const [open, setOpen] = useState(false);
  const [activeCardInfo, setActiveCardInfo] = useState({});

  function handleOpen() {
    setOpen(!open);
  }

  function handleActiveCardInfo(cardData = {}) {
    setActiveCardInfo(cardData);
  }

  const memoizedHandleActiveCardInfo = useCallback(
    (cardData = {}) => {
      handleActiveCardInfo(cardData);
    },
    [activeCardInfo]
  );

  const testCardData = {
    id: 693,
    slug: 'the-last-guardian',
    name: 'The Last Guardian',
    name_original: 'The Last Guardian',
    description:
      '<p>The Last Guardian is a brainchild of Fumito Ueda, who also created Shadow of the Colossus. The game spent almost a decade in development before it was complete. The Last Guardian is defined by its spectacular mountain landscapes, eerie music, and a heartwarming mood.<br />\nThe main protagonist is a nameless boy, who is kept as a prisoner in cyclopean castle ruins and has to escape. While in captivity, the boy’s first task is to befriends his cellmate, a fantasy creature named Trico, who is a gigantic half-bird, half-cat hybrid that slightly reminds a hippogriff. Trico is the second main character and the mascot of The Last Guardian; the creature’s animation is incredibly detailed, and its behavior is modeled after real animals. The two form an unlikely symbiosis. The boy needs the creature’s strength and ability to fly to overcome obstacles and fend off guards who try to bring the characters back to their cells. Trico, in turn, needs the boy’s wits and agility to sneak, solve puzzles, feed the creature and heal its wounds. The player only controls the boy, while Trico needs to be manipulated into performing certain actions. Over time, the characters develop a strong emotional bond that adds to the game’s impact on the player.</p>',
    metacritic: 82,
    metacritic_platforms: [],
    released: '2016-10-25',
    tba: false,
    updated: '2023-01-05T03:30:32',
    background_image:
      'https://media.rawg.io/media/games/276/2769b1982cd132a60c69dc5d574445fa.jpg',
    background_image_additional:
      'https://media.rawg.io/media/screenshots/775/77524f2aaa2e19438281e76c18cba234.jpg',
    website: 'http://www.gendesign.co.jp/E_index.html',
    rating: 4.08,
    rating_top: 5,
    ratings: [
      {
        id: 5,
        title: 'exceptional',
        count: 271,
        percent: 39.91
      },
      {
        id: 4,
        title: 'recommended',
        count: 253,
        percent: 37.26
      },
      {
        id: 3,
        title: 'meh',
        count: 124,
        percent: 18.26
      },
      {
        id: 1,
        title: 'skip',
        count: 31,
        percent: 4.57
      }
    ],
    reactions: {
      2: 1,
      3: 1,
      7: 1,
      9: 1,
      10: 1,
      13: 1,
      14: 1,
      16: 1,
      19: 1
    },
    added: 2887,
    added_by_status: {
      yet: 230,
      owned: 1627,
      beaten: 504,
      toplay: 306,
      dropped: 150,
      playing: 70
    },
    playtime: 7,
    screenshots_count: 10,
    movies_count: 0,
    creators_count: 6,
    achievements_count: 144,
    parent_achievements_count: 24,
    reddit_url: 'https://www.reddit.com/r/thelastguardian/',
    reddit_name: 'The Last Guardian',
    reddit_description:
      'Official subreddit of "The Last Guardian", the long-awaited video game from genDESIGN and Team Ico for the PS4.',
    reddit_logo:
      'https://b.thumbs.redditmedia.com/EUTKzXw8hiIhD6AgpI3OfLiOOI3Uwqq1OSiO92cgFQk.png',
    reddit_count: 500,
    twitch_count: 124,
    youtube_count: 1000000,
    reviews_text_count: 4,
    ratings_count: 675,
    suggestions_count: 525,
    alternative_names: ['TLG'],
    metacritic_url: '',
    parents_count: 1,
    additions_count: 0,
    game_series_count: 6,
    user_game: null,
    reviews_count: 679,
    saturated_color: '0f0f0f',
    dominant_color: '0f0f0f',
    parent_platforms: [
      {
        platform: {
          id: 2,
          name: 'PlayStation',
          slug: 'playstation'
        }
      }
    ],
    platforms: [
      {
        platform: {
          id: 18,
          name: 'PlayStation 4',
          slug: 'playstation4',
          image: null,
          year_end: null,
          year_start: null,
          games_count: 6530,
          image_background:
            'https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg'
        },
        released_at: '2016-10-25',
        requirements: {}
      }
    ],
    stores: [
      {
        id: 700,
        url: '',
        store: {
          id: 3,
          name: 'PlayStation Store',
          slug: 'playstation-store',
          domain: 'store.playstation.com',
          games_count: 7787,
          image_background:
            'https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg'
        }
      }
    ],
    developers: [
      {
        id: 6,
        name: 'Sony Interactive Entertainment',
        slug: 'sony-interactive-entertainment',
        games_count: 611,
        image_background:
          'https://media.rawg.io/media/games/276/2769b1982cd132a60c69dc5d574445fa.jpg'
      },
      {
        id: 26191,
        name: 'SIE Japan Studio',
        slug: 'sie-japan-studio',
        games_count: 9,
        image_background:
          'https://media.rawg.io/media/screenshots/4f9/4f9ccda7f9644b3a8d4af06b12e92710.jpg'
      },
      {
        id: 19032,
        name: 'Team Ico',
        slug: 'team-ico',
        games_count: 4,
        image_background:
          'https://media.rawg.io/media/games/276/2769b1982cd132a60c69dc5d574445fa.jpg'
      }
    ],
    genres: [
      {
        id: 4,
        name: 'Action',
        slug: 'action',
        games_count: 168167,
        image_background:
          'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg'
      },
      {
        id: 3,
        name: 'Adventure',
        slug: 'adventure',
        games_count: 128587,
        image_background:
          'https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg'
      }
    ],
    tags: [
      {
        id: 13,
        name: 'Atmospheric',
        slug: 'atmospheric',
        language: 'eng',
        games_count: 26601,
        image_background:
          'https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg'
      },
      {
        id: 69,
        name: 'Action-Adventure',
        slug: 'action-adventure',
        language: 'eng',
        games_count: 12691,
        image_background:
          'https://media.rawg.io/media/games/d30/d30ef0c7dd4878161b1f781e297ae6a0.jpg'
      },
      {
        id: 37796,
        name: 'exclusive',
        slug: 'exclusive',
        language: 'eng',
        games_count: 4512,
        image_background:
          'https://media.rawg.io/media/games/1f5/1f5ddf7199f2778ff83663b93b5cb330.jpg'
      },
      {
        id: 88,
        name: 'Cute',
        slug: 'cute',
        language: 'eng',
        games_count: 26948,
        image_background:
          'https://media.rawg.io/media/games/3e3/3e355e1b8a5ee47f4c76e28e3055236d.jpg'
      },
      {
        id: 37797,
        name: 'true exclusive',
        slug: 'true-exclusive',
        language: 'eng',
        games_count: 3995,
        image_background:
          'https://media.rawg.io/media/screenshots/bb7/bb71799efe642c69f28c92c835a1257d.jpg'
      },
      {
        id: 478,
        name: '3rd-Person Perspective',
        slug: '3rd-person-perspective',
        language: 'eng',
        games_count: 86,
        image_background:
          'https://media.rawg.io/media/games/de6/de66bc4c72b45c3bb906c85d0628112d.jpg'
      },
      {
        id: 209,
        name: 'Drama',
        slug: 'drama',
        language: 'eng',
        games_count: 2339,
        image_background:
          'https://media.rawg.io/media/games/b28/b28a135fa6133e17b228f46902a4fda4.jpg'
      }
    ],
    publishers: [
      {
        id: 10212,
        name: 'Sony Computer Entertainment',
        slug: 'sony-computer-entertainment',
        games_count: 493,
        image_background:
          'https://media.rawg.io/media/games/4b6/4b67558bf04c7211aabeff179271bdd8.jpg'
      }
    ],
    esrb_rating: {
      id: 3,
      name: 'Teen',
      slug: 'teen'
    },
    clip: null,
    description_raw:
      'The Last Guardian is a brainchild of Fumito Ueda, who also created Shadow of the Colossus. The game spent almost a decade in development before it was complete. The Last Guardian is defined by its spectacular mountain landscapes, eerie music, and a heartwarming mood.\nThe main protagonist is a nameless boy, who is kept as a prisoner in cyclopean castle ruins and has to escape. While in captivity, the boy’s first task is to befriends his cellmate, a fantasy creature named Trico, who is a gigantic half-bird, half-cat hybrid that slightly reminds a hippogriff. Trico is the second main character and the mascot of The Last Guardian; the creature’s animation is incredibly detailed, and its behavior is modeled after real animals. The two form an unlikely symbiosis. The boy needs the creature’s strength and ability to fly to overcome obstacles and fend off guards who try to bring the characters back to their cells. Trico, in turn, needs the boy’s wits and agility to sneak, solve puzzles, feed the creature and heal its wounds. The player only controls the boy, while Trico needs to be manipulated into performing certain actions. Over time, the characters develop a strong emotional bond that adds to the game’s impact on the player.'
  };
  return (
    <CssVarsProvider theme={gamereqsTheme}>
      <GameCard
        open={open}
        handleOpen={handleOpen}
        handleActiveCardInfo={memoizedHandleActiveCardInfo}
        cardInfo={testCardData}
      />

      <GameModal
        open={open}
        handleOpen={handleOpen}
        activeCardInfo={activeCardInfo}
      />
    </CssVarsProvider>
  );
}

export default App;
