import './index.css';

interface Props {
  order: number;
  text: string;
}

const StepBanner = ({ order, text }: Props) => {
  return (
  <h1 className='banner'>
    <div className="Oval"> {order} </div>
    <span>{text}</span>
  </h1>
  );
};

export default StepBanner;