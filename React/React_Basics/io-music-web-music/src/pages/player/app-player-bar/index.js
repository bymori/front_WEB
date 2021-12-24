/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-24 13:32:51
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-24 22:44:59
 */
import React, { memo, useState, useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getSongDetailAction,
  changeSequenceAction,
} from '../store/actionCreators';

import { getSizeImage, formatDate, getPlaySong } from '@/utils/format-utils';
import { NavLink } from 'react-router-dom';

import { Slider } from 'antd';
import { PlayerBarWrapper, Control, PlayInfo, Operator } from './style';

export default memo(function IOAppPlayerBar() {
  // props and state
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // redux hook
  const { currentSong, sequence } = useSelector((state) => ({
    currentSong: state.getIn(['player', 'currentSong']),
    sequence: state.getIn(['player', 'sequence']),
  }));

  const dispatch = useDispatch();

  // other hooks
  const audioRef = useRef();

  useEffect(() => {
    dispatch(getSongDetailAction(468517654));
  }, [dispatch]);

  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id);
  }, [currentSong]);

  // other handle
  const picUrl = (currentSong.al && currentSong.al.picUrl) || '';
  const singerName = (currentSong.ar && currentSong.ar[0].name) || '未知歌手';
  const duration = currentSong.dt || 0;
  const showDuration = formatDate(duration, 'mm:ss');
  const showCurrentTime = formatDate(currentTime, 'mm:ss');
  //   const progress = (currentTime / duration) * 100;

  // handle function
  const playMusic = useCallback(() => {
    // audioRef.current.src = getPlaySong(currentSong.id);
    // audioRef.current.play();

    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const timeUpdate = (e) => {
    // const currentTime = e.target.currentTime;

    if (!isChanging) {
      setCurrentTime(e.target.currentTime * 1000);
      setProgress((currentTime / duration) * 100);
    }
  };

  const changeSequence = () => {
    let currentSequence = sequence + 1;
    if (currentSequence > 2) {
      currentSequence = 0;
    }
    dispatch(changeSequenceAction(currentSequence));
  };

  const sliderChange = useCallback(
    (value) => {
      setIsChanging(true);
      const currentTime = (value / 100) * duration;
      setCurrentTime(currentTime);
      setProgress(value);
    },
    [duration]
  );

  const sliderAfterChange = useCallback(
    (value) => {
      const currentTime = ((value / 100) * duration) / 1000;
      audioRef.current.currentTime = currentTime;
      setCurrentTime(currentTime * 1000);
      setIsChanging(false);

      if (!isPlaying) {
        playMusic();
      }
    },
    [duration, isPlaying, playMusic]
  );

  //   function formatter(value) {
  // // 废弃命令 sliderChange 设置 currentTime 直接显示 showCurrentTime 只需要设置一次
  //     const currentTime = (value / 100) * duration;
  //     const tipFormatter = formatDate(currentTime, 'mm:ss');
  //     // return `${tipFormatter}`;
  //     return `${showCurrentTime}`;
  //   }

  return (
    <PlayerBarWrapper className="sprite_player">
      <div className="content  wrap-v2">
        <Control isPlaying={isPlaying}>
          <button className="sprite_player prev"></button>
          <button
            className="sprite_player play"
            onClick={(e) => playMusic()}></button>
          {/* todo 音乐是否可用 /check/music?id=1317486046 */}
          <button className="sprite_player next"></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/player">
              <img src={getSizeImage(picUrl, 35)} alt="" />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <a href="/" className="singer-name">
                {singerName}
              </a>
            </div>
            <div className="progress">
              <Slider
                defaultValue={0}
                value={progress}
                onChange={sliderChange}
                onAfterChange={sliderAfterChange}
                // tipFormatter={formatter}
                tipFormatter={() => {
                  return `${showCurrentTime}`;
                }}
              />
              <div className="time">
                <span className="now-time">{showCurrentTime}</span>
                <span className="divider">/</span>
                <span className="duration">{showDuration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={sequence}>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button
              className="sprite_player btn loop"
              onClick={(e) => changeSequence()}></button>
            <button className="sprite_player btn playlist"></button>
          </div>
        </Operator>
      </div>
      <audio
        ref={audioRef}
        onTimeUpdate={(e) => timeUpdate(e)}
        // onEnded={(e) => handleMusicEnded()}
      />
    </PlayerBarWrapper>
  );
});
