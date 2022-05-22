import React from 'react'
import {Tags as data} from '../../../../data/tags'
import {TagsContainer, TagsWrapper, TagItem} from './tags-styled'
const Tags = () => {
  return (
    <TagsContainer>
        <TagsWrapper>
        {data.map((item, index) =>{
            return(
                <TagItem key= {index} 
                randomPadding={Math.floor((Math.random() * 7 ) + 4)}
                randomRotation={Math.floor((Math.random() * -2 )+ 1)}
                
                >
                    <span>{(item.name).toUpperCase()}</span>
                </TagItem>
            )
        })}
        </TagsWrapper>
    </TagsContainer>
  )
}

export default Tags