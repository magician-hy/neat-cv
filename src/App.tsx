import './App.less';
import Info from './components/Info/index.tsx';
import Skill from './components/Skill/index.tsx';
import Experience from './components/Experience/index.tsx';
import Project from './components/Project/index.tsx';
import mock from './mock.ts';

function App() {
  return (
    <div className="page-container">
      <Info info={mock.info} />
      <Skill skills={mock.skills} />
      <Experience experiences={mock.experiences} />
      <Project projects={mock.projects} />
    </div>
  );
}

export default App;
