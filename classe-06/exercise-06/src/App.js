import './App.css';
import AnnaImage from './assets/anna-bia.svg';
import CharlesImage from './assets/charles-santos.svg';
import KelvinImage from './assets/kelvin-costa.svg';
import MarioImage from './assets/mario-hisashi.svg';
import UserCard from './components/UserCard';


const peoples = [
  {
    id: 1,
    imageProfile: KelvinImage,
    name: 'Kelvin Costa',
    instagramAddress: '@costa',
    numberFollowers: 140,
    numberFollowing: 207
  },
  {
    id: 2,
    imageProfile: CharlesImage,
    name: 'Charles Santos',
    instagramAddress: '@charles.santos',
    numberFollowers: 302,
    numberFollowing: 419
  },
  {
    id: 3,
    imageProfile: AnnaImage,
    name: 'Anna Bia',
    instagramAddress: '@anab',
    numberFollowers: 842,
    numberFollowing: 150
  },
  {
    id: 4,
    imageProfile: MarioImage,
    name: 'Mario Hisashi',
    instagramAddress: '@hisashi',
    numberFollowers: 28,
    numberFollowing: 17
  }
];

export default function App() {
  return (
    <div className="App">
      {peoples.map((people) => (
        <UserCard
          key={people.id}
          imageProfile={people.imageProfile}
          name={people.name}
          instagramAddress={people.instagramAddress}
          numberFollowers={people.numberFollowers}
          numberFollowing={people.numberFollowing}
        />
      ))}
    </div>
  );
}

