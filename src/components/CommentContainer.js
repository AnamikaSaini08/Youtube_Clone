import React from 'react';
import CommentList from './CommentList';

const commentData = [
    {
        id: 1,
        name: "Anamika Saini",
        desc: "Lorem ipsum is the best thing the world",
        reply: [
            {
                name: "Anamika Saini",
                desc: "Lorem ipsum is the best thing the world",
                reply: [
                    {
                        name: "Anamika Saini",
                        desc: "Lorem ipsum is the best thing the world",
                        reply: [],
                    }
                ],
            },
            {
                name: "Anamika Saini",
                desc: "Lorem ipsum is the best thing the world",
                reply: [  {
                    name: "Anamika Saini",
                    desc: "Lorem ipsum is the best thing the world",
                    reply: [ {
                        name: "Anamika Saini",
                        desc: "Lorem ipsum is the best thing the world",
                        reply: [ {
                            name: "Anamika Saini",
                            desc: "Lorem ipsum is the best thing the world",
                            reply: [],
                        }],
                    }],
                },
                {
                    name: "Anamika Saini",
                    desc: "Lorem ipsum is the best thing the world",
                    reply: [],
                }
            ],
            }
        ],
    },
        {
            id: 2,
            name: "Anamika Saini",
            desc: "Lorem ipsum is the best thing the world",
            reply: [
    
            ],
        },
       
        {
            id: 3,
            name: "Anamika Saini",
            desc: "Lorem ipsum is the best thing the world",
            reply: [
    
            ],
        },
        {
            id: 4,
            name: "Anamika Saini",
            desc: "Lorem ipsum is the best thing the world",
            reply: [
    
            ],
        },
]
const CommentContainer = () => {
  return (
    <div>
      <h1 className='text-bold'>Comments</h1>
      <CommentList comments={commentData}/>
    </div>
  )
}

export default CommentContainer
