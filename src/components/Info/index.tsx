import './index.less';
import { Info } from '../../types';

type Props = {
  info: Info;
};

export default (props: Props) => {
  const { name, gender, age, position, workingYears, phoneNumber, email, picture, github } =
    props.info;

  return (
    <div className="personal-info-wrapper">
      <div className="personal-info">
        <h1 className="name">{name}</h1>
        <div className="info-item detail">
          {gender}&nbsp;&nbsp;|&nbsp;&nbsp;
          <div className="flex-align-center">
            <div className="mt-1">{age}&nbsp;</div>岁
          </div>
        </div>
        <div className="info-item detail">
          {position}&nbsp;&nbsp;|&nbsp;&nbsp;
          <div className="flex-align-center">
            <div className="mt-1">{workingYears}&nbsp;</div>年
          </div>
        </div>
        <div className="info-item contact">
          <div className="flex-align-center">
            电话：
            <div className="mt-1">
              <a href={`tel:${phoneNumber}`} className="none mt-1">
                {phoneNumber}
              </a>
            </div>
          </div>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <div className="flex-align-center">
            邮箱：
            <div className="mt-1">
              <a href={`mailto:${email}`} className="none">
                {email}
              </a>
            </div>
          </div>
        </div>
        <div className="bioLink">
          <div className="icon-wrapper">
            <img src="/github.svg" alt="GitHub" />
            <a href={`${github}`}>GitHub</a>：{github?.replace('https://', '')}
          </div>
        </div>
      </div>
      <div className="picture">
        <img src={picture} alt="照片" width="100" />
      </div>
    </div>
  );
};
