import { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '../index.css'; // css는 상대경로 -> jest error 발생 방지
import { css } from '@emotion/react';
import ClipLoader from 'react-spinners/ClipLoader';
import BarLoader from 'react-spinners/BarLoader';
import BounceLoader from 'react-spinners/BounceLoader';
import {
  CircleLoader,
  ClockLoader,
  DotLoader,
  FadeLoader,
  GridLoader,
  HashLoader,
  // MoonLoader,¥
  PacmanLoader,
  PuffLoader,
  PulseLoader,
  RingLoader,
  RiseLoader,
  RotateLoader,
  ScaleLoader,
  SyncLoader,
} from 'react-spinners';
import Video from './Video';
// import { sum } from '@utils/sum';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const getFunction = async () => {
  return await import('@utils/sum');
};
const Counter = () => {
  const [number, setNumber] = useState(0);

  const onIncrease = useCallback(() => setNumber(number + 1), [number]);
  const onDecrease = useCallback(() => setNumber(number - 1), [number]);

  return (
    <div style={{ display: 'flex' }}>
      {/* <ClipLoader
        color={'#00438e'}
        loading={true}
        css={override}
        size={50}
        speedMultiplier={0.5}
      />
      <BarLoader
        speedMultiplier={0.5}
        color={'#00438e'}
        loading={true}
        css={override}
        height={4}
        width={50}
      />
      <BounceLoader color={'#00438e'} loading={true} css={override} size={50} />
      <CircleLoader color={'#00438e'} loading={true} css={override} size={50} />

      <ClockLoader color={'#00438e'} loading={true} css={override} size={50} />
      <DotLoader color={'#00438e'} loading={true} css={override} size={50} />
      <FadeLoader
        color={'#00438e'}
        loading={true}
        css={override}
        height={15}
        width={5}
        radius={2}
        margin={2}
        speedMultiplier={0.5}
      />
      <GridLoader
        color={'#00438e'}
        loading={true}
        css={override}
        size={50}
        speedMultiplier={0.5}
      />
      <HashLoader
        color={'#00438e'}
        loading={true}
        css={override}
        size={50}
        speedMultiplier={0.5}
      />
      {/* <MoonLoader
        color={'#00438e'}
        loading={true}
        css={override}
        size={50}
        speedMultiplier={0.5}
      /> */}
      {/* <PacmanLoader
        color={'#00438e'}
        loading={true}
        css={override}
        size={50}
        speedMultiplier={0.5}
      />
      <HashLoader
        color={'#00438e'}
        loading={true}
        css={override}
        size={50}
        speedMultiplier={0.5}
      />
      <PuffLoader
        color={'#00438e'}
        loading={true}
        css={override}
        size={50}
        speedMultiplier={0.5}
      />
      <PulseLoader
        color={'#00438e'}
        loading={true}
        css={override}
        size={50}
        speedMultiplier={0.5}
      />
      <RingLoader
        color={'#00438e'}
        loading={true}
        css={override}
        size={50}
        speedMultiplier={0.5}
      />
      <RiseLoader
        color={'#00438e'}
        loading={true}
        css={override}
        size={50}
        speedMultiplier={0.5}
      />
      <RotateLoader
        color={'#00438e'}
        loading={true}
        css={override}
        size={50}
        speedMultiplier={0.5}
      />
      <ScaleLoader
        color={'#00438e'}
        loading={true}
        css={override}
        speedMultiplier={0.5}
      />
      <SyncLoader
        color={'#00438e'}
        loading={true}
        css={override}
        size={50}
        speedMultiplier={0.5}
      /> */}
      <Video />
      {/* <h2>{number}</h2>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button> */}
    </div>
  );
  // return (
  //   <>
  //     <h1 onClick={() => getFunction()}>Counter</h1>
  //     <Link to="/notFound">Notfound</Link>
  //     <br />
  //     <Link to="/profile">profile</Link>
  //     <CounterContainer>
  //       <div className=".zero">0</div>
  //     </CounterContainer>
  //   </>
  // );
};

const CounterContainer = styled.div`
  display: flex;
  width: 100px;
  justify-content: space-between;
  background-color: aqua;
`;

export default Counter;
