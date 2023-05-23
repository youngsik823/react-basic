import React from 'react'
import PropTypes from 'prop-types'

const NickName = props => {
  
    let NickName = '김철수';

    const changeNickName = e => {
        console.log('changeNickName!! call!');

        nickName = '척척박사';
    }

    return (
      <>
        <h1>Hello ~~~ {nickName}</h1>
        <button className='btn' onClick={changeNickName}>척척박사</button>
      </>
      )
}

NickName.propTypes = {}

export default NickName