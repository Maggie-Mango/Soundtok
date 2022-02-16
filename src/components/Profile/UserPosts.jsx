import React, {useState, useEffect} from 'react';
// import { useAuth } from '../../contexts/AuthContext.jsx';
import Song from './Song.jsx';
import Draft from './Draft.jsx';
import dummySongs from './dummySongs.jsx';
import dummyDrafts from './dummyDrafts.jsx';
import styled from 'styled-components';
const axios = require('axios');

const Button = styled.button`
  color: rgb(255, 250, 206);
  border: 2px solid rgb(255, 250, 206);
  margin: 0px 10px;
  padding: 2px 5px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:space-around;
  height: 600px;
  width: 1000px;
  margin-top: 10px;
  flex-wrap: wrap;
`;

// const UserPosts = ({isCurrentUser}) => {
const UserPosts = ({isCurrentUser, profileName}) => {
  // const { user } = useAuth();
  const [tab, setTab] = useState('Posts');
  const [songs, setSongs] = useState(dummySongs);
  const [drafts, setDrafts] = useState(dummyDrafts);
  const {songsToDelete, setSongsToDelete} = useState([]);

  const removeSong = (songId, source) => {
    // needs call to remove from db. stretch goal - select and remove multiple songs
    // to-dos: add confirmation popup, add select boxes to select multiple songs before clicking a separate delete button
    // cut this section after post request is implemented
    if (source === 'Posts') {
      setSongs(songs.filter(song => song.songId !== songId));
    } else {
      setDrafts(drafts.filter(draft => draft.songId !== songId));
    }
    /*
    // axios.post('/deleteSongs', songsToDelete)
    let formData = {
      source: source,
      songIds: [songId] //will eventually be songsToDelete
    };

    axios.post('/deleteSongs', formData)
      .then(function (response) {
        // console.log(response);
        if (source === 'Posts') {
          //will need to filter out all songIds in the array
          setSongs(songs.filter(song => song.songId !== songId));
        } else {
          setDrafts(drafts.filter(draft => draft.songId !== songId));
        }
      })
      .catch(function (error) {
        //pop-up with with message - please review error and try again
        console.log(error);
      });
      */
  };

  // useEffect(() => {
  //   //api call to get songs
  //   //if logged in, api call to get drafts
  //   console.log('test');
  // axios.get('/userSongs', {
  //   params: {
  //     user: profileName
  //   }
  // })
  //   .then((response) => {
  //     setSongs(response.songs);
  //   })
  //   .catch((err) => {
  //     //make pop-up
  //     console.log(err);
  //   });

  // if (isCurrentUser) {
  // axios.get('/userDrafts', {
  //   params: {
  //     user: profileName
  //   }
  // })
  //   .then((response) => {
  //     setDrafts(response.drafts);
  //   })
  //   .catch((err) => {
  //     //make pop-up
  //     console.log(err);
  //   });
  // };
  // console.log('test'); //logging twice - is strict mode on? or something higher up in the tree is unmounting and remounting?
  // });



  return (
    <>
      <ButtonWrapper>
        <Button onClick={() => setTab('Posts')} >Posts</Button>
        {isCurrentUser ?
          <Button onClick={() => setTab('Drafts')}>Drafts</Button>
          : null}
      </ButtonWrapper>
      {/* <p>User from context: {user}</p> */}
      <PostWrapper>
        {(tab === 'Posts' || !isCurrentUser) ? songs.map((song, i) => {
          return (
            <Song
              key={i}
              songId={song.songId}
              username={song.username}
              profilePicture={song.profilePicture}
              projectTitle={song.projectTitle}
              postDescription={song.postText}
              projectAudioLink={song.projectAudioLink}
              projectLength={song.projectLength}
              tags={song.tags}
              removeSong={removeSong}
              isCurrentUser={isCurrentUser}
            ></Song>
          );
        }) : null}
        {(tab === 'Drafts' && isCurrentUser) ? drafts.map((draft, i) => {
          return (
            <Draft
              key={i}
              songId={draft.songId}
              username={draft.username}
              profilePicture={draft.profilePicture}
              projectTitle={draft.projectTitle}
              postDescription={draft.postText}
              projectAudioLink={draft.projectAudioLink}
              projectLength={draft.projectLength}
              tags={draft.tags}
              removeDraft={removeSong}
            ></Draft>
          );
        }) : null}
      </PostWrapper>
    </>
  );
};

export default UserPosts;

