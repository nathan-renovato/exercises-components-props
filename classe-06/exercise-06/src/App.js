import './App.css';
import AnnaBia from './assets/anna-bia.svg';
import CharlesSantos from './assets/charles-santos.svg';
import KelvinCosta from './assets/kelvin-costa.svg';
import MarioHisashi from './assets/mario-hisashi.svg';
import UserCard from './components/UserCard';


const users = [
  {
    id: 1,
    imageProfile: KelvinCosta,
    name: 'Kelvin Costa',
    userName: '@costa',
    numberFollowers: 140,
    numberFollowing: 207
  },
  {
    id: 2,
    imageProfile: CharlesSantos,
    name: 'Charles Santos',
    userName: '@charles.santos',
    numberFollowers: 302,
    numberFollowing: 419
  },
  {
    id: 3,
    imageProfile: AnnaBia,
    name: 'Anna Bia',
    userName: '@anab',
    numberFollowers: 842,
    numberFollowing: 150
  },
  {
    id: 4,
    imageProfile: MarioHisashi,
    name: 'Mario Hisashi',
    userName: '@hisashi',
    numberFollowers: 28,
    numberFollowing: 17
  }
];

export default function App() {
  return (
    <div className="App">
      {users.map((user) => (
        <UserCard
          key={user.id}
          imageProfile={user.imageProfile}
          name={user.name}
          userName={user.userName}
          numberFollowers={user.numberFollowers}
          numberFollowing={user.numberFollowing}
        />
      ))}
    </div>
  );
}

