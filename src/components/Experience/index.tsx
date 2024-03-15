import './index.less';
import { Experience } from '../../types';

type Props = {
  experiences: Experience[];
};

export default (props: Props) => {
  const { experiences } = props;

  return (
    <div>
      {experiences.some((experience) => experience.type === 'company') && (
        <div>
          <h2>工作经历</h2>
          {experiences.map((experience, index) => {
            if (experience.type === 'company') {
              return (
                <div key={index} className="experience">
                  <div className="experience-title">
                    <div className="icon-wrapper">
                      <img src={experience.icon} alt="" />
                      <div className="font-bold">
                        {experience.company} | {experience.position}
                      </div>
                    </div>
                    <div className="experience-time">{experience.time}</div>
                  </div>
                  <ul>
                    {experience.descriptions.map((description, index) => (
                      <li key={index}>{description}</li>
                    ))}
                  </ul>
                </div>
              );
            }
          })}
        </div>
      )}
      {experiences.some((experience) => experience.type === 'education') && (
        <div>
          <h2>教育经历</h2>
          {experiences.map((experience, index) => {
            if (experience.type === 'education') {
              return (
                <div key={index} className="experience">
                  <div className="experience-title">
                    <div className="icon-wrapper">
                      <img src={experience.icon} alt="" />
                      <div className="font-bold">
                        {experience.school} | {experience.major}
                      </div>
                    </div>
                    <div className="experience-time">{experience.time}</div>
                  </div>
                  <ul>
                    {experience.descriptions.map((description, index) => (
                      <li key={index}>{description}</li>
                    ))}
                  </ul>
                </div>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};
